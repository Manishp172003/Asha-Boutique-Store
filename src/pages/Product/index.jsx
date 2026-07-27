import { useParams, useNavigate } from "react-router-dom";
import "./Product.css";
import { useApp } from "../../context/AppContext";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import ProductBreadcrumb from "./components/ProductBreadcrumb/ProductBreadcrumb";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DescriptionTabs from "./components/DescriptionTabs/DescriptionTabs";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import RecentlyViewed from "./components/RecentlyViewed/RecentlyViewed";

import { products } from "../../data/products";

const Product = () => {
  const { id } = useParams();
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

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    navigate("/shop");
    return null;
  }

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
    <div className="product-page">

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

      <ProductBreadcrumb productName={product.name} />

      <section className="product-top">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </section>

      <DescriptionTabs />

      <RelatedProducts currentProductId={product.id} />

      <RecentlyViewed currentProductId={product.id} />

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

export default Product;