import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { animateHeroSection, initializeScrollAnimations, cleanupAnimations } from '../../animations/gsapAnimations'
import { toast } from 'sonner'
import { useApp } from '../../context/AppContext'

// Layout Components
import Navigation from '../../components/layout/Navigation'
import Footer from '../../components/layout/Footer'

// Section Components
import Hero from '../../components/common/Hero'
import NewArrivals from '../../components/common/NewArrivals'
import CuratedCollection from '../../components/common/CuratedCollection'
import Atelier from '../../components/common/Atelier'
import Trending from '../../components/product/Trending'
import StyleEdit from '../../components/common/StyleEdit'
import Testimonials from '../../components/common/Testimonials'
import Visit from '../../components/common/Visit'

// Dialog Components
import BookingDialog from '../../components/forms/BookingDialog'
import LoginDialog from '../../components/forms/LoginDialog'
import ProductPreviewDialog from '../../components/product/ProductPreviewDialog'
import CartDialog from '../../components/cart/CartDialog'
import OrderHistoryDialog from '../../components/cart/OrderHistoryDialog'

const Home = () => {
  const navigate = useNavigate()
  const {
    user,
    cart,
    filter,
    filteredProducts,
    orders,
    loginLoading,
    testLoading,
    mobileMenuOpen,
    bookingOpen,
    loginOpen,
    productPreview,
    cartOpen,
    orderHistoryOpen,
    testimonials,
    setFilter,
    setCartOpen,
    setLoginOpen,
    setOrderHistoryOpen,
    setBookingOpen,
    setProductPreview,
    setMobileMenuOpen,
    handleLogout,
    handleTestAuth,
    handleBookingSubmit,
    handleLogin,
    addToCart,
    buyNow,
    updateQuantity,
    removeFromCart,
    getUserOrders,
  } = useApp()
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const newArrivalsRef = useRef(null)
  const curatedRef = useRef(null)
  const atelierRef = useRef(null)
  const trendingRef = useRef(null)
  const styleEditRef = useRef(null)

  // Initialize animations
  useEffect(() => {
    const heroContext = animateHeroSection(heroRef)
    const scrollContexts = initializeScrollAnimations({
      heroRef,
      newArrivalsRef,
      curatedRef,
      atelierRef,
      trendingRef,
      styleEditRef
    })
    return () => {
      cleanupAnimations(heroContext)
      cleanupAnimations(scrollContexts)
    }
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const cartTotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F6F2EE] overflow-x-hidden">
      <Navigation
        user={user}
        cart={cart}
        testLoading={testLoading}
        onCartOpen={() => setCartOpen(true)}
        onLoginOpen={() => setLoginOpen(true)}
        onOrderHistoryOpen={() => setOrderHistoryOpen(true)}
        onLogout={handleLogout}
        onTestAuth={handleTestAuth}
        onBookingOpen={() => setBookingOpen(true)}
        onScrollToSection={scrollToSection}
        trendingRef={trendingRef}
        styleEditRef={styleEditRef}
        atelierRef={atelierRef}
        heroRef={heroRef}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <Hero
        heroRef={heroRef}
        styleEditRef={styleEditRef}
        onBookingOpen={() => setBookingOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <NewArrivals
        newArrivalsRef={newArrivalsRef}
        trendingRef={trendingRef}
        styleEditRef={styleEditRef}
        onScrollToSection={scrollToSection}
      />

      <CuratedCollection
        curatedRef={curatedRef}
        trendingRef={trendingRef}
        onScrollToSection={scrollToSection}
      />

      <Atelier
        atelierRef={atelierRef}
        onBookingOpen={() => setBookingOpen(true)}
      />

      <Trending
        trendingRef={trendingRef}
        filter={filter}
        filteredProducts={filteredProducts}
        onFilterChange={setFilter}
        onProductPreview={setProductPreview}
      />

      <StyleEdit
        styleEditRef={styleEditRef}
        onBookingOpen={() => setBookingOpen(true)}
      />

      <Testimonials testimonials={testimonials} />

      <Visit onBookingOpen={() => setBookingOpen(true)} />

      <Footer
        onScrollToSection={scrollToSection}
        trendingRef={trendingRef}
        styleEditRef={styleEditRef}
        atelierRef={atelierRef}
        heroRef={heroRef}
        onBookingOpen={() => setBookingOpen(true)}
      />

      {/* Dialogs */}
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        onSubmit={handleBookingSubmit}
      />

      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSubmit={handleLogin}
        loading={loginLoading}
      />

      <ProductPreviewDialog
        open={!!productPreview}
        onOpenChange={(open) => !open && setProductPreview(null)}
        product={productPreview}
        onAddToCart={addToCart}
        onBuyNow={buyNow}
        trendingRef={trendingRef}
      />

      <CartDialog
        open={cartOpen}
        onOpenChange={setCartOpen}
        cart={cart}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCheckout={() => navigate('/checkout')}
        onScrollToSection={scrollToSection}
        trendingRef={trendingRef}
      />

      <OrderHistoryDialog
        open={orderHistoryOpen}
        onOpenChange={setOrderHistoryOpen}
        orders={orders}
        getUserOrders={getUserOrders}
      />
    </div>
  )
}

export default Home
