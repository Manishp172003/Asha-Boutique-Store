import { Heart } from "lucide-react";
import { useApp } from "../../../../context/AppContext";
import "./WishlistCard.css";

const WishlistCard = ({ product }) => {
  const { removeFromWishlist } = useApp();

  const handleRemove = (e) => {
    e.stopPropagation();
    removeFromWishlist(product.id);
  };

  return (
    <article className="wishlist-card">

      <div className="wishlist-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button className="wishlist-heart" onClick={handleRemove}>

          <Heart
            size={18}
            fill="#D57B5A"
            color="#D57B5A"
          />

        </button>

      </div>

      <div className="wishlist-info">

        <span>{product.category}</span>

        <div className="wishlist-row">

          <h3>{product.name}</h3>

          <p>₹{product.price.toLocaleString("en-IN")}</p>

        </div>

      </div>

    </article>
  );
};

export default WishlistCard;