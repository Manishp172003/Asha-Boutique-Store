import "./Orders.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ShoppingBag } from "lucide-react";
import { animateOrdersPage, cleanupAnimations } from "../../animations/gsapAnimations";
import { Button } from "@/components/ui/button";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import OrdersHeader from "./components/OrdersHeader/OrdersHeader";
import OrdersList from "./components/OrdersList/OrdersList";

const Orders = () => {
  const { orders, user, cart, mobileMenuOpen, setCartOpen, setBookingOpen, setMobileMenuOpen, handleLogout } = useApp();
  const navigate = useNavigate();

  const ordersRef = useRef(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Initialize animations
  useEffect(() => {
    if (!orders || orders.length === 0) return;
    const contexts = animateOrdersPage({ ordersRef });
    return () => cleanupAnimations(contexts);
  }, [orders]);

  const sortedOrders = [...orders].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const isEmpty = orders.length === 0;

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
    <div className="orders-page">

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

      <OrdersHeader />

      {isEmpty ? (
        <div className="orders-empty-state">
          <div className="empty-icon">
            <ShoppingBag size={64} color="#C77057" />
          </div>
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet. Start shopping to see your orders here.</p>
          <Button variant="primary" onClick={() => navigate('/shop')}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div ref={ordersRef}>
          <OrdersList orders={sortedOrders} />
        </div>
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
