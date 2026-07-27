import "./Shop.css";

import HeroBanner from "./components/HeroBanner/HeroBanner";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import SearchSort from "./components/SearchSort/SearchSort";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Pagination from "./components/Pagination/Pagination";
import Newsletter from "./components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <div className="shop-page">

      <HeroBanner />
      <Breadcrumb />
      <SearchSort />
      <ProductGrid />
      <Pagination />
      <Newsletter />
    </div>
  );
};

export default Shop;