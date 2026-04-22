import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Car, Clock, IndianRupee, MapPin, Bell, SlidersHorizontal, ParkingSquare, Store, Cross, Building2, UtensilsCrossed } from "lucide-react";
import { categories, locations } from "@/data/locations";
import { useApp } from "@/context/AppContext";
import BottomNav from "@/components/BottomNav";
import heroImg from "@/assets/home-hero.jpg";
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

const quickChips = [
  { key: "parking", label: "Nearby Parking", Icon: ParkingSquare, tint: "bg-primary/10 text-primary" },
  { key: "malls", label: "Malls", Icon: Store, tint: "bg-[hsl(280_80%_96%)] text-[hsl(280_60%_50%)]" },
  { key: "hospitals", label: "Hospitals", Icon: Cross, tint: "bg-[hsl(0_80%_96%)] text-[hsl(0_70%_55%)]" },
  { key: "hotels", label: "Hotels", Icon: Building2, tint: "bg-[hsl(150_60%_94%)] text-[hsl(150_55%_38%)]" },
  { key: "restaurants", label: "Restaurants", Icon: UtensilsCrossed, tint: "bg-[hsl(35_90%_94%)] text-[hsl(30_80%_45%)]" },
];

const sectionTitle: Record<string, string> = {
  malls: "Popular Malls",
  hospitals: "Nearby Hospitals",
  hotels: "Nearby Hotels",
  restaurants: "Top Restaurants",
  parking: "Public Parking",
};

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
    { icon: Car, label: "Total Visits", value: "24", tint: "bg-primary text-primary-foreground" },
    { icon: Clock, label: "Hours Parked", value: "18", tint: "bg-[hsl(265_85%_60%)] text-white" },
    { icon: IndianRupee, label: "Total Spent", value: "1,200", tint: "bg-accent text-accent-foreground" },
  ];

  const firstName = user?.name?.split(" ")[0] || "there";
  const initial = (user?.name || "U").charAt(0).toUpperCase();

  return (
    <div className="min-h-screen gradient-soft pb-24">
      {/* Top bar */}
      <div className="px-5 pt-10 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Good morning,</p>
          <p className="text-sm font-semibold text-foreground">{firstName}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-full bg-card shadow-card border border-border/50 flex items-center justify-center relative" aria-label="Notifications">
            <Bell size={17} className="text-foreground" />
            <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-destructive" />
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="h-10 w-10 rounded-full gradient-primary text-primary-foreground font-semibold shadow-float flex items-center justify-center"
            aria-label="Open profile"
          >
            {initial}
          </button>
        </div>
      </div>

      {/* Hero headline + illustration */}
      <div className="px-5 pt-1">
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight leading-tight">
          Find parking,
          <br />
          anywhere you go
        </h1>
        <div className="mt-3 rounded-2xl overflow-hidden">
          <img src={heroImg} alt="City parking" width={1280} height={512} className="w-full h-28 object-cover" />
        </div>
      </div>

      {/* Floating search */}
      <div className="px-5 mt-4">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a mall, hotel or hospital..."
            className="w-full h-12 rounded-2xl bg-card pl-11 pr-12 text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-float border border-border/60 focus:border-primary/40 transition"
          />
          <button
            onClick={() => navigate("/search")}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center"
            aria-label="Filters"
          >
            <SlidersHorizontal size={15} />
          </button>
        </div>
      </div>

      {/* Stat pill cards */}
      <div className="px-5 mt-4 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-3 shadow-card border border-border/50 flex items-center gap-2.5">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${s.tint}`}>
              <s.icon size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-base font-bold text-foreground leading-none truncate">
                {s.label === "Total Spent" ? `₹${s.value}` : s.value}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1 truncate">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick category chips */}
      <div className="mt-5">
        <div className="px-5 flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
          {quickChips.map((c) => (
            <button
              key={c.key}
              onClick={() => navigate("/search")}
              className="shrink-0 bg-card rounded-2xl px-3.5 py-2.5 shadow-card border border-border/50 flex items-center gap-2"
            >
              <span className={`h-7 w-7 rounded-full flex items-center justify-center ${c.tint}`}>
                <c.Icon size={14} />
              </span>
              <span className="text-xs font-semibold text-foreground">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="px-5 pt-6 space-y-7">
        {categories.map((cat) => {
          const items = filteredLocations.filter((l) => l.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key}>
              <div className="flex items-end justify-between mb-3">
                <h2 className="text-base font-bold text-foreground tracking-tight">
                  {sectionTitle[cat.key] || cat.label}
                </h2>
                <button onClick={() => navigate("/search")} className="text-xs font-semibold text-primary">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {items.slice(0, 4).map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => navigate(`/location/${loc.id}`)}
                    className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 text-left transition-all active:scale-[0.98] hover:shadow-float"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={categoryImages[loc.category]}
                        alt={loc.name}
                        loading="lazy"
                        width={768}
                        height={512}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-foreground truncate">{loc.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-muted-foreground shrink-0" />
                        <p className="text-[11px] text-muted-foreground truncate">{loc.address}</p>
                      </div>
                      <span className="inline-block mt-2 text-[10px] font-semibold bg-accent/15 text-accent px-2 py-0.5 rounded-full">
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
