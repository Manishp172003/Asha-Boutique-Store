import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import "./WishlistPreview.css";

const WishlistPreview = ({ items }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  if (!items || items.length === 0) {
    return (
      <div className="wishlist-preview-card empty-state">
        <div className="empty-icon">
          <Heart size={48} color="#D57B5A" />
        </div>
        <h3>Wishlist Empty</h3>
        <p>Save your favorite pieces to see them here.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-preview-card">
      <div className="wishlist-preview-header">
        <h3>Wishlist Preview</h3>
        <Button 
          variant="outline" 
          onClick={() => navigate('/wishlist')}
          className="view-all-btn"
        >
          View Wishlist
        </Button>
      </div>

      <div className="wishlist-items">
        {items.map((item) => (
          <div key={item.id} className="wishlist-item">
            {item.image ? (
              <img src={item.image} alt={item.name} className="item-image" />
            ) : (
              <div className="item-image-placeholder"></div>
            )}
            <div className="item-info">
              <h4>{item.name}</h4>
              <p className="item-price">{formatPrice(item.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPreview;
