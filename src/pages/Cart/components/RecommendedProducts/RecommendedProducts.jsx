import "./RecommendedProducts.css";
import ProductCard from "../../../Shop/components/ProductCard/ProductCard";

import product1 from "../../../../assets/shop/product-1.png";
import product2 from "../../../../assets/shop/product-2.png";
import product3 from "../../../../assets/shop/product-3.png";
import product4 from "../../../../assets/shop/product-4.png";

const products = [

  {
    id:101,
    name:"Silk Evening Dress",
    category:"Women's Fashion",
    price:2999,
    rating:4.8,
    isNew:true,
    isSale:false,
    image:product1
  },

  {
    id:102,
    name:"Linen Blazer",
    category:"Outerwear",
    price:1899,
    rating:4.6,
    isNew:false,
    isSale:false,
    image:product2
  },

  {
    id:103,
    name:"Classic Knit Sweater",
    category:"Knitwear",
    price:1499,
    rating:4.7,
    isNew:true,
    isSale:false,
    image:product3
  },

  {
    id:104,
    name:"Premium Leather Bag",
    category:"Accessories",
    price:3599,
    rating:4.9,
    isNew:false,
    isSale:true,
    image:product4
  }

];

const RecommendedProducts = () => {

  return (

    <section className="recommended-products">

      <div className="recommended-header">

        <p>You May Also Like</p>

        <h2>Curated For You</h2>

      </div>

      <div className="recommended-grid">

        {products.map(product=>(

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

};

export default RecommendedProducts;