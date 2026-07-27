import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Product.css";

import ProductBreadcrumb from "./components/ProductBreadcrumb/ProductBreadcrumb";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DescriptionTabs from "./components/DescriptionTabs/DescriptionTabs";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import RecentlyViewed from "./components/RecentlyViewed/RecentlyViewed";

import { products } from "../../data/products";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    navigate("/shop");
    return null;
  }

  return (
    <div className="product-page">

      <ProductBreadcrumb productName={product.name} />

      <section className="product-top">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </section>

      <DescriptionTabs />

      <RelatedProducts currentProductId={product.id} />

      <RecentlyViewed currentProductId={product.id} />

    </div>
  );
};

export default Product;