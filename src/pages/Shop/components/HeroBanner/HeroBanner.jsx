import { forwardRef } from "react";
import "./HeroBanner.css";

const HeroBanner = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="shop-hero">
      <img
        src="/src/assets/shop/shop-hero.png"
        alt="Linen Collection"
        className="shop-hero-image"
      />

      <div className="shop-hero-overlay">
        <p className="shop-hero-subtitle">
          The Linen Collection
        </p>

        <button className="shop-hero-btn">
          SHOP NOW
        </button>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;