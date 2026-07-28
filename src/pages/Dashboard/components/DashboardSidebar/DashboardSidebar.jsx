import "./DashboardSidebar.css";
import {
  Home,
  User,
  ShoppingBag,
  MapPin,
  Heart,
  LogOut,
} from "lucide-react";

const DashboardSidebar = ({ onAction, onLogout }) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      active: true,
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "orders",
      label: "Order History",
      icon: ShoppingBag,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: Heart,
    },
    {
      id: "addresses",
      label: "Addresses",
      icon: MapPin,
    },
  ];

  return (
    <aside className="dashboard-sidebar">
      <h1>My Account</h1>
      <p className="welcome-text">WELCOME BACK</p>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`menu-item ${item.active ? 'active' : ''}`}
              onClick={() => onAction(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default DashboardSidebar;
