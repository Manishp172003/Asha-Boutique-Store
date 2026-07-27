import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = ({ cartTotal, cartCount }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartCount > 0) {
      navigate('/checkout');
    }
  };

  return (

    <aside className="order-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">

        <span>Subtotal</span>

        <span>₹{cartTotal.toLocaleString('en-IN')}</span>

      </div>

      <div className="summary-row">

        <span>Shipping</span>

        <span className="shipping-text">
          Calculated at checkout
        </span>

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

      <button 
        className="checkout-btn" 
        onClick={handleCheckout}
        disabled={cartCount === 0}
        style={{ opacity: cartCount === 0 ? 0.5 : 1, cursor: cartCount === 0 ? 'not-allowed' : 'pointer' }}
      >

        Proceed to Checkout

      </button>

      <div className="summary-divider"></div>

      <div className="summary-features">

        <div className="feature">

          <div className="feature-icon">

            <ShieldCheck size={18}/>

          </div>

          <span>Secure Checkout</span>

        </div>

        <div className="feature">

          <div className="feature-icon">

            <Truck size={18}/>

          </div>

          <span>Fast Delivery</span>

        </div>

        <div className="feature">

          <div className="feature-icon">

            <RotateCcw size={18}/>

          </div>

          <span>Easy Returns</span>

        </div>

      </div>

    </aside>

  );

};

export default OrderSummary;