import { Minus, Plus, X } from "lucide-react";
import { useApp } from "../../../../context/AppContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useApp();

  const handleQuantityChange = (delta) => {
    updateQuantity(item.id, delta);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const subtotal = item.price * item.quantity;

  return (

    <div className="cart-item">

      <div className="cart-product">

        <img
          src={item.image}
          alt={item.name}
        />

        <div className="cart-details">

          <h3>{item.name}</h3>

          <p>Color: Terracotta</p>

          <p>Size: S</p>

          <button className="remove-btn" onClick={handleRemove}>

            <X size={15} />

            Remove

          </button>

        </div>

      </div>

      <div className="cart-price">

        ₹{item.price.toLocaleString('en-IN')}

      </div>

      <div className="cart-quantity">

        <button onClick={() => handleQuantityChange(-1)}>

          <Minus size={15}/>

        </button>

        <span>{item.quantity}</span>

        <button onClick={() => handleQuantityChange(1)}>

          <Plus size={15}/>

        </button>

      </div>

      <div className="cart-subtotal">

        ₹{subtotal.toLocaleString('en-IN')}

      </div>

    </div>

  );

};

export default CartItem;