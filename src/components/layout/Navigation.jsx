import { ShoppingBag, User, LogOut, Package, CheckCircle, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useApp } from '../../context/AppContext'

const Navigation = ({
  user,
  cart,
  testLoading,
  onCartOpen,
  onLoginOpen,
  onOrderHistoryOpen,
  onLogout,
  onTestAuth,
  onBookingOpen,
  onScrollToSection,
  trendingRef,
  styleEditRef,
  atelierRef,
  heroRef,
  mobileMenuOpen,
  onMobileMenuToggle,
}) => {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-2 md:px-6 md:py-4 flex items-center justify-between bg-[#F6F2EE]/80 backdrop-blur-md w-full overflow-x-hidden">
        <div className="font-serif text-sm md:text-xl font-semibold text-[#2B1E1A] truncate pr-2 min-w-0 flex-1">Asha Boutique Store</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Shop</Link>
          <button onClick={() => onScrollToSection(styleEditRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Lookbook</button>
          <button onClick={() => onScrollToSection(atelierRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Atelier</button>
          <button onClick={() => onScrollToSection(heroRef)} className="text-sm text-[#2B1E1A] hover:text-[#E46A53] transition-colors">Visit</button>

          {/* Cart Icon */}
          <button
            onClick={onCartOpen}
            className="relative text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E46A53] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User/Login */}
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#2B1E1A]">Hi, {user.name}</span>
              <button
                onClick={onTestAuth}
                disabled={testLoading}
                className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors disabled:opacity-50"
                title="Test Authentication"
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={onOrderHistoryOpen}
                className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
                title="My Orders"
              >
                <Package size={20} />
              </button>
              <button
                onClick={onLogout}
                className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginOpen}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors"
              title="Login"
            >
              <User size={24} />
            </button>
          )}

          <Button
            onClick={onBookingOpen}
            className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full px-6"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 flex-shrink-0">
          {/* Cart Icon Mobile */}
          <button
            onClick={onCartOpen}
            className="relative text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E46A53] text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User/Login Mobile */}
          {user ? (
            <button
              onClick={onLogout}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          ) : (
            <button
              onClick={onLoginOpen}
              className="text-[#2B1E1A] hover:text-[#E46A53] transition-colors flex-shrink-0"
              title="Login"
            >
              <User size={18} />
            </button>
          )}

          <button
            className="text-[#2B1E1A] flex-shrink-0"
            onClick={onMobileMenuToggle}
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
            <Link to="/shop" className="text-lg text-[#2B1E1A]">Shop</Link>
            <button onClick={() => onScrollToSection(styleEditRef)} className="text-lg text-[#2B1E1A]">Lookbook</button>
            <button onClick={() => onScrollToSection(atelierRef)} className="text-lg text-[#2B1E1A]">Atelier</button>
            <button onClick={() => onScrollToSection(heroRef)} className="text-lg text-[#2B1E1A]">Visit</button>
            {user && (
              <button
                onClick={() => {
                  onLogout()
                  onMobileMenuToggle()
                }}
                className="text-lg text-[#E46A53]"
              >
                Logout
              </button>
            )}
            <Button
              onClick={() => {
                onBookingOpen()
                onMobileMenuToggle()
              }}
              className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full w-full"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
