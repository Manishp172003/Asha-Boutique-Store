import "./Shop.css";
import { useRef, useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { animateShopPage, cleanupAnimations } from "../../animations/gsapAnimations";
import { ProductCardSkeleton } from "../../components/Skeleton";
import { EmptyState } from "../../components/EmptyState";
import { Search } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    user,
    cart,
    mobileMenuOpen,
    setCartOpen,
    setBookingOpen,
    setMobileMenuOpen,
    handleLogout,
    filteredProducts,
  } = useApp();

  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const productGridRef = useRef(null);
  const paginationRef = useRef(null);
  const newsletterRef = useRef(null);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleBookingOpen = () => {
    setBookingOpen(true);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Initialize animations after data loads
  useEffect(() => {
    if (!isLoading) {
      const contexts = animateShopPage({
        heroRef,
        containerRef,
        productGridRef,
        paginationRef,
        newsletterRef
      });
      return () => cleanupAnimations(contexts);
    }
  }, [isLoading]);

  const cartTotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

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
          {isLoading ? (
            <div className="product-grid">
              {[...Array(8)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredProducts && filteredProducts.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No Products Found"
              description="Try another keyword or browse all collections."
              buttonText="View All Products"
              buttonRoute="/shop"
            />
          ) : (
            <ProductGrid />
          )}
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