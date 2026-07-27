import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'sonner'
import { login, logout, getCurrentUser } from '../services/authService'
import { testAuth } from '../services/testService'

// Product Data
const products = [
  { id: 1, name: 'Pleat-Front Blouse', price: 2400, image: '/images/product1.jpg', category: 'Tops' },
  { id: 2, name: 'Tiered Midi Dress', price: 3800, image: '/images/product2.jpg', category: 'Dresses' },
  { id: 3, name: 'Tailored Trousers', price: 2900, image: '/images/product3.jpg', category: 'Tailoring' },
  { id: 4, name: 'Cropped Linen Jacket', price: 3200, image: '/images/product4.jpg', category: 'Tops' },
  { id: 5, name: 'Handloom Kurta Set', price: 4100, image: '/images/product5.jpg', category: 'Dresses' },
  { id: 6, name: 'Silk Scarf', price: 1200, image: '/images/product6.jpg', category: 'Accessories' },
  { id: 7, name: 'Embroidered Tote', price: 1800, image: '/images/product7.jpg', category: 'Accessories' },
  { id: 8, name: 'Block-Print Dupatta', price: 1500, image: '/images/product8.jpg', category: 'Accessories' },
]

const productDetails = {
  1: { description: 'A refined blouse with soft pleat detailing, tailored for easy movement and a polished everyday shape.', fabric: 'Cotton-silk blend', fit: 'Relaxed shoulder with a neat waist', care: 'Gentle hand wash or dry clean', delivery: 'Ready to ship in 2-3 days', stock: 20 },
  2: { description: 'A graceful midi dress with tiered movement, finished with a flattering neckline and fluid drape.', fabric: 'Soft rayon voile', fit: 'Easy fit with a defined waist', care: 'Cold wash separately', delivery: 'Ready to ship in 3-4 days', stock: 16 },
  3: { description: 'Structured trousers finished for everyday comfort, with a clean front and ankle-skimming length.', fabric: 'Cotton twill', fit: 'High-rise straight fit', care: 'Machine wash mild', delivery: 'Ready to ship in 4-5 days', stock: 18 },
  4: { description: 'A light cropped jacket in breathable linen, ideal for layering over dresses, kurtas, and camisoles.', fabric: 'Washed linen', fit: 'Boxy cropped fit', care: 'Dry clean recommended', delivery: 'Ready to ship in 3-4 days', stock: 14 },
  5: { description: 'A handloom kurta set with boutique finishing, balanced for festive days and relaxed evenings.', fabric: 'Handloom cotton', fit: 'Straight kurta with easy trousers', care: 'Hand wash in cold water', delivery: 'Ready to ship in 5-7 days', stock: 12 },
  6: { description: 'A soft silk scarf for effortless layering, adding a quiet accent to workwear and occasion looks.', fabric: 'Silk blend', fit: 'One size', care: 'Dry clean only', delivery: 'Ready to ship in 1-2 days', stock: 25 },
  7: { description: 'A carry-all tote with embroidered detailing, sized for daily errands, books, and boutique finds.', fabric: 'Canvas with thread embroidery', fit: 'Spacious interior pocket', care: 'Spot clean gently', delivery: 'Ready to ship in 2-3 days', stock: 22 },
  8: { description: 'A block-print dupatta with a light drape, made to pair with classic kurtas and simple dresses.', fabric: 'Mul cotton', fit: 'Full-length drape', care: 'Cold wash separately', delivery: 'Ready to ship in 2-3 days', stock: 24 },
}

const productCatalog = products.map((product) => ({
  ...product,
  ...productDetails[product.id],
}))

const testimonials = [
  {
    id: 1,
    quote: "They altered my mother's saree blouse in a day. Perfect fit.",
    name: 'Priya D.',
    avatar: '/images/avatar1.jpg'
  },
  {
    id: 2,
    quote: "I walked in nervous about tailoring. Walked out with three outfits planned.",
    name: 'Ananya R.',
    avatar: '/images/avatar2.jpg'
  },
  {
    id: 3,
    quote: "The details are thoughtful—pockets that sit right, hems that hold.",
    name: 'Meera S.',
    avatar: '/images/avatar3.jpg'
  }
]

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // Dialog States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [productPreview, setProductPreview] = useState(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  // User State
  const [user, setUser] = useState(null)
  const [loginLoading, setLoginLoading] = useState(false)
  const [testLoading, setTestLoading] = useState(false)

  // Cart State
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('All')

  // Orders State
  const [orders, setOrders] = useState([])
  const [currentOrder, setCurrentOrder] = useState(null)

  // Initialize user from localStorage
  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  // Filter products
  const filteredProducts = filter === 'All' 
    ? productCatalog 
    : productCatalog.filter(p => p.category === filter)

  // Cart functions
  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const buyNow = (product) => {
    setCart([{ ...product, quantity: 1 }])
    setProductPreview(null)
  }

  // Order functions
  const generateOrderId = () => {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `ORD-${timestamp}-${random}`
  }

  const placeOrder = (shippingInfo, paymentMethod) => {
    const order = {
      id: generateOrderId(),
      items: cart,
      total: cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0),
      shippingInfo,
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      tracking: [
        { status: 'confirmed', message: 'Order confirmed', timestamp: new Date().toISOString() },
        { status: 'processing', message: 'Processing your order', timestamp: null },
        { status: 'shipped', message: 'Order shipped', timestamp: null },
        { status: 'delivered', message: 'Order delivered', timestamp: null },
      ]
    }

    setOrders(prev => [order, ...prev])
    setCurrentOrder(order)
    setCart([])
    setCartOpen(false)
    toast.success(`Order ${order.id} placed successfully!`)
  }

  const getUserOrders = () => {
    return orders
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const updatedTracking = order.tracking.map(step => {
          if (step.status === newStatus && !step.timestamp) {
            return { ...step, timestamp: new Date().toISOString() }
          }
          return step
        })
        return { ...order, status: newStatus, tracking: updatedTracking }
      }
      return order
    }))
  }

  // Authentication handlers
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginLoading(true)
    
    try {
      const email = e.target.email.value
      const password = e.target.password.value
      
      const response = await login(email, password)
      
      setUser({
        name: response.user?.name || email.split('@')[0],
        email: response.user?.email || email
      })
      
      toast.success(`Welcome back, ${response.user?.name || email.split('@')[0]}!`)
      setLoginOpen(false)
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      toast.error(error.message || 'Login failed. Please try again.')
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    toast.success('Logged out successfully')
  }

  const handleTestAuth = async () => {
    if (!user) {
      toast.error('Please login first to test authentication')
      setLoginOpen(true)
      return
    }

    setTestLoading(true)
    try {
      const response = await testAuth()
      toast.success(response.message || 'JWT Authentication Working Successfully!')
    } catch (error) {
      toast.error(error.message || 'Authentication test failed')
    } finally {
      setTestLoading(false)
    }
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    toast.success('Appointment request submitted! We will contact you soon.')
    setBookingOpen(false)
  }

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const value = {
    // Data
    productCatalog,
    testimonials,
    filteredProducts,
    
    // Dialog States
    mobileMenuOpen,
    cartOpen,
    productPreview,
    loginOpen,
    orderHistoryOpen,
    bookingOpen,
    
    // User State
    user,
    loginLoading,
    testLoading,
    
    // Cart State
    cart,
    filter,
    
    // Orders State
    orders,
    currentOrder,
    
    // Setters
    setMobileMenuOpen,
    setCartOpen,
    setProductPreview,
    setLoginOpen,
    setOrderHistoryOpen,
    setBookingOpen,
    setUser,
    setFilter,
    
    // Handlers
    addToCart,
    removeFromCart,
    updateQuantity,
    buyNow,
    placeOrder,
    getUserOrders,
    updateOrderStatus,
    handleLogin,
    handleLogout,
    handleTestAuth,
    handleBookingSubmit,
    scrollToSection,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export default AppContext
