import "./Cart.css";
import { useApp } from "../../context/AppContext";

import CartBreadcrumb from "./components/CartBreadcrumb/CartBreadcrumb";
import CartTable from "./components/CartTable/CartTable";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Cart = () => {
    const { cart } = useApp();
    
    const cartTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (

        <div className="cart-page">

            <CartBreadcrumb />

            <section className="cart-container">

                <CartTable cartItems={cart} />

                <OrderSummary cartTotal={cartTotal} cartCount={cartCount} />

            </section>

            <RecommendedProducts />

            <Newsletter />

        </div>

    );

};

export default Cart;