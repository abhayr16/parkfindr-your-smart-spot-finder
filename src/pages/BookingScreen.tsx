import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { ArrowLeft, MapPin, Clock, Car } from "lucide-react";

const BookingScreen = () => {
  const navigate = useNavigate();
  const { booking, setBooking, user } = useApp();

  if (!booking) { navigate("/home"); return null; }

  const setDuration = (d: number) => {
    setBooking({ ...booking, duration: d, fee: d * (booking.fee / booking.duration) });
  };

  const ratePerHour = booking.fee / booking.duration;

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <button onClick={() => navigate(-1)} className="text-primary-foreground mb-3">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl font-bold text-primary-foreground">Booking Details</h1>
      </div>

      <div className="px-5 pt-5 space-y-4">
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-3">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">{booking.locationName}</p>
              <p className="text-xs text-muted-foreground">{booking.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[18px] h-[18px] rounded bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold">P</div>
            <p className="text-sm text-foreground">Floor {booking.floor} — Slot {booking.slotNumber}</p>
          </div>
          <div className="flex items-center gap-3">
            <Car size={18} className="text-primary" />
            <p className="text-sm text-foreground">{user?.carPlate || "KA 01 AB 1234"}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">Select Duration</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((h) => (
              <button
                key={h}
                onClick={() => setDuration(h)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  booking.duration === h
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {h}h
              </button>
            ))}
          </div>
        </div>

        {/* Fee */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Parking Fee</span>
          <span className="text-xl font-bold text-foreground">₹{ratePerHour * booking.duration}</span>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg transition-all active:scale-[0.98]"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookingScreen;
