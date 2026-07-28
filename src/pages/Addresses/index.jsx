import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { animateAddressesPage, cleanupAnimations } from "../../animations/gsapAnimations";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import Sidebar from "../Profile/components/Sidebar/Sidebar";
import AddressHeader from "./components/AddressHeader/AddressHeader";
import AddressList from "./components/AddressList/AddressList";
import "./Addresses.css";

const Addresses = () => {
  const navigate = useNavigate();
  const {
    user,
    cart,
    mobileMenuOpen,
    setCartOpen,
    setBookingOpen,
    setMobileMenuOpen,
    handleLogout,
  } = useApp();

  const sidebarRef = useRef(null);
  const headerRef = useRef(null);
  const addressListRef = useRef(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Initialize animations
  useEffect(() => {
    const contexts = animateAddressesPage({
      sidebarRef,
      headerRef,
      addressListRef
    });
    return () => cleanupAnimations(contexts);
  }, []);

  // Dummy refs (Addresses page doesn't scroll to sections)
  const heroRef = useRef(null);
  const atelierRef = useRef(null);
  const styleEditRef = useRef(null);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleBookingOpen = () => {
    setBookingOpen(true);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSidebarAction = (action) => {
    switch (action) {
      case 'profile':
        navigate('/profile');
        break;
      case 'orders':
        navigate('/orders');
        break;
      case 'wishlist':
        navigate('/wishlist');
        break;
      case 'addresses':
        // Already on addresses page
        break;
      default:
        break;
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <>
      <Navigation
        user={user}
        cart={cart}
        onCartOpen={handleCartOpen}
        onLogout={handleLogout}
        onBookingOpen={handleBookingOpen}
        onScrollToSection={() => {}}
        trendingRef={null}
        styleEditRef={null}
        atelierRef={null}
        heroRef={null}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      <main className="addresses-page">
        <div className="addresses-container">
          <div ref={sidebarRef}>
            <Sidebar onAction={handleSidebarAction} onLogout={handleLogoutClick} />
          </div>

          <div className="addresses-content">
            <div ref={headerRef} className="address-header">
              <AddressHeader />
            </div>
            <div ref={addressListRef}>
              <AddressList />
            </div>
          </div>
        </div>
      </main>

      <Footer
        onScrollToSection={() => {}}
        trendingRef={null}
        styleEditRef={null}
        atelierRef={null}
        heroRef={null}
        onBookingOpen={handleBookingOpen}
      />
    </>
  );
};

export default Addresses;
