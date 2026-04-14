import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { categories, locations } from "@/data/locations";
import CategoryIcon from "@/components/CategoryIcon";
import BottomNav from "@/components/BottomNav";

const filters = [{ key: "all", label: "All" }, ...categories];

const SearchScreen = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = locations.filter((l) => {
    const matchesCategory = activeFilter === "all" || l.category === activeFilter;
    const matchesSearch = !search || l.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <h1 className="text-xl font-bold text-primary-foreground mb-4">Search</h1>
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search locations..."
            className="w-full h-11 rounded-xl bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-5 space-y-3 pt-2">
        {filtered.map((loc) => (
          <button
            key={loc.id}
            onClick={() => navigate(`/location/${loc.id}`)}
            className="w-full bg-card rounded-xl p-4 shadow-sm border border-border text-left flex items-center gap-3 transition-all active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <CategoryIcon category={loc.category} size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{loc.name}</p>
              <p className="text-xs text-muted-foreground truncate">{loc.address}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-semibold text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
                  {loc.freeSlots} slots free
                </span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-0.5">
                  <MapPin size={10} /> {loc.distance} km away
                </span>
              </div>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-8">No locations found</p>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default SearchScreen;
