import { useApp } from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const { cart } = useApp();
  const navigate = useNavigate();

  const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <aside className="checkout-order-summary">
      <h2>Order Summary</h2>

      <div className="order-items">
        {cart.map((item) => {
          const subtotal = item.price * item.quantity;
          return (
            <div key={item.id} className="order-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="item-price">
                ₹{subtotal.toLocaleString('en-IN')}
              </div>
            </div>
          );
        })}
      </div>

      <div className="summary-divider"></div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span className="shipping-text">Calculated at checkout</span>
      </div>

      <div className="summary-row">
        <span>Estimated Tax</span>
        <span>₹0</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-total">
        <h3>Total</h3>
        <h3>₹{cartTotal.toLocaleString('en-IN')}</h3>
      </div>

      <button onClick={handleContinueShopping} className="continue-shopping-btn">
        Continue Shopping
      </button>

      <div className="summary-features">
        <div className="feature">
          <span>Secure Checkout</span>
        </div>
        <div className="feature">
          <span>Fast Delivery</span>
        </div>
        <div className="feature">
          <span>Easy Returns</span>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
