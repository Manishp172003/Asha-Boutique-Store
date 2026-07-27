import "./ProductCard.css";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../../context/AppContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useApp();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-card" onClick={handleCardClick}>

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {product.isNew && (
          <span className="badge new">NEW</span>
        )}

        {product.isSale && (
          <span className="badge sale">SALE</span>
        )}

        <button 
          className="wishlist-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={18} />
        </button>

        <div className="product-overlay" onClick={(e) => e.stopPropagation()}>

          <button onClick={handleCardClick}>
            <Eye size={18} />
            Quick View
          </button>

          <button onClick={handleAddToCart}>
            <ShoppingBag size={18} />
            Add to Cart
          </button>

        </div>

      </div>

      <div className="product-details">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="rating">

          <Star size={15} fill="#F4B400" color="#F4B400" />

          <span>{product.rating}</span>

        </div>

        <div className="price">
          ₹ {product.price.toLocaleString('en-IN')}
        </div>

      </div>

    </div>
  );
};

export default ProductCard;