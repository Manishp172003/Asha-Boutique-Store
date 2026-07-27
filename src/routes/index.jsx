import { createBrowserRouter } from 'react-router-dom'
import ScrollToTop from '../components/layout/ScrollToTop'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Profile from '../pages/Profile'
import Orders from '../pages/Orders'
import OrderDetails from '../pages/OrderDetails'
import Checkout from '../pages/Checkout'
import OrderSuccess from '../pages/OrderSuccess'
import NotFound from '../pages/NotFound'

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/register',
    element: <Layout><Register /></Layout>,
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '/shop',
    element: <Layout><Shop /></Layout>,
  },
  {
    path: '/product/:id',
    element: <Layout><Product /></Layout>,
  },
  {
    path: '/cart',
    element: <Layout><Cart /></Layout>,
  },
  {
    path: '/wishlist',
    element: <Layout><Wishlist /></Layout>,
  },
  {
    path: '/profile',
    element: <Layout><Profile /></Layout>,
  },
  {
    path: '/orders',
    element: <Layout><Orders /></Layout>,
  },
  {
    path: '/orders/:id',
    element: <Layout><OrderDetails /></Layout>,
  },
  {
    path: '/checkout',
    element: <Layout><Checkout /></Layout>,
  },
  {
    path: '/order-success',
    element: <Layout><OrderSuccess /></Layout>,
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>,
  },
])

export default router
