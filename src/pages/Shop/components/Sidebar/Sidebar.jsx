import "./Sidebar.css";

const categories = [
  "All Items",
  "Dresses",
  "Outerwear",
  "Accessories",
  "Sale"
];

const Sidebar = () => {
  return (
    <aside className="shop-sidebar">

      {/* Categories */}
      <div className="sidebar-section">
        <h3>Categories</h3>

        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <button className={index === 0 ? "active" : ""}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="sidebar-section">
        <h3>Price Range</h3>

        <input
          type="range"
          min="0"
          max="10000"
          defaultValue="5000"
        />

        <p className="price-text">
          ₹0 — ₹10,000
        </p>
      </div>

      {/* Colors */}
      <div className="sidebar-section">
        <h3>Colors</h3>

        <div className="color-options">

          <span
            className="color brown"
            title="Brown"
          ></span>

          <span
            className="color gold"
            title="Gold"
          ></span>

          <span
            className="color silver"
            title="Silver"
          ></span>

          <span
            className="color black"
            title="Black"
          ></span>

        </div>
      </div>

      {/* Sizes */}
      <div className="sidebar-section">
        <h3>Sizes</h3>

        <div className="size-options">

          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>

        </div>
      </div>

      <button className="clear-filter">
        Clear Filters
      </button>

    </aside>
  );
};

export default Sidebar;