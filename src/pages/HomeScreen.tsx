import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Car,
  Clock,
  IndianRupee,
  Bell,
  ParkingSquare,
  Store,
  Cross,
  Building2,
  UtensilsCrossed,
  Fuel,
  Coffee,
} from "lucide-react";
import { categories, locations } from "@/data/locations";
import { useApp } from "@/context/AppContext";
import BottomNav from "@/components/BottomNav";
import mallsImg from "@/assets/cat-malls.jpg";
import hospitalsImg from "@/assets/cat-hospitals.jpg";
import hotelsImg from "@/assets/cat-hotels.jpg";
import restaurantsImg from "@/assets/cat-restaurants.jpg";
import parkingImg from "@/assets/cat-parking.jpg";

const categoryImages: Record<string, string> = {
  malls: mallsImg,
  hospitals: hospitalsImg,
  hotels: hotelsImg,
  restaurants: restaurantsImg,
  parking: parkingImg,
};

const sectionTitle: Record<string, string> = {
  malls: "Popular Malls",
  hospitals: "Nearby Hospitals",
  hotels: "Nearby Hotels",
  restaurants: "Top Restaurants",
  parking: "Public Parking",
};

const CARD_SHADOW = "0px 4px 20px rgba(0, 0, 0, 0.05)";
const CARD_RADIUS = 14;
const IMG_HEIGHT = 90;

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [search, setSearch] = useState("");

  const filteredLocations = useMemo(
    () =>
      search
        ? locations.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
        : locations,
    [search],
  );

  const stats = [
    { icon: Car, label: "Total Visits", value: "24", bg: "#DBEAFE", color: "#2563EB" },
    { icon: Clock, label: "Hours Parked", value: "18", bg: "#EDE9FE", color: "#7C3AED" },
    { icon: IndianRupee, label: "Spent", value: "₹1,200", bg: "#DCFCE7", color: "#16A34A" },
  ];

  const categoryButtons = [
    { key: "parking", label: "Parking", Icon: ParkingSquare, bg: "#DBEAFE", color: "#2563EB" },
    { key: "malls", label: "Malls", Icon: Store, bg: "#FCE7F3", color: "#DB2777" },
    { key: "hospitals", label: "Hospitals", Icon: Cross, bg: "#FEE2E2", color: "#DC2626" },
    { key: "hotels", label: "Hotels", Icon: Building2, bg: "#DCFCE7", color: "#16A34A" },
    { key: "restaurants", label: "Food", Icon: UtensilsCrossed, bg: "#FFEDD5", color: "#EA580C" },
    { key: "fuel", label: "Fuel", Icon: Fuel, bg: "#FEF3C7", color: "#D97706" },
    { key: "cafes", label: "Cafes", Icon: Coffee, bg: "#EDE9FE", color: "#7C3AED" },
  ];

  const firstName = user?.name?.split(" ")[0] || "Ada";
  const initial = (user?.name || "A").charAt(0).toUpperCase();

  return (
    <div
      style={{
        backgroundColor: "#F6F8FB",
        fontFamily: "'Inter', sans-serif",
        color: "#1E293B",
        minHeight: "100vh",
        paddingBottom: 88,
      }}
    >
      {/* HEADER */}
      <header style={{ padding: "16px 16px 0 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>Good morning, {firstName}</p>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1.2,
                margin: "4px 0 0 0",
                color: "#1E293B",
              }}
            >
              Find parking,
              <br />
              anywhere you go
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              aria-label="Notifications"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <Bell size={20} color="#1E293B" />
              <span
                style={{
                  position: "absolute",
                  top: 6,
                  right: 8,
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  background: "#EF4444",
                }}
              />
            </button>
            <button
              onClick={() => navigate("/profile")}
              aria-label="Profile"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: "linear-gradient(135deg,#3B82F6,#2563EB)",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              {initial}
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div style={{ padding: "24px 16px 0 16px" }}>
        <div
          style={{
            height: 52,
            borderRadius: 16,
            background: "#FFFFFF",
            boxShadow: CARD_SHADOW,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            gap: 12,
          }}
        >
          <Search size={18} color="#64748B" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a mall, hotel or hospital..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 14,
              color: "#1E293B",
              background: "transparent",
              fontFamily: "inherit",
            }}
          />
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          padding: "24px 16px 0 16px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              height: 80,
              borderRadius: 16,
              background: "#FFFFFF",
              boxShadow: CARD_SHADOW,
              padding: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: s.bg,
                color: s.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <s.icon size={18} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 18, fontWeight: 600, margin: 0, color: "#1E293B", lineHeight: 1.1 }}>
                {s.value}
              </p>
              <p style={{ fontSize: 12, color: "#64748B", margin: "2px 0 0 0" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CATEGORY BUTTONS - horizontal scroll, 4 visible + peek */}
      <div
        className="hide-scrollbar"
        style={{
          marginTop: 24,
          paddingLeft: 16,
          paddingRight: 16,
          display: "flex",
          gap: 12,
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          flexWrap: "nowrap",
        }}
      >
        {categoryButtons.map((c) => (
          <button
            key={c.key}
            onClick={() => navigate("/search")}
            style={{
              flex: "0 0 calc((100% - 16px - 3 * 12px) / 4.3)",
              height: 72,
              borderRadius: 16,
              background: "#FFFFFF",
              boxShadow: CARD_SHADOW,
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: 8,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: c.bg,
                color: c.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <c.Icon size={22} />
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#1E293B",
                textAlign: "center",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              {c.label}
            </span>
          </button>
        ))}
      </div>

      {/* SECTIONS */}
      <div style={{ padding: "24px 16px 0 16px", display: "flex", flexDirection: "column", gap: 24 }}>
        {categories.map((cat) => {
          const items = filteredLocations.filter((l) => l.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1E293B", margin: 0 }}>
                  {sectionTitle[cat.key] || cat.label}
                </h2>
                <button
                  onClick={() => navigate("/search")}
                  style={{
                    fontSize: 13,
                    color: "#3B82F6",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    padding: 0,
                    fontWeight: 500,
                  }}
                >
                  View all
                </button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 12,
                }}
              >
                {items.slice(0, 2).map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => navigate(`/location/${loc.id}`)}
                    style={{
                      width: "100%",
                      borderRadius: CARD_RADIUS,
                      overflow: "hidden",
                      background: "#FFFFFF",
                      boxShadow: CARD_SHADOW,
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <img
                      src={categoryImages[loc.category]}
                      alt={loc.name}
                      loading="lazy"
                      width={768}
                      height={512}
                      style={{ height: IMG_HEIGHT, width: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ padding: 10 }}>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1E293B",
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {loc.name}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "#64748B",
                          margin: "4px 0 0 0",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {loc.address}
                      </p>
                      <span
                        style={{
                          display: "inline-block",
                          marginTop: 4,
                          background: "#DCFCE7",
                          color: "#16A34A",
                          fontSize: 11,
                          padding: "4px 8px",
                          borderRadius: 999,
                          fontWeight: 500,
                        }}
                      >
                        {loc.freeSlots} slots free
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default HomeScreen;
