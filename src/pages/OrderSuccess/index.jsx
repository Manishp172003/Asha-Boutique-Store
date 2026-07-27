import "./OrderSuccess.css";
import { useEffect } from "react";
import { useApp } from "../../context/AppContext";

import SuccessHero from "./components/SuccessHero/SuccessHero";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ActionButtons from "./components/ActionButtons/ActionButtons";

import Footer from "../../components/layout/Footer";

const OrderSuccess = () => {
  const { currentOrder } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentOrder]);

  return (
    <div className="order-success-page">

      <SuccessHero orderId={currentOrder?.id} />

      <OrderDetails order={currentOrder} />

      <ActionButtons />

      <Footer />

    </div>
  );
};

export default OrderSuccess;
