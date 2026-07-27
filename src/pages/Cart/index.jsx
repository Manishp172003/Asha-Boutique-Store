import "./Cart.css";
import { useApp } from "../../context/AppContext";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import CartBreadcrumb from "./components/CartBreadcrumb/CartBreadcrumb";
import CartTable from "./components/CartTable/CartTable";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Cart = () => {
    const { cart, user, testLoading, mobileMenuOpen, setCartOpen, setLoginOpen, setOrderHistoryOpen, setBookingOpen, setMobileMenuOpen, handleLogout, handleTestAuth } = useApp();
    
    const cartTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleOrderHistoryOpen = () => {
        setOrderHistoryOpen(true);
    };

    const handleBookingOpen = () => {
        setBookingOpen(true);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (

        <div className="cart-page">

            <Navigation
                user={user}
                cart={cart}
                testLoading={testLoading}
                onCartOpen={handleCartOpen}
                onLoginOpen={handleLoginOpen}
                onOrderHistoryOpen={handleOrderHistoryOpen}
                onLogout={handleLogout}
                onTestAuth={handleTestAuth}
                onBookingOpen={handleBookingOpen}
                onScrollToSection={() => {}}
                trendingRef={null}
                styleEditRef={null}
                atelierRef={null}
                heroRef={null}
                mobileMenuOpen={mobileMenuOpen}
                onMobileMenuToggle={handleMobileMenuToggle}
            />

            <CartBreadcrumb />

            <section className="cart-container">

                <CartTable cartItems={cart} />

                <OrderSummary cartTotal={cartTotal} cartCount={cartCount} />

            </section>

            <RecommendedProducts />

            <Newsletter />

            <Footer
                onScrollToSection={() => {}}
                trendingRef={null}
                styleEditRef={null}
                atelierRef={null}
                heroRef={null}
                onBookingOpen={handleBookingOpen}
            />

        </div>

    );

};

export default Cart;