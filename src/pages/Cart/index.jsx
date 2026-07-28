import "./Cart.css";
import { useRef, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { animateCartPage, cleanupAnimations } from "../../animations/gsapAnimations";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import CartBreadcrumb from "./components/CartBreadcrumb/CartBreadcrumb";
import CartTable from "./components/CartTable/CartTable";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import Newsletter from "../Shop/components/Newsletter/Newsletter";

const Cart = () => {
    const { cart, user, mobileMenuOpen, setCartOpen, setBookingOpen, setMobileMenuOpen, handleLogout } = useApp();

    const cartItemsRef = useRef(null);
    const orderSummaryRef = useRef(null);
    const recommendedRef = useRef(null);

    // Initialize animations
    useEffect(() => {
        const contexts = animateCartPage({
            cartItemsRef,
            orderSummaryRef,
            recommendedRef
        });
        return () => cleanupAnimations(contexts);
    }, []);

    const cartTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const handleCartOpen = () => {
        setCartOpen(true);
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
                onCartOpen={handleCartOpen}
                onLogout={handleLogout}
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

                <div ref={cartItemsRef}>
                    <CartTable cartItems={cart} />
                </div>

                <div ref={orderSummaryRef}>
                    <OrderSummary cartTotal={cartTotal} cartCount={cartCount} />
                </div>

            </section>

            <div ref={recommendedRef}>
                <RecommendedProducts />
            </div>

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