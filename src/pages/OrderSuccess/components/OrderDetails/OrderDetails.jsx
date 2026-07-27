import "./OrderDetails.css";
import { Package } from "lucide-react";

const OrderDetails = ({ order }) => {
  const hasOrderData = order && order.items && order.items.length > 0;

  const formatDeliveryDate = (dateString) => {
    if (!dateString) return 'July 28 - July 30, 2026';
    const date = new Date(dateString);
    const deliveryDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    return deliveryDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <section className="order-details">

      <div className="details-card">

        {/* LEFT */}

        <div className="details-left">

          <div className="info-block">

            <h5>Shipping Address</h5>

            {hasOrderData && order.shippingInfo ? (
              <>
                <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                <p>{order.shippingInfo.address}</p>
                <p>{order.shippingInfo.city}, {order.shippingInfo.state} - {order.shippingInfo.zipCode}</p>
                <p>{order.shippingInfo.country}</p>
              </>
            ) : (
              <>
                <p>Manish Pawar</p>
                <p>Nagpur</p>
                <p>Maharashtra - 440001</p>
                <p>India</p>
              </>
            )}

          </div>

          <div className="info-block">

            <h5>Estimated Delivery</h5>

            <p>{hasOrderData ? formatDeliveryDate(order.estimatedDelivery) : 'July 28 - July 30, 2026'}</p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="details-right">

          <h5>Order Summary</h5>

          {hasOrderData ? (
            <>
              {order.items.map((item) => (
                <div key={item.id} className="summary-item">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="placeholder-image">
                      <Package size={32} color="#9B8B84" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <h4>{item.name}</h4>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="summary-item">
                <div className="placeholder-image">
                  <Package size={32} color="#9B8B84" strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Atelier Maxi Dress</h4>
                  <span>Size S</span>
                </div>
                <strong>₹2,499</strong>
              </div>

              <div className="summary-item">
                <div className="placeholder-image">
                  <Package size={32} color="#9B8B84" strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Leather Tote</h4>
                  <span>Brown</span>
                </div>
                <strong>₹1,999</strong>
              </div>
            </>
          )}

          <div className="summary-total">

            <div>
              <span>Subtotal</span>
              <span>{hasOrderData ? formatPrice(order.total) : '₹4,498'}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="grand-total">
              <strong>Total</strong>
              <strong>{hasOrderData ? formatPrice(order.total) : '₹4,498'}</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OrderDetails;