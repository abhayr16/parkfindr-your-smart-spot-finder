import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { categories, locations } from "@/data/locations";
import BottomNav from "@/components/BottomNav";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredLocations = search
    ? locations.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
    : locations;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <h1 className="text-xl font-bold text-primary-foreground mb-1">Hi there! 👋</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Find parking near you</p>
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a mall, hotel or hospital..."
            className="w-full h-11 rounded-xl bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 pt-5 space-y-5">
        {categories.map((cat) => {
          const items = filteredLocations.filter((l) => l.category === cat.key);
          if (items.length === 0) return null;
          return (
            <div key={cat.key}>
              <h2 className="text-sm font-semibold text-foreground mb-2.5">
                {cat.emoji} {cat.label}
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                {items.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => navigate(`/location/${loc.id}`)}
                    className="min-w-[150px] bg-card rounded-xl p-3.5 shadow-sm border border-border text-left transition-all active:scale-[0.97] hover:shadow-md"
                  >
                    <div className="text-2xl mb-1.5">{loc.icon}</div>
                    <p className="text-sm font-semibold text-foreground truncate">{loc.name}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{loc.address}</p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
                      {loc.freeSlots} slots free
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default HomeScreen;
