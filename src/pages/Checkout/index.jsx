import "./Checkout.css";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const Checkout = () => {
  const { cart, placeOrder, user, testLoading, mobileMenuOpen, setCartOpen, setLoginOpen, setOrderHistoryOpen, setBookingOpen, setMobileMenuOpen, handleLogout, handleTestAuth } = useApp();
  const navigate = useNavigate();

  const handlePlaceOrder = (shippingInfo, paymentMethod) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      navigate('/shop');
      return;
    }

    placeOrder(shippingInfo, paymentMethod);
    navigate('/order-success');
  };

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
    <div className="checkout-page">

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

      <div className="checkout-container">
        <CheckoutForm onPlaceOrder={handlePlaceOrder} />
        <OrderSummary />
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

export default Checkout;
