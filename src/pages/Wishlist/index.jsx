import "./Wishlist.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { animateWishlistPage, cleanupAnimations } from "../../animations/gsapAnimations";
import { Button } from "@/components/ui/button";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import WishlistHeader from "./components/WishlistHeader/WishlistHeader";
import WishlistGrid from "./components/WishlistGrid/WishlistGrid";
import EditorialSection from "./components/EditorialSection/EditorialSection";

import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Wishlist = () => {
  const { wishlist, user, cart, mobileMenuOpen, setCartOpen, setBookingOpen, setMobileMenuOpen, handleLogout } = useApp();
  const navigate = useNavigate();

  const wishlistRef = useRef(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Initialize animations
  useEffect(() => {
    if (!wishlist || wishlist.length === 0) return;
    const contexts = animateWishlistPage({ wishlistRef });
    return () => cleanupAnimations(contexts);
  }, [wishlist]);

  const isEmpty = wishlist.length === 0;

  const handleCartOpen = () => {
    setCartOpen(true);
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

      <WishlistHeader count={wishlist.length} />

      {isEmpty ? (
        <div className="wishlist-empty-state">
          <div className="empty-heart">
            <Heart size={64} color="#D57B5A" />
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>Looks like you haven't saved any beautiful pieces yet.</p>
          <Button variant="primary" onClick={() => navigate('/shop')}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <div ref={wishlistRef}>
            <WishlistGrid />
          </div>
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
