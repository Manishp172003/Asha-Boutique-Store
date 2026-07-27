import "./Wishlist.css";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useApp } from "../../context/AppContext";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import WishlistHeader from "./components/WishlistHeader/WishlistHeader";
import WishlistGrid from "./components/WishlistGrid/WishlistGrid";
import EditorialSection from "./components/EditorialSection/EditorialSection";

import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Wishlist = () => {
  const { wishlist, user, cart, testLoading, mobileMenuOpen, setCartOpen, setLoginOpen, setOrderHistoryOpen, setBookingOpen, setMobileMenuOpen, handleLogout, handleTestAuth } = useApp();
  const navigate = useNavigate();

  const isEmpty = wishlist.length === 0;

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleOrderHistoryOpen = () => {
    setOrderHistoryOpen(true);
  };

  const handleBookingOpen = () => {
    setBookingOpen(true);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="wishlist-page">

      <Navigation
        user={user}
        cart={cart}
        testLoading={testLoading}
        onCartOpen={handleCartOpen}
        onLoginOpen={handleLoginOpen}
        onOrderHistoryOpen={handleOrderHistoryOpen}
        onLogout={handleLogout}
        onTestAuth={handleTestAuth}
        onBookingOpen={handleBookingOpen}
        onScrollToSection={() => {}}
        trendingRef={null}
        styleEditRef={null}
        atelierRef={null}
        heroRef={null}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      <WishlistHeader count={wishlist.length} />

      {isEmpty ? (
        <div className="wishlist-empty-state">
          <div className="empty-heart">
            <Heart size={64} color="#D57B5A" />
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>Looks like you haven't saved any beautiful pieces yet.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <WishlistGrid />
          <EditorialSection />
        </>
      )}

      <Newsletter />

      <Footer
        onScrollToSection={() => {}}
        trendingRef={null}
        styleEditRef={null}
        atelierRef={null}
        heroRef={null}
        onBookingOpen={handleBookingOpen}
      />

    </div>
  );
};

export default Wishlist;
