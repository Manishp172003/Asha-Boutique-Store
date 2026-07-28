import { useNavigate } from "react-router-dom";
import { useApp } from "../../../../context/AppContext";
import "./ActiveOrders.css";

const ActiveOrders = () => {
  const navigate = useNavigate();
  const { orders } = useApp();

  // Get the latest active order (first in array since orders are sorted by date)
  const latestOrder = orders.length > 0 ? orders[0] : null;

  const formatDate = (dateString) => {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'confirmed':
        return 'confirmed';
      case 'processing':
        return 'processing';
      case 'shipped':
        return 'shipped';
      case 'delivered':
        return 'delivered';
      default:
        return 'processing';
    }
  };

  const handleViewAllOrders = () => {
    navigate('/orders');
  };

  if (!latestOrder) {
    return (
      <section className="active-orders-card">

        <div className="active-orders-header">
          <div>
            <h2>Active Orders</h2>
            <p>Track your latest boutique purchases</p>
          </div>

          <button className="view-all-btn" onClick={handleViewAllOrders}>
            View All Orders
          </button>
        </div>

        <div className="empty-state">
          <h3>No Active Orders</h3>
          <p>Browse our latest collection.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>

      </section>
    );
  }

  const firstItem = latestOrder.items?.[0];

  return (
    <section className="active-orders-card">

      <div className="active-orders-header">
        <div>
          <h2>Active Orders</h2>
          <p>Track your latest boutique purchases</p>
        </div>

        <button className="view-all-btn" onClick={handleViewAllOrders}>
          View All Orders
        </button>
      </div>

      <div className="active-order">

        <div className="order-image">
          {firstItem?.image ? (
            <img
              src={firstItem.image}
              alt={firstItem.name}
            />
          ) : (
            <div className="placeholder-image"></div>
          )}
        </div>

        <div className="order-content">

          <h3>{firstItem?.name || 'Product'}</h3>

          <p className="order-id">
            Order #{latestOrder.id}
          </p>

          <p className="delivery">
            Estimated Delivery:
            <span> {formatDate(latestOrder.estimatedDelivery)}</span>
          </p>

          <div className={`status ${getStatusClass(latestOrder.status)}`}>
            {latestOrder.status.charAt(0).toUpperCase() + latestOrder.status.slice(1)}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ActiveOrders;