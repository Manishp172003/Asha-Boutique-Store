import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
  Plus,
  User,
  LogOut
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

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
  const [loginOpen, setLoginOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('All')
  const [cart, setCart] = useState([])
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const newArrivalsRef = useRef(null)
  const curatedRef = useRef(null)
  const atelierRef = useRef(null)
  const trendingRef = useRef(null)
  const styleEditRef = useRef(null)

  // Hero load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-headline', 
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-subheadline', 
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-cta', 
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-card', 
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.6, ease: 'power2.out' }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // New Arrivals section
      gsap.fromTo('.new-arrivals-left',
        { x: '-60vw' },
        {
          x: 0,
          scrollTrigger: {
            trigger: newArrivalsRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        }
      )
      gsap.fromTo('.new-arrivals-right',
        { x: '60vw' },
        {
          x: 0,
          scrollTrigger: {
            trigger: newArrivalsRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        }
      )
      gsap.fromTo('.new-badge',
        { scale: 0.2, rotate: -12, opacity: 0 },
        {
          scale: 1, rotate: 0, opacity: 1,
          scrollTrigger: {
            trigger: newArrivalsRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )

      // Curated Collection section
      gsap.fromTo('.curated-image',
        { x: '60vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: curatedRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )
      gsap.fromTo('.curated-text',
        { x: '-40vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: curatedRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )

      // Atelier section
      gsap.fromTo('.atelier-image',
        { x: '-70vw' },
        {
          x: 0,
          scrollTrigger: {
            trigger: atelierRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )
      gsap.fromTo('.atelier-text',
        { x: '50vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: atelierRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )

      // Trending section
      gsap.fromTo('.trending-card',
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: trendingRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1
          }
        }
      )

      // Style Edit section
      gsap.fromTo('.style-image',
        { x: '60vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: styleEditRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )
      gsap.fromTo('.style-text',
        { x: '-40vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: styleEditRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )
    }, mainRef)

    return () => ctx.revert()
  }, [])

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter)

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

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[₹,]/g, ''))
    return sum + (price * item.quantity)
  }, 0)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F6F2EE]">
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
        <div className="grid md:grid-cols-2 h-screen">
          <div className="new-arrivals-left relative">
            <img
              src="/images/new_arrivals_left.jpg"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="new-arrivals-right relative hidden md:block">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="trending-card group"
              >
                <div className="relative aspect-[3/4] rounded-[22px] overflow-hidden mb-4 bg-[#E9E3DD]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Plus size={20} />
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
                    toast.success('Checkout functionality coming soon!')
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
    </div>
  )
}

export default App
