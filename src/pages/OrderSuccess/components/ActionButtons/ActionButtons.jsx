import { useNavigate } from "react-router-dom";
import "./ActionButtons.css";

const ActionButtons = () => {

  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleManageOrder = () => {
    navigate("/orders");
  };

  return (

    <section className="order-actions">

      <div className="action-buttons">

        <button
          className="continue-btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <button
          className="manage-btn"
          onClick={handleManageOrder}
        >
          Manage Order
        </button>

      </div>

      <p className="support-text">
        Need help? Contact our Atelier at{" "}
        <a href="mailto:hello@ashaboutique.com">
          hello@ashaboutique.com
        </a>
      </p>

    </section>

  );

};

export default ActionButtons;