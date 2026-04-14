import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Navigation } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const upcomingBookings = [
  { id: 1, venue: "Orion Mall", floor: 2, slot: "F2-S5", date: "14 Apr 2026", time: "10:00 AM", duration: "2 hours", amount: 100, active: true },
  { id: 2, venue: "Taj Hotel", floor: 1, slot: "F1-S3", date: "15 Apr 2026", time: "2:00 PM", duration: "1 hour", amount: 80, active: false },
];

const pastBookings = [
  { id: 3, venue: "Phoenix Marketcity", floor: 3, slot: "F3-S8", date: "10 Apr 2026", time: "11:00 AM", duration: "3 hours", amount: 180 },
  { id: 4, venue: "Manipal Hospital", floor: 1, slot: "F1-S2", date: "8 Apr 2026", time: "9:00 AM", duration: "1 hour", amount: 30 },
  { id: 5, venue: "MG Road Parking", floor: 2, slot: "F2-S10", date: "5 Apr 2026", time: "4:00 PM", duration: "2 hours", amount: 40 },
];

const BookingsScreen = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const bookings = tab === "upcoming" ? upcomingBookings : pastBookings;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <h1 className="text-xl font-bold text-primary-foreground">My Bookings</h1>
      </div>

      {/* Tabs */}
      <div className="px-5 pt-4">
        <div className="flex bg-muted rounded-lg p-1 mb-4">
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition-all ${
                tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {t === "upcoming" ? "Upcoming" : "Past"}
            </button>
          ))}
        </div>
      </div>

      {/* Booking cards */}
      <div className="px-5 space-y-3">
        {bookings.map((b) => (
          <div key={b.id} className="bg-card rounded-xl p-4 shadow-sm border border-border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm font-semibold text-foreground">{b.venue}</p>
                <p className="text-xs text-muted-foreground">Floor {b.floor} - Slot {b.slot}</p>
              </div>
              {"active" in b ? (
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  b.active ? "bg-primary/15 text-primary" : "bg-secondary text-secondary-foreground"
                }`}>
                  {b.active ? "Active" : "Upcoming"}
                </span>
              ) : (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                  Completed
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
              <span className="flex items-center gap-1"><Clock size={12} /> {b.date}, {b.time}</span>
              <span>{b.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-foreground">₹{b.amount}</span>
              {"active" in b && b.active && (
                <button className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
                  <Navigation size={12} /> Navigate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default BookingsScreen;
