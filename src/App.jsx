import { useEffect, useRef, useState } from 'react'
import { animateHeroSection, initializeScrollAnimations, cleanupAnimations } from './animations/gsapAnimations'
import { 
  ChevronDown, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Mail,
  Scissors,
  Calendar,
  ArrowRight,
  Star,
  Menu,
  X,
  ShoppingBag,
  Eye,
  User,
  LogOut,
  Package,
  CreditCard,
  Truck,
  CheckCircle,
  Clock as Timer
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import './App.css'

// Product data
const products = [
  { id: 1, name: 'Pleat-Front Blouse', price: '₹2,400', image: '/images/product1.jpg', category: 'Tops' },
  { id: 2, name: 'Tiered Midi Dress', price: '₹3,800', image: '/images/product2.jpg', category: 'Dresses' },
  { id: 3, name: 'Tailored Trousers', price: '₹2,900', image: '/images/product3.jpg', category: 'Tailoring' },
  { id: 4, name: 'Cropped Linen Jacket', price: '₹3,200', image: '/images/product4.jpg', category: 'Tops' },
  { id: 5, name: 'Handloom Kurta Set', price: '₹4,100', image: '/images/product5.jpg', category: 'Dresses' },
  { id: 6, name: 'Silk Scarf', price: '₹1,200', image: '/images/product6.jpg', category: 'Accessories' },
  { id: 7, name: 'Embroidered Tote', price: '₹1,800', image: '/images/product7.jpg', category: 'Accessories' },
  { id: 8, name: 'Block-Print Dupatta', price: '₹1,500', image: '/images/product8.jpg', category: 'Accessories' },
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

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [productPreview, setProductPreview] = useState(null)
  const [loginOpen, setLoginOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('All')
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])
  const [currentOrder, setCurrentOrder] = useState(null)
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const newArrivalsRef = useRef(null)
  const curatedRef = useRef(null)
  const atelierRef = useRef(null)
  const trendingRef = useRef(null)
  const styleEditRef = useRef(null)

  // Hero load animation
  useEffect(() => {
    const ctx = animateHeroSection(heroRef)
    return () => ctx.revert()
  }, [])

  // Scroll animations
  useEffect(() => {
    const contexts = initializeScrollAnimations({
      newArrivalsRef,
      curatedRef,
      atelierRef,
      trendingRef,
      styleEditRef
    })
    return () => cleanupAnimations(contexts)
  }, [])

  const filteredProducts = filter === 'All' ? productCatalog : productCatalog.filter(p => p.category === filter)

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    toast.success('Appointment request submitted! We will contact you soon.')
    setBookingOpen(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulate login - in production, this would call an API
    const email = e.target.email.value
    const name = email.split('@')[0]
    setUser({ name, email })
    toast.success(`Welcome back, ${name}!`)
    setLoginOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
    toast.success('Logged out successfully')
  }

  // Enhanced order management functions
  const generateOrderId = () => {
    return 'ORD' + Date.now().toString().slice(-6)
  }

  const placeOrder = () => {
    if (!user) {
      toast.error('Please login to place an order')
      setLoginOpen(true)
      return
    }

    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.phone || !shippingInfo.address) {
      toast.error('Please fill all shipping information')
      return
    }

    const order = {
      id: generateOrderId(),
      userId: user.email,
      items: [...cart],
      total: cartTotal,
      shippingInfo: { ...shippingInfo },
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      tracking: [
        { status: 'confirmed', message: 'Order confirmed', timestamp: new Date().toISOString() },
        { status: 'processing', message: 'Processing your order', timestamp: null },
        { status: 'shipped', message: 'Order shipped', timestamp: null },
        { status: 'delivered', message: 'Delivered successfully', timestamp: null }
      ]
    }

    setOrders(prev => [order, ...prev])
    setCurrentOrder(order)
    setCart([])
    setCheckoutOpen(false)
    setCartOpen(false)
    toast.success(`Order ${order.id} placed successfully!`)
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

  const getUserOrders = () => {
    if (!user) return []
    return orders.filter(order => order.userId === user.email)
  }

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

  const buyNow = (product) => {
    setCart([{ ...product, quantity: 1 }])
    setProductPreview(null)
    setCheckoutOpen(true)
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

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[₹,]/g, ''))
    return sum + (price * item.quantity)
  }, 0)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F6F2EE] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-2 md:px-6 md:py-4 flex items-center justify-between bg-[#F6F2EE]/80 backdrop-blur-md w-full overflow-x-hidden">
        <div className="font-serif text-sm md:text-xl font-semibold text-[#2B1E1A] truncate pr-2 min-w-0 flex-1">Asha Boutique Store</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection(trendingRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Shop</button>
          <button onClick={() => scrollToSection(styleEditRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Lookbook</button>
          <button onClick={() => scrollToSection(atelierRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Atelier</button>
          <button onClick={() => scrollToSection(heroRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Visit</button>

          {/* Cart Icon */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E46A53] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* User/Login */}
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#2B1E1A]">Hi, {user.name}</span>
              <button
                onClick={() => setOrderHistoryOpen(true)}
                className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
                title="My Orders"
              >
                <Package size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
              title="Login"
            >
              <User size={24} />
            </button>
          )}

          <Button
            onClick={() => setBookingOpen(true)}
            className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full px-6"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 flex-shrink-0">
          {/* Cart Icon Mobile */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
          >
            <ShoppingBag size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E46A53] text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* User/Login Mobile */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
              title="Login"
            >
              <User size={18} />
            </button>
          )}

          <button
            className="text-[#2B1E1A] flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F6F2EE] pt-16 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {user && (
              <div className="flex items-center gap-3 pb-4 border-b border-[#E9E3DD]">
                <div className="w-12 h-12 bg-[#E46A53] rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-[#2B1E1A]">Hi, {user.name}</p>
                  <p className="text-sm text-[#7A655D]">{user.email}</p>
                </div>
              </div>
            )}
            <button onClick={() => scrollToSection(trendingRef)} className="text-lg text-[#2B1E1A]">Shop</button>
            <button onClick={() => scrollToSection(styleEditRef)} className="text-lg text-[#2B1E1A]">Lookbook</button>
            <button onClick={() => scrollToSection(atelierRef)} className="text-lg text-[#2B1E1A]">Atelier</button>
            <button onClick={() => scrollToSection(heroRef)} className="text-lg text-[#2B1E1A]">Visit</button>
            {user && (
              <button
                onClick={() => {
                  handleLogout()
                  setMobileMenuOpen(false)
                }}
                className="text-lg text-[#E46A53]"
              >
                Logout
              </button>
            )}
            <Button
              onClick={() => {
                setBookingOpen(true)
                setMobileMenuOpen(false)
              }}
              className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full w-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}

      {/* Section 1: Hero */}
      <section ref={heroRef} className="min-h-screen relative pt-20 px-6 lg:px-12 flex items-center">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="hero-headline font-serif text-5xl lg:text-7xl font-semibold text-[#2B1E1A] leading-tight mb-6">
              Stitched<br />for you
            </h1>
            <p className="hero-subheadline text-lg text-[#7A655D] mb-8 max-w-md">
              Boutique tailoring & curated looks—made to fit your life.
            </p>
            <div className="hero-cta flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={() => setBookingOpen(true)}
                className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full px-8 py-6 text-base"
              >
                Book Appointment
              </Button>
              <button 
                onClick={() => scrollToSection(styleEditRef)}
                className="flex items-center gap-2 text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
              >
                Explore the Lookbook <ArrowRight size={18} />
              </button>
            </div>
            
            {/* Featured Card */}
            <div className="hero-card bg-white rounded-[22px] p-3 md:p-4 shadow-lg max-w-xs">
              <img
                src="/images/hero_featured.jpg"
                alt="Featured"
                className="w-full h-24 md:h-32 object-cover rounded-[14px] mb-2 md:mb-3"
              />
              <h3 className="font-serif text-sm md:text-lg font-semibold text-[#2B1E1A]">Featured: The Linen Set</h3>
              <p className="text-xs md:text-sm text-[#7A655D]">Tailored in-house. Ready in 7 days.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <img 
              src="/images/hero_featured.jpg" 
              alt="Hero" 
              className="hero-image w-full h-[60vh] lg:h-[80vh] object-cover rounded-[22px]"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-4 md:bottom-8 md:left-6 flex items-center gap-2 text-[#7A655D] text-xs md:text-sm hidden md:flex">
          <span>Scroll</span>
          <ChevronDown size={14} className="animate-bounce md:size-16" />
        </div>

        {/* Now Open Badge */}
        <div className="absolute bottom-6 right-4 md:bottom-8 md:right-6 bg-white rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-md flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm text-[#2B1E1A]">Now open</span>
        </div>
      </section>

      {/* Section 2: New Arrivals */}
      <section ref={newArrivalsRef} className="min-h-screen relative overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-2 h-screen">
          <div className="new-arrivals-left relative">
            <img
              src="/images/new_arrivals_left.jpg"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="new-arrivals-right relative">
            <img
              src="/images/new_arrivals_right.jpg"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Badge */}
        <div className="new-badge absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[#E46A53] rounded-full flex items-center justify-center z-10">
          <span className="text-white font-serif text-xl md:text-2xl lg:text-3xl font-semibold">NEW</span>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-6 left-4 md:top-16 md:left-12 z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl font-semibold text-white drop-shadow-lg">New Arrivals</h2>
        </div>
        <div className="absolute top-24 left-4 md:top-16 md:right-12 md:left-auto md:max-w-xs z-10">
          <p className="text-white text-xs md:text-sm lg:text-base drop-shadow-lg">
            Fresh silhouettes, soft fabrics, and details that feel handmade—because they are.
          </p>
        </div>
        <div className="absolute bottom-6 left-4 md:bottom-16 md:left-12 z-10">
          <Button
            onClick={() => scrollToSection(trendingRef)}
            className="bg-white text-[#2B1E1A] hover:bg-[#F6F2EE] rounded-full px-4 md:px-6 text-sm"
          >
            Shop New In
          </Button>
        </div>
        <div className="absolute bottom-8 right-6 lg:bottom-16 lg:right-12">
          <button 
            onClick={() => scrollToSection(styleEditRef)}
            className="text-white flex items-center gap-2 hover:underline drop-shadow-lg"
          >
            View Lookbook <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Section 3: Curated Collection */}
      <section ref={curatedRef} className="min-h-screen py-20 px-6 lg:px-12 flex items-center">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="curated-text">
            <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-[#2B1E1A] leading-tight mb-6">
              Curated<br />Collection
            </h2>
            <p className="text-lg text-[#7A655D] mb-8 max-w-md">
              A tight edit of pieces that layer easily, move comfortably, and photograph beautifully.
            </p>
            <Button 
              onClick={() => scrollToSection(trendingRef)}
              className="bg-[#2B1E1A] hover:bg-[#3d2b25] text-white rounded-full px-8"
            >
              Explore Collection
            </Button>

            {/* Tailoring Notes Card */}
            <div className="mt-12 bg-white rounded-[22px] p-6 shadow-lg max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <Scissors className="text-[#E46A53]" size={20} />
                <h3 className="font-serif text-lg font-semibold text-[#2B1E1A]">Tailoring Notes</h3>
              </div>
              <p className="text-sm text-[#7A655D]">Adjustments included for 30 days.</p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src="/images/curated_collection.jpg" 
              alt="Curated Collection" 
              className="curated-image w-full h-[70vh] object-cover rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Asha Atelier */}
      <section ref={atelierRef} className="min-h-screen py-20 px-6 lg:px-12 flex items-center bg-[#E9E3DD]">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img 
              src="/images/atelier_tailoring.jpg" 
              alt="Asha Atelier" 
              className="atelier-image w-full h-[70vh] object-cover rounded-[22px]"
            />
          </div>

          {/* Right Content */}
          <div className="atelier-text">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#7A655D] mb-4 block">
              Asha Atelier
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-[#2B1E1A] leading-tight mb-6">
              Fit is<br />everything.
            </h2>
            <p className="text-lg text-[#7A655D] mb-8 max-w-md">
              Alterations, custom sizing, and made-to-measure details—book a session and we'll shape it to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setBookingOpen(true)}
                className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full px-8"
              >
                <Calendar className="mr-2" size={18} />
                Book Appointment
              </Button>
              <button className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors">
                See Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trending Now */}
      <section ref={trendingRef} className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#2B1E1A]">Trending Now</h2>
            <div className="flex flex-wrap gap-2">
              {['All', 'Tops', 'Dresses', 'Tailoring', 'Accessories'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === cat 
                      ? 'bg-[#2B1E1A] text-white' 
                      : 'bg-white text-[#2B1E1A] hover:bg-[#E9E3DD]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="trending-card group cursor-pointer"
                onClick={() => setProductPreview(product)}
              >
                <div className="relative aspect-[3/4] rounded-[22px] overflow-hidden mb-4 bg-[#E9E3DD]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Button
                    onClick={(event) => {
                      event.stopPropagation()
                      setProductPreview(product)
                    }}
                    aria-label={`Preview ${product.name}`}
                    className="absolute bottom-4 right-4 bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Eye size={20} />
                  </Button>
                </div>
                <h3 className="font-medium text-[#2B1E1A] mb-1">{product.name}</h3>
                <p className="text-[#7A655D]">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <button 
              onClick={() => toast.info('Full catalog coming soon!')}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
            >
              View all products
            </button>
            <Button 
              onClick={() => setBookingOpen(true)}
              className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full"
            >
              Book a fitting
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Style Edit */}
      <section ref={styleEditRef} className="min-h-screen py-20 px-6 lg:px-12 flex items-center">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="style-text">
            <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-[#2B1E1A] leading-tight mb-6">
              Style<br />Edit
            </h2>
            <p className="text-lg text-[#7A655D] mb-8 max-w-md">
              Three ways to wear the season—day markets, work hours, evening plans.
            </p>
            <Button 
              onClick={() => toast.info('Full lookbook coming soon!')}
              className="bg-[#2B1E1A] hover:bg-[#3d2b25] text-white rounded-full px-8"
            >
              See the Looks
            </Button>

            {/* Lookbook Drop Card */}
            <div className="mt-12 bg-white rounded-[22px] p-6 shadow-lg max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-[#E46A53]" size={20} />
                <h3 className="font-serif text-lg font-semibold text-[#2B1E1A]">Lookbook Drop</h3>
              </div>
              <p className="text-sm text-[#7A655D]">New sets added every Friday.</p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src="/images/style_edit.jpg" 
              alt="Style Edit" 
              className="style-image w-full h-[70vh] object-cover rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* Section 7: Client Love */}
      <section className="py-20 px-6 lg:px-12 bg-[#E9E3DD]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#2B1E1A] mb-12">Client Love</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-[22px] p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#2B1E1A]">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#E46A53] text-[#E46A53]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#7A655D] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Visit the Boutique */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#2B1E1A] mb-8">
                Visit the Boutique
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#E46A53] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#2B1E1A]">Address</p>
                    <p className="text-[#7A655D]">Plot no_25, Date Lay Out,Jaitala Road, Nagpur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-[#E46A53] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#2B1E1A]">Hours</p>
                    <p className="text-[#7A655D]">Mon–Sat: 11am – 8pm | Sun: 12pm – 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-[#E46A53] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#2B1E1A]">Phone</p>
                    <p className="text-[#7A655D]">+91 97 6790 7469</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button 
                  onClick={() => setBookingOpen(true)}
                  className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full"
                >
                  <Calendar className="mr-2" size={18} />
                  Book appointment
                </Button>
              </div>
            </div>

            {/* Map with Directions Button */}
            <div className="relative w-full h-[50vh] rounded-[22px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123456789!2d79.028926!3d21.109289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI2LjIiTiA3OcKwMDcnMjMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asha Boutique Store Location"
              />
              <Button
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=21.109289,79.028926', '_blank')}
                className="absolute bottom-4 right-4 bg-white text-[#2B1E1A] hover:bg-[#F6F2EE] rounded-full shadow-lg px-6"
              >
                <MapPin className="mr-2" size={18} />
                Get directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#2B1E1A] text-[#F6F2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Get the lookbook in your inbox.
              </h3>
              <div className="flex flex-wrap gap-3">
                <Input 
                  type="email" 
                  placeholder="Email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 max-w-xs"
                />
                <Button 
                  onClick={() => toast.success('Subscribed successfully!')}
                  className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection(trendingRef)} className="text-white/70 hover:text-white transition-colors">Shop</button></li>
                <li><button onClick={() => scrollToSection(styleEditRef)} className="text-white/70 hover:text-white transition-colors">Lookbook</button></li>
                <li><button onClick={() => scrollToSection(atelierRef)} className="text-white/70 hover:text-white transition-colors">Atelier</button></li>
                <li><button onClick={() => scrollToSection(heroRef)} className="text-white/70 hover:text-white transition-colors">Visit</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>+91 97 6790 7469</li>
                <li>hello@ashaboutique.com</li>
                <li>Maharashtra Nagpur, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © 2026 Asha Boutique Store. Crafted in Nagpur.
            </p>
            <div className="flex gap-4">
              <button className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-lg bg-[#F6F2EE] border-none rounded-[22px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Book an Appointment</DialogTitle>
            <DialogDescription className="text-[#7A655D]">
              Schedule a fitting or consultation with Asha. We'll confirm your appointment within 24 hours.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleBookingSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2B1E1A]">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name"
                  required
                  className="bg-white border-[#E9E3DD] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#2B1E1A]">Phone</Label>
                <Input 
                  id="phone" 
                  placeholder="+91..."
                  required
                  className="bg-white border-[#E9E3DD] rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2B1E1A]">Email</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service" className="text-[#2B1E1A]">Service Type</Label>
              <Select required>
                <SelectTrigger className="bg-white border-[#E9E3DD] rounded-xl">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fitting">Fitting & Alterations</SelectItem>
                  <SelectItem value="custom">Custom Tailoring</SelectItem>
                  <SelectItem value="consultation">Style Consultation</SelectItem>
                  <SelectItem value="blouse">Blouse Stitching</SelectItem>
                  <SelectItem value="dress">Dress Making</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-[#2B1E1A]">Preferred Date</Label>
                <Input 
                  id="date" 
                  type="date"
                  required
                  className="bg-white border-[#E9E3DD] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-[#2B1E1A]">Preferred Time</Label>
                <Select required>
                  <SelectTrigger className="bg-white border-[#E9E3DD] rounded-xl">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (11am - 2pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2pm - 5pm)</SelectItem>
                    <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-[#2B1E1A]">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Tell us about your requirements..."
                className="bg-white border-[#E9E3DD] rounded-xl min-h-[100px]"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
            >
              Request Appointment
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md bg-[#F6F2EE] border-none rounded-[22px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Welcome Back</DialogTitle>
            <DialogDescription className="text-[#7A655D]">
              Sign in to access your account and view your orders.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2B1E1A]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#2B1E1A]">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#7A655D]">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <button type="button" className="text-[#E46A53] hover:underline">
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
            >
              Sign In
            </Button>

            <div className="text-center text-sm text-[#7A655D]">
              Don't have an account?{' '}
              <button type="button" className="text-[#E46A53] hover:underline">
                Sign up
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Product Preview Dialog */}
      <Dialog open={!!productPreview} onOpenChange={(open) => !open && setProductPreview(null)}>
        <DialogContent className="sm:max-w-4xl bg-[#F6F2EE] border-none rounded-[22px] max-h-[92vh] overflow-y-auto p-4 md:p-6">
          {productPreview && (
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[18px] bg-[#E9E3DD]">
                <img
                  src={productPreview.image}
                  alt={productPreview.name}
                  className="h-[360px] w-full object-cover md:h-full md:min-h-[520px]"
                />
              </div>

              <div className="flex flex-col">
                <DialogHeader className="pr-8">
                  <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#E46A53]">
                    {productPreview.category}
                  </div>
                  <DialogTitle className="font-serif text-3xl md:text-4xl leading-tight text-[#2B1E1A]">
                    {productPreview.name}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-7 text-[#7A655D]">
                    {productPreview.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-5 flex items-center justify-between border-y border-[#E9E3DD] py-4">
                  <span className="text-2xl font-semibold text-[#2B1E1A]">{productPreview.price}</span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm text-[#2B1E1A]">
                    {productPreview.stock} in stock
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Fabric', productPreview.fabric],
                    ['Fit', productPreview.fit],
                    ['Care', productPreview.care],
                    ['Delivery', productPreview.delivery],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-white p-4">
                      <div className="text-xs font-medium uppercase tracking-[0.14em] text-[#A08B82]">{label}</div>
                      <div className="mt-2 text-sm leading-6 text-[#2B1E1A]">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-white p-4">
                  <h4 className="font-serif text-lg text-[#2B1E1A]">Boutique note</h4>
                  <p className="mt-2 text-sm leading-6 text-[#7A655D]">
                    Need a small adjustment? Book a fitting after checkout and our atelier can help with length, waist, or sleeve refinements.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => {
                      addToCart(productPreview)
                      setProductPreview(null)
                      setCartOpen(true)
                    }}
                    className="flex-1 bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
                  >
                    <ShoppingBag className="mr-2" size={18} />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => buyNow(productPreview)}
                    className="flex-1 bg-[#2B1E1A] hover:bg-[#3a2923] text-white rounded-full py-6"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="sm:max-w-md bg-[#F6F2EE] border-none rounded-[22px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Your Cart</DialogTitle>
            <DialogDescription className="text-[#7A655D]">
              {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`}
            </DialogDescription>
          </DialogHeader>
          
          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <ShoppingBag className="mx-auto text-[#7A655D] mb-4" size={48} />
              <p className="text-[#7A655D]">Your cart is empty</p>
              <Button 
                onClick={() => {
                  setCartOpen(false)
                  scrollToSection(trendingRef)
                }}
                className="mt-4 bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="mt-4">
              <div className="max-h-[60vh] overflow-y-auto space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#2B1E1A] text-sm">{item.name}</h4>
                      <p className="text-[#7A655D] text-sm">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-[#E9E3DD] hover:bg-[#d9d3cd] flex items-center justify-center text-[#2B1E1A]"
                        >
                          -
                        </button>
                        <span className="text-[#2B1E1A] font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-[#E9E3DD] hover:bg-[#d9d3cd] flex items-center justify-center text-[#2B1E1A]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#7A655D] hover:text-[#E46A53] transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#E9E3DD]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#2B1E1A] font-medium">Total</span>
                  <span className="text-[#2B1E1A] font-semibold text-lg">₹{cartTotal.toLocaleString()}</span>
                </div>
                <Button 
                  onClick={() => {
                    setCheckoutOpen(true)
                    setCartOpen(false)
                  }}
                  className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Checkout Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-2xl bg-[#F6F2EE] border-none rounded-[22px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Checkout</DialogTitle>
            <DialogDescription className="text-[#7A655D]">
              Complete your order details
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-serif text-lg text-[#2B1E1A] mb-3">Order Summary</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#7A655D]">{item.name} x{item.quantity}</span>
                    <span className="text-[#2B1E1A]">₹{(parseInt(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-[#E9E3DD] pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#2B1E1A]">Total</span>
                    <span className="text-[#2B1E1A] text-lg">₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-serif text-lg text-[#2B1E1A] mb-3">Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[#2B1E1A]">Full Name</Label>
                  <Input
                    id="name"
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#2B1E1A]">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#2B1E1A]">Phone</Label>
                  <Input
                    id="phone"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-[#2B1E1A]">Pincode</Label>
                  <Input
                    id="pincode"
                    value={shippingInfo.pincode}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, pincode: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="400001"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address" className="text-[#2B1E1A]">Address</Label>
                  <Textarea
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="123, Main Street, Area Name"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[#2B1E1A]">City</Label>
                  <Input
                    id="city"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="Mumbai"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-[#2B1E1A]">State</Label>
                  <Input
                    id="state"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, state: e.target.value }))}
                    className="bg-white border-[#E9E3DD] rounded-xl"
                    placeholder="Maharashtra"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-serif text-lg text-[#2B1E1A] mb-3">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-[#E46A53]"
                  />
                  <div className="flex items-center gap-2">
                    <Truck size={20} className="text-[#E46A53]" />
                    <span className="text-[#2B1E1A]">Cash on Delivery</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-[#E46A53]"
                  />
                  <div className="flex items-center gap-2">
                    <CreditCard size={20} className="text-[#E46A53]" />
                    <span className="text-[#2B1E1A]">Credit/Debit Card</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <Button
              onClick={placeOrder}
              className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
            >
              Place Order • ₹{cartTotal.toLocaleString()}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Order History Dialog */}
      <Dialog open={orderHistoryOpen} onOpenChange={setOrderHistoryOpen}>
        <DialogContent className="sm:max-w-3xl bg-[#F6F2EE] border-none rounded-[22px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">My Orders</DialogTitle>
            <DialogDescription className="text-[#7A655D]">
              Track your order history
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            {getUserOrders().length === 0 ? (
              <div className="py-12 text-center">
                <Package className="mx-auto text-[#7A655D] mb-4" size={48} />
                <p className="text-[#7A655D]">No orders yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {getUserOrders().map((order) => (
                  <div key={order.id} className="bg-white rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-[#2B1E1A]">Order #{order.id}</h4>
                        <p className="text-sm text-[#7A655D]">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-[#2B1E1A]">
                          ₹{order.total.toLocaleString()}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-[#E46A53]">
                          {order.status === 'confirmed' && <CheckCircle size={14} />}
                          {order.status === 'processing' && <Timer size={14} />}
                          {order.status === 'shipped' && <Truck size={14} />}
                          {order.status === 'delivered' && <CheckCircle size={14} />}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mb-3">
                      <div className="text-sm text-[#7A655D] mb-2">Items:</div>
                      <div className="space-y-1">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-[#7A655D]">{item.name} x{item.quantity}</span>
                            <span className="text-[#2B1E1A]">₹{(parseInt(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Tracking */}
                    <div className="border-t border-[#E9E3DD] pt-3">
                      <div className="text-sm text-[#7A655D] mb-2">Tracking:</div>
                      <div className="space-y-2">
                        {order.tracking.map((step, index) => (
                          <div key={step.status} className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              step.timestamp ? 'bg-[#E46A53]' : 'bg-[#E9E3DD]'
                            }`}>
                              {step.timestamp && <CheckCircle size={12} className="text-white" />}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-[#2B1E1A]">{step.message}</div>
                              {step.timestamp && (
                                <div className="text-xs text-[#7A655D]">
                                  {new Date(step.timestamp).toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="mt-3 text-sm text-[#7A655D]">
                      Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
