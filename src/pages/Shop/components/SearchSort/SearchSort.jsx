import "./SearchSort.css";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchSort = () => {
  return (
    <section className="search-sort">
      <div className="search-sort-container">

        {/* Left */}
        <div className="product-count">
          Showing <strong>1–12</strong> of <strong>24</strong> products
        </div>

        {/* Right */}
        <div className="search-actions">

          {/* Search Box */}
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
            />
          </div>

          {/* Sort */}
          <div className="sort-box">
            <SlidersHorizontal size={18} />

            <select>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name A-Z</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SearchSort;