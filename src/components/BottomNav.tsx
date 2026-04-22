import { Home, Search, CalendarCheck, User, Trophy } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: CalendarCheck, label: "Bookings", path: "/bookings" },
  { icon: Trophy, label: "Board", path: "/leaderboard" },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 64,
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        maxWidth: 448,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        zIndex: 50,
      }}
    >
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        const color = isActive ? "#3B82F6" : "#94A3B8";
        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px 8px",
              color,
            }}
          >
            <tab.icon size={22} strokeWidth={isActive ? 2.4 : 1.8} />
            <span style={{ fontSize: 11, fontWeight: 500 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
