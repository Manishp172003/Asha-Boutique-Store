import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Calendar, Truck } from "lucide-react";
import StatusBadge from "../../../Orders/components/StatusBadge/StatusBadge";
import LazyImage from "../../../../components/common/LazyImage";
import "./RecentOrder.css";

const RecentOrder = ({ order }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDeliveryDate = (dateString) => {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  if (!order) {
    return (
      <div className="recent-order-card empty-state">
        <div className="empty-icon">
          <Package size={48} color="#C77057" />
        </div>
        <h3>No Orders Yet</h3>
        <p>You haven't placed any orders yet. Start shopping to see your orders here.</p>
        <Button variant="primary" onClick={() => navigate('/shop')}>
          Start Shopping
        </Button>
      </div>
    );
  }

  const latestItem = order.items?.[0];

  return (
    <div className="recent-order-card">
      <div className="recent-order-header">
        <h3>Recent Order</h3>
        <span className="order-id">#{order.id}</span>
      </div>

      <div className="recent-order-content">
        <div className="order-product">
          {latestItem?.image ? (
            <LazyImage src={latestItem.image} alt={latestItem.name} loading="lazy" />
          ) : (
            <div className="product-image-placeholder"></div>
          )}
          <div className="product-info">
            <h4>{latestItem?.name || 'Product'}</h4>
            <p className="product-price">{formatPrice(latestItem?.price || 0)}</p>
            <div className="order-meta">
              <span className="meta-item">
                <Calendar size={14} />
                {formatDate(order.createdAt)}
              </span>
              <span className="meta-item">
                <Truck size={14} />
                Est. {formatDeliveryDate(order.estimatedDelivery)}
              </span>
            </div>
          </div>
        </div>

        <div className="order-status">
          <StatusBadge status={order.status} />
        </div>
      </div>

      <Button 
        variant="primary" 
        onClick={() => navigate(`/orders/${order.id}`)}
        className="track-order-btn"
      >
        Track Order
      </Button>
    </div>
  );
};

export default RecentOrder;
