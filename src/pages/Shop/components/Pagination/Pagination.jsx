import "./Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <section className="shop-pagination">

      <button className="page-btn">
        <ChevronLeft size={18} />
      </button>

      <button className="page-number active">
        1
      </button>

      <button className="page-number">
        2
      </button>

      <button className="page-number">
        3
      </button>

      <button className="page-btn">
        <ChevronRight size={18} />
      </button>

    </section>
  );
};

export default Pagination;