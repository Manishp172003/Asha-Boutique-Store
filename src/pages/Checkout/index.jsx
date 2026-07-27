import "./Checkout.css";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const Checkout = () => {
  const { cart, placeOrder } = useApp();
  const navigate = useNavigate();

  const handlePlaceOrder = (shippingInfo, paymentMethod) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      navigate('/shop');
      return;
    }

    placeOrder(shippingInfo, paymentMethod);
    window.scrollTo(0, 0);
    navigate('/order-success');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <CheckoutForm onPlaceOrder={handlePlaceOrder} />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
