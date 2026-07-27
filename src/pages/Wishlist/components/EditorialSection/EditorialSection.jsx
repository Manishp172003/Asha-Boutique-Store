import "./EditorialSection.css";

import editorial from "../../../../assets/wishlist/editorial.png";

import { ShieldCheck, Sparkles } from "lucide-react";

const EditorialSection = () => {
  return (
    <section className="editorial-section">

      <div className="editorial-left">

        <img
          src={editorial}
          alt="Editorial"
        />

        <div className="editorial-overlay">

          <span>SPRING '24</span>

          <h2>The Light Loom</h2>

          <p>Explore the Collection</p>

        </div>

      </div>

      <div className="editorial-right">

        <div className="info-card light">

          <ShieldCheck size={26} />

          <h3>Craftsmanship Guarantee</h3>

          <p>
            Each item in your wishlist is hand-selected and crafted
            with artisan integrity.
          </p>

        </div>

        <div className="info-card dark">

          <Sparkles size={26} />

          <h3>Personal Styling</h3>

          <p>
            Need help deciding?
            Book a one-on-one virtual consultation
            to curate your saved pieces.
          </p>

        </div>

      </div>

    </section>
  );
};

export default EditorialSection;