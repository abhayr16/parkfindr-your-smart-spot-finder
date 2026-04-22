import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Car, Clock, IndianRupee, MapPin } from "lucide-react";
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

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [search, setSearch] = useState("");

  const filteredLocations = search
    ? locations.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
    : locations;

  const stats = [
    { icon: Car, label: "Total Visits", value: "24", tint: "bg-primary/10 text-primary" },
    { icon: Clock, label: "Hours Parked", value: "18", tint: "bg-accent/10 text-accent" },
    { icon: IndianRupee, label: "Spent", value: "1,200", tint: "bg-secondary text-secondary-foreground" },
  ];

  const initial = (user?.name || "U").charAt(0).toUpperCase();

  return (
    <div className="min-h-screen gradient-soft pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-muted-foreground">Good to see you</p>
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              Hello, {user?.name?.split(" ")[0] || "there"}
            </h1>
          </div>
          <button
            onClick={() => navigate("/profile")}
            className="h-11 w-11 rounded-full gradient-primary text-primary-foreground font-semibold shadow-float flex items-center justify-center"
            aria-label="Open profile"
          >
            {initial}
          </button>
        </div>

        {/* Floating search */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search malls, hotels, hospitals..."
            className="w-full h-12 rounded-2xl bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-float border border-border/60 focus:border-primary/40 transition"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-5">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-3.5 shadow-card border border-border/50">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-2 ${s.tint}`}>
                <s.icon size={16} />
              </div>
              <p className="text-lg font-bold text-foreground leading-none">{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories - vertical, 2-col grid */}
      <div className="px-5 pt-7 space-y-7">
        {categories.map((cat) => {
          const items = filteredLocations.filter((l) => l.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key}>
              <div className="flex items-end justify-between mb-3">
                <h2 className="text-base font-bold text-foreground tracking-tight">{cat.label}</h2>
                <span className="text-xs text-muted-foreground">{items.length} places</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {items.map((loc) => (
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
                      <span className="inline-block mt-2 text-[10px] font-semibold text-accent-foreground bg-accent/15 text-accent px-2 py-0.5 rounded-full">
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
