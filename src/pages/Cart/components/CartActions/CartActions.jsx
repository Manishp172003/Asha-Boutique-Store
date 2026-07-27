import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./CartActions.css";

const CartActions = () => {

  return (

    <div className="cart-actions">

      <Link to="/shop" className="continue-shopping">

        <ArrowLeft size={18} />

        Continue Shopping

      </Link>

      <div className="promo-section">

        <input
          type="text"
          placeholder="Promo Code"
        />

        <button>

          Apply

        </button>

      </div>

    </div>

  );

};

export default CartActions;