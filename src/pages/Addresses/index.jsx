import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { animateAddressesPage, cleanupAnimations } from "../../animations/gsapAnimations";
import { AddressesSkeleton } from "../../components/Skeleton";
import { EmptyState } from "../../components/EmptyState";
import { MapPin } from "lucide-react";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import Sidebar from "../Profile/components/Sidebar/Sidebar";
import AddressHeader from "./components/AddressHeader/AddressHeader";
import AddressList from "./components/AddressList/AddressList";
import "./Addresses.css";

const Addresses = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const {
    user,
    addresses,
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

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Initialize animations after data loads
  useEffect(() => {
    if (!isLoading && user) {
      const contexts = animateAddressesPage({
        sidebarRef,
        headerRef,
        addressListRef
      });
      return () => cleanupAnimations(contexts);
    }
  }, [isLoading, user]);

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
            {addresses && addresses.length === 0 ? (
              <EmptyState
                icon={MapPin}
                title="No Saved Addresses"
                description="Save an address for faster checkout."
                buttonText="Add Address"
                onButtonClick={() => {
                  // Trigger add address modal (implementation depends on existing modal)
                }}
              />
            ) : (
              <div ref={addressListRef}>
                <AddressList />
              </div>
            )}
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
