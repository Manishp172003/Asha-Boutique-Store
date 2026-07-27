import { useState } from "react";
import "./DescriptionTabs.css";

const DescriptionTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="description-tabs">

      <div className="tabs-header">

        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </button>

        <button
          className={activeTab === "shipping" ? "active" : ""}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping
        </button>

      </div>

      <div className="tabs-content">

        {activeTab === "description" && (
          <>
            <h3>Timeless Elegance</h3>

            <p>
              Carefully handcrafted using premium materials, this necklace
              blends modern elegance with traditional craftsmanship.
              Designed for weddings, festive occasions and everyday luxury,
              it brings sophistication to every outfit.
            </p>

            <p>
              Every piece from Asha Boutique is thoughtfully curated to
              celebrate confidence, femininity and timeless beauty.
            </p>
          </>
        )}

        {activeTab === "details" && (
          <div className="details-grid">

            <div>
              <span>Material</span>
              <p>Premium Alloy & Stones</p>
            </div>

            <div>
              <span>Finish</span>
              <p>Gold Plated</p>
            </div>

            <div>
              <span>Length</span>
              <p>18 Inches</p>
            </div>

            <div>
              <span>Weight</span>
              <p>120 gm</p>
            </div>

            <div>
              <span>Category</span>
              <p>Necklace</p>
            </div>

            <div>
              <span>Occasion</span>
              <p>Wedding & Party</p>
            </div>

          </div>
        )}

        {activeTab === "shipping" && (
          <>
            <h3>Shipping Information</h3>

            <ul>
              <li>Free shipping on orders above ₹999.</li>
              <li>Delivery within 3–7 business days.</li>
              <li>Easy 7-day return & exchange.</li>
              <li>Secure packaging for all jewellery.</li>
            </ul>
          </>
        )}

      </div>

    </section>
  );
};

export default DescriptionTabs;