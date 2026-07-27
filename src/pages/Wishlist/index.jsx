import "./Wishlist.css";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useApp } from "../../context/AppContext";

import WishlistHeader from "./components/WishlistHeader/WishlistHeader";
import WishlistGrid from "./components/WishlistGrid/WishlistGrid";
import EditorialSection from "./components/EditorialSection/EditorialSection";

import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Wishlist = () => {
  const { wishlist } = useApp();
  const navigate = useNavigate();

  const isEmpty = wishlist.length === 0;

  return (
    <div className="wishlist-page">

      <WishlistHeader count={wishlist.length} />

      {isEmpty ? (
        <div className="wishlist-empty-state">
          <div className="empty-heart">
            <Heart size={64} color="#D57B5A" />
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>Looks like you haven't saved any beautiful pieces yet.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <WishlistGrid />
          <EditorialSection />
        </>
      )}

      <Newsletter />

    </div>
  );
};

export default Wishlist;
