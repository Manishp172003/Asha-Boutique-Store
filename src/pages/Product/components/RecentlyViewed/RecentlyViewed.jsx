import { useNavigate } from "react-router-dom";
import LazyImage from "../../../../components/common/LazyImage";
import "./RecentlyViewed.css";

import { products } from "../../../../data/products";

const RecentlyViewed = ({ currentProductId }) => {
  const navigate = useNavigate();

  const recentProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <section className="recently-viewed">

      <div className="recently-header">
        <h2>Recently Viewed</h2>
      </div>

      <div className="recently-grid">

        {recentProducts.map((product) => (

          <div
            key={product.id}
            className="recent-card"
            onClick={() => navigate(`/product/${product.id}`)}
            role="button"
            tabIndex={0}
            aria-label={`View ${product.name} details`}
          >

            <div className="recent-image">
              <LazyImage src={product.image} alt={product.name} loading="lazy" />
            </div>

            <div className="recent-content">

              <h3>{product.name}</h3>

              <p>{formatPrice(product.price)}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecentlyViewed;
