import { forwardRef } from "react";
import LazyImage from "../../../../components/common/LazyImage";
import "./HeroBanner.css";

const HeroBanner = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="shop-hero">
      <LazyImage
        src="/src/assets/shop/shop-hero.png"
        alt="Linen Collection"
        loading="eager"
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