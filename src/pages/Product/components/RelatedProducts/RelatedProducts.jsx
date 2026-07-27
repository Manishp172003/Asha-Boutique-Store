import { useNavigate } from "react-router-dom";
import "./RelatedProducts.css";

import { products } from "../../../../data/products";

const RelatedProducts = ({ currentProductId }) => {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <section className="related-products">
      <div className="related-header">
        <h2>You May Also Like</h2>
        <p>Handpicked pieces from our latest collection.</p>
      </div>

      <div className="related-grid">
        {relatedProducts.map((product) => (
          <div
            className="related-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="related-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="related-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;