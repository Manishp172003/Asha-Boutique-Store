import "./OrderDetails.css";
import { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import StatusBadge from "../Orders/components/StatusBadge/StatusBadge";
import { animateOrderDetailsPage, cleanupAnimations } from "../../animations/gsapAnimations";
import { Button } from "@/components/ui/button";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders, user, cart, mobileMenuOpen, setCartOpen, setBookingOpen, setMobileMenuOpen, handleLogout } = useApp();

  const breadcrumbRef = useRef(null);
  const detailsRef = useRef(null);
  const timelineRef = useRef(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const order = orders.find(o => o.id === id);

  useEffect(() => {
    if (!order) {
      navigate('/orders');
    }
  }, [order, navigate]);

  // Initialize animations
  useEffect(() => {
    if (!order) return;
    const contexts = animateOrderDetailsPage({
      breadcrumbRef,
      detailsRef,
      timelineRef
    });
    return () => cleanupAnimations(contexts);
  }, [order]);

  if (!order) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDeliveryDate = (dateString) => {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleBackToOrders = () => {
    navigate('/orders');
  };

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
    <div className="order-details-page">

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

      <div ref={breadcrumbRef} className="order-details-header order-breadcrumb">
        <button className="back-btn" onClick={handleBackToOrders}>
          ← Back to Orders
        </button>
        <h1>Order Details</h1>
      </div>

      <div ref={detailsRef} className="order-details-content order-details-section">

        <div className="order-info-card">

          <div className="order-info-row">
            <span className="label">Order ID</span>
            <span className="value">#{order.id}</span>
          </div>

          <div className="order-info-row">
            <span className="label">Order Date</span>
            <span className="value">{formatDate(order.createdAt)}</span>
          </div>

          <div className="order-info-row">
            <span className="label">Status</span>
            <div className="value">
              <StatusBadge status={order.status} />
            </div>
          </div>

          <div className="order-info-row">
            <span className="label">Estimated Delivery</span>
            <span className="value">{formatDeliveryDate(order.estimatedDelivery)}</span>
          </div>

        </div>

        <div className="order-details-grid">

          <div className="shipping-card">

            <h3>Shipping Address</h3>

            {order.shippingInfo ? (
              <div className="address-content">
                <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                <p>{order.shippingInfo.address}</p>
                <p>{order.shippingInfo.city}, {order.shippingInfo.state} - {order.shippingInfo.zipCode}</p>
                <p>{order.shippingInfo.country}</p>
              </div>
            ) : (
              <p className="no-info">No shipping information available</p>
            )}

          </div>

          <div className="payment-card">

            <h3>Payment Method</h3>

            <div className="payment-content">
              <p>{order.paymentMethod === 'cod' ? 'Cash on Delivery' : 
                 order.paymentMethod === 'card' ? 'Credit/Debit Card' : 
                 order.paymentMethod === 'upi' ? 'UPI' : order.paymentMethod}</p>
            </div>

          </div>

        </div>

        <div className="order-products-card">

          <h3>Order Items</h3>

          <div className="products-list">
            {order.items.map((item) => (
              <div key={item.id} className="product-row">

                <div className="product-image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="product-image-placeholder"></div>
                  )}
                </div>

                <div className="product-details">
                  <h4>{item.name}</h4>
                  <span className="product-quantity">Qty: {item.quantity}</span>
                </div>

                <div className="product-pricing">
                  <span className="unit-price">{formatPrice(item.price)}</span>
                  <span className="line-total">{formatPrice(item.price * item.quantity)}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="order-summary-card">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(order.total)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <strong>Total</strong>
            <strong>{formatPrice(order.total)}</strong>
          </div>

          <div className="order-actions">

            <Button variant="primary" onClick={handleContinueShopping}>
              Continue Shopping
            </Button>

            <Button variant="outline" onClick={handleBackToOrders}>
              Back to Orders
            </Button>

          </div>

        </div>

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

export default OrderDetails;
