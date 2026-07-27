import "./Orders.css";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ShoppingBag } from "lucide-react";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import OrdersHeader from "./components/OrdersHeader/OrdersHeader";
import OrdersList from "./components/OrdersList/OrdersList";

const Orders = () => {
  const { orders, user, cart, testLoading, mobileMenuOpen, setCartOpen, setLoginOpen, setOrderHistoryOpen, setBookingOpen, setMobileMenuOpen, handleLogout, handleTestAuth } = useApp();
  const navigate = useNavigate();

  const sortedOrders = [...orders].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const isEmpty = orders.length === 0;

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
    <div className="orders-page">

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

      <OrdersHeader />

      {isEmpty ? (
        <div className="orders-empty-state">
          <div className="empty-icon">
            <ShoppingBag size={64} color="#C77057" />
          </div>
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet. Start shopping to see your orders here.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <OrdersList orders={sortedOrders} />
      )}

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

export default Orders;
