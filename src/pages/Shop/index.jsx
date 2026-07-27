import "./Shop.css";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

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
    testLoading,
    mobileMenuOpen,
    setCartOpen,
    setLoginOpen,
    setOrderHistoryOpen,
    setBookingOpen,
    setMobileMenuOpen,
    handleLogout,
    handleTestAuth,
  } = useApp();

  const cartTotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

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
    <div className="shop-page">

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

      <HeroBanner />
      <Breadcrumb />
      <SearchSort />
      <ProductGrid />
      <Pagination />
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

export default Shop;