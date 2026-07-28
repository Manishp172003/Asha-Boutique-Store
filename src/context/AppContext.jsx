import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'sonner'
import { login, logout, getCurrentUser } from '../services/authService'
import { testAuth } from '../services/testService'

// Product Data
const products = [
  { id: 1, name: 'Elegant Pearl Necklace', price: 2499, image: '/images/product1.jpg', category: 'Necklace', rating: 4.8, isNew: true, isSale: false },
  { id: 2, name: 'Golden Diamond Ring', price: 1999, image: '/images/product2.jpg', category: 'Ring', rating: 4.7, isNew: false, isSale: true },
  { id: 3, name: 'Luxury Gold Bracelet', price: 1799, image: '/images/product3.jpg', category: 'Bracelet', rating: 4.9, isNew: true, isSale: false },
  { id: 4, name: 'Classic Pearl Earrings', price: 1299, image: '/images/product4.jpg', category: 'Earrings', rating: 4.6, isNew: false, isSale: false },
  { id: 5, name: 'Royal Bridal Set', price: 5999, image: '/images/product5.jpg', category: 'Wedding', rating: 5.0, isNew: false, isSale: true },
  { id: 6, name: 'Minimal Chain Necklace', price: 1499, image: '/images/product6.jpg', category: 'Necklace', rating: 4.5, isNew: true, isSale: false },
  { id: 7, name: 'Pleat-Front Blouse', price: 2400, image: '/images/product1.jpg', category: 'Tops', rating: 4.7, isNew: true, isSale: false },
  { id: 8, name: 'Tiered Midi Dress', price: 3800, image: '/images/product2.jpg', category: 'Dresses', rating: 4.8, isNew: true, isSale: false },
  { id: 9, name: 'Tailored Trousers', price: 2900, image: '/images/product3.jpg', category: 'Tailoring', rating: 4.6, isNew: false, isSale: true },
  { id: 10, name: 'Cropped Linen Jacket', price: 3200, image: '/images/product4.jpg', category: 'Tops', rating: 4.9, isNew: true, isSale: false },
  { id: 11, name: 'Handloom Kurta Set', price: 4100, image: '/images/product5.jpg', category: 'Dresses', rating: 4.8, isNew: false, isSale: true },
  { id: 12, name: 'Silk Scarf', price: 1200, image: '/images/product6.jpg', category: 'Accessories', rating: 4.5, isNew: true, isSale: false },
  { id: 13, name: 'Embroidered Tote', price: 1800, image: '/images/product7.jpg', category: 'Accessories', rating: 4.7, isNew: false, isSale: false },
  { id: 14, name: 'Block-Print Dupatta', price: 1500, image: '/images/product8.jpg', category: 'Accessories', rating: 4.6, isNew: true, isSale: false },
]

const productDetails = {
  1: { description: 'An elegant pearl necklace featuring lustrous freshwater pearls on a delicate gold chain. Perfect for special occasions and evening wear.', fabric: 'Freshwater pearls, 18K gold-plated chain', fit: 'Adjustable length 16-18 inches', care: 'Wipe with soft cloth, avoid water', delivery: 'Ready to ship in 2-3 days', stock: 15 },
  2: { description: 'A stunning golden diamond ring with a brilliant-cut center stone, surrounded by smaller accent diamonds for maximum sparkle.', fabric: '18K gold, lab-grown diamonds', fit: 'Available in sizes 5-9', care: 'Professional cleaning recommended', delivery: 'Ready to ship in 3-4 days', stock: 12 },
  3: { description: 'A luxury gold bracelet with intricate filigree work, featuring a secure clasp and comfortable everyday wear design.', fabric: '22K gold', fit: 'Adjustable 7-8 inches', care: 'Polish with gold cloth', delivery: 'Ready to ship in 2-3 days', stock: 18 },
  4: { description: 'Classic pearl earrings with a timeless design, featuring lustrous pearls on elegant posts for secure and comfortable wear.', fabric: 'Akoya pearls, sterling silver posts', fit: 'Standard post back', care: 'Store in soft pouch', delivery: 'Ready to ship in 1-2 days', stock: 20 },
  5: { description: 'A royal bridal set including necklace, earrings, and maang tikka, crafted with traditional Kundan work and premium stones.', fabric: 'Kundan, semi-precious stones', fit: 'Customizable', care: 'Professional cleaning only', delivery: 'Ready to ship in 5-7 days', stock: 8 },
  6: { description: 'A minimal chain necklace with a delicate design, perfect for layering or wearing alone for an understated elegant look.', fabric: 'Sterling silver, gold vermeil', fit: 'Adjustable 16-20 inches', care: 'Avoid harsh chemicals', delivery: 'Ready to ship in 2-3 days', stock: 25 },
  7: { description: 'A refined blouse with soft pleat detailing, tailored for easy movement and a polished everyday shape.', fabric: 'Cotton-silk blend', fit: 'Relaxed shoulder with a neat waist', care: 'Gentle hand wash or dry clean', delivery: 'Ready to ship in 2-3 days', stock: 20 },
  8: { description: 'A graceful midi dress with tiered movement, finished with a flattering neckline and fluid drape.', fabric: 'Soft rayon voile', fit: 'Easy fit with a defined waist', care: 'Cold wash separately', delivery: 'Ready to ship in 3-4 days', stock: 16 },
  9: { description: 'Structured trousers finished for everyday comfort, with a clean front and ankle-skimming length.', fabric: 'Cotton twill', fit: 'High-rise straight fit', care: 'Machine wash mild', delivery: 'Ready to ship in 4-5 days', stock: 18 },
  10: { description: 'A light cropped jacket in breathable linen, ideal for layering over dresses, kurtas, and camisoles.', fabric: 'Washed linen', fit: 'Boxy cropped fit', care: 'Dry clean recommended', delivery: 'Ready to ship in 3-4 days', stock: 14 },
  11: { description: 'A handloom kurta set with boutique finishing, balanced for festive days and relaxed evenings.', fabric: 'Handloom cotton', fit: 'Straight kurta with easy trousers', care: 'Hand wash in cold water', delivery: 'Ready to ship in 5-7 days', stock: 12 },
  12: { description: 'A soft silk scarf for effortless layering, adding a quiet accent to workwear and occasion looks.', fabric: 'Silk blend', fit: 'One size', care: 'Dry clean only', delivery: 'Ready to ship in 1-2 days', stock: 25 },
  13: { description: 'A carry-all tote with embroidered detailing, sized for daily errands, books, and boutique finds.', fabric: 'Canvas with thread embroidery', fit: 'Spacious interior pocket', care: 'Spot clean gently', delivery: 'Ready to ship in 2-3 days', stock: 22 },
  14: { description: 'A block-print dupatta with a light drape, made to pair with classic kurtas and simple dresses.', fabric: 'Mul cotton', fit: 'Full-length drape', care: 'Cold wash separately', delivery: 'Ready to ship in 2-3 days', stock: 24 },
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
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  // User State
  const [user, setUser] = useState(null)
  const [testLoading, setTestLoading] = useState(false)

  // Cart State
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('All')

  // Wishlist State
  const [wishlist, setWishlist] = useState([])

  // Orders State
  const [orders, setOrders] = useState([])
  const [currentOrder, setCurrentOrder] = useState(null)

  // Addresses State
  const [addresses, setAddresses] = useState([])

  // Initialize user from localStorage
  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  // Initialize addresses from localStorage
  useEffect(() => {
    const savedAddresses = localStorage.getItem('addresses')
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses))
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

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev
      }
      return [...prev, { ...product }]
    })
    toast.success(`${product.name} added to wishlist`)
  }

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId))
    toast.success('Item removed from wishlist')
  }

  const isWishlisted = (productId) => {
    return wishlist.some(item => item.id === productId)
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
  const handleLogout = () => {
    logout()
    setUser(null)
    toast.success('Logged out successfully')
  }

  const handleTestAuth = async () => {
    if (!user) {
      toast.error('Please login first to test authentication')
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

  // Address functions
  const addAddress = (addressData) => {
    const newAddress = {
      id: Date.now().toString(),
      ...addressData,
      isDefault: addresses.length === 0 // First address is default
    }
    const updatedAddresses = [...addresses, newAddress]
    setAddresses(updatedAddresses)
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    toast.success('Address added successfully')
  }

  const updateAddress = (addressId, addressData) => {
    const updatedAddresses = addresses.map(addr => {
      if (addr.id === addressId) {
        return { ...addr, ...addressData }
      }
      return addr
    })
    setAddresses(updatedAddresses)
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    toast.success('Address updated successfully')
  }

  const deleteAddress = (addressId) => {
    const updatedAddresses = addresses.filter(addr => addr.id !== addressId)
    
    // If deleted address was default, make the first remaining address default
    const deletedAddress = addresses.find(addr => addr.id === addressId)
    if (deletedAddress?.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true
    }
    
    setAddresses(updatedAddresses)
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    toast.success('Address deleted successfully')
  }

  const setDefaultAddress = (addressId) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === addressId
    }))
    setAddresses(updatedAddresses)
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    toast.success('Default address updated')
  }

  const getDefaultAddress = () => {
    return addresses.find(addr => addr.isDefault) || addresses[0] || null
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
    orderHistoryOpen,
    bookingOpen,
    
    // User State
    user,
    testLoading,
    
    // Cart State
    cart,
    filter,

    // Wishlist State
    wishlist,

    // Orders State
    orders,
    currentOrder,
    
    // Addresses State
    addresses,
    
    // Setters
    setMobileMenuOpen,
    setCartOpen,
    setProductPreview,
    setOrderHistoryOpen,
    setBookingOpen,
    setUser,
    setFilter,
    
    // Handlers
    addToCart,
    removeFromCart,
    updateQuantity,
    buyNow,
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
    placeOrder,
    getUserOrders,
    updateOrderStatus,
    handleLogout,
    handleTestAuth,
    handleBookingSubmit,
    scrollToSection,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    getDefaultAddress,
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
