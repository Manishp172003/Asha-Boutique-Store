import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Shop from '../pages/Shop'
import Wishlist from '../pages/Wishlist'
import Profile from '../pages/Profile'
import Orders from '../pages/Orders'
import Checkout from '../pages/Checkout'
import OrderSuccess from '../pages/OrderSuccess'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/order-success',
    element: <OrderSuccess />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
