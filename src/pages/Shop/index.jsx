import "./Shop.css";
import { useRef, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { animateShopPage, cleanupAnimations } from "../../animations/gsapAnimations";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import HeroBanner from "./components/HeroBanner/HeroBanner";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import SearchSort from "./components/SearchSort/SearchSort";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Pagination from "./components/Pagination/Pagination";
import Newsletter from "./components/Newsletter/Newsletter";

const Shop = () => {
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

  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const productGridRef = useRef(null);
  const paginationRef = useRef(null);
  const newsletterRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    const contexts = animateShopPage({
      heroRef,
      containerRef,
      productGridRef,
      paginationRef,
      newsletterRef
    });
    return () => cleanupAnimations(contexts);
  }, []);

  const cartTotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

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
    <div className="shop-page">

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

      <HeroBanner ref={heroRef} />
      <Breadcrumb />
      <SearchSort />
      <section className="shop-products">
        <div ref={containerRef} className="shop-products-container">
          <Sidebar />
          <ProductGrid />
        </div>
      </section>
      <div ref={paginationRef} className="pagination">
        <Pagination />
      </div>
      <div ref={newsletterRef} className="newsletter">
        <Newsletter />
      </div>

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

export default Shop;