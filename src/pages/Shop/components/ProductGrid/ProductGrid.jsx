import "./ProductGrid.css";

import ProductCard from "../ProductCard/ProductCard";

import { products } from "../../../../data/products";

const ProductGrid = () => {
  return (
    <div className="products-wrapper">

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default ProductGrid;