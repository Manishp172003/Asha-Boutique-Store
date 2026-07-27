import "./ProductGrid.css";

import Sidebar from "../Sidebar/Sidebar";
import ProductCard from "../ProductCard/ProductCard";

import { products } from "../../../../data/products";

const ProductGrid = () => {
  return (
    <section className="shop-products">

      <div className="shop-products-container">

        {/* Sidebar */}
        <Sidebar />

        {/* Products */}
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

      </div>

    </section>
  );
};

export default ProductGrid;