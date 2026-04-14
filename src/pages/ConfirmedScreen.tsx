import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";

const ConfirmedScreen = () => {
  const navigate = useNavigate();
  const { booking } = useApp();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Animated checkmark */}
      <div className="mb-6">
        <svg width="96" height="96" viewBox="0 0 96 96" className="drop-shadow-lg">
          <circle
            cx="48" cy="48" r="44"
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="4"
            className="animate-checkmark-circle"
          />
          <path
            d="M30 50 L42 62 L66 38"
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-checkmark-draw"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2 animate-fade-up">Booking Confirmed!</h1>
      <p className="text-muted-foreground text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Your parking slot has been reserved
      </p>

      {booking && (
        <div className="w-full bg-card rounded-xl p-4 shadow-sm border border-border space-y-2 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Row label="Location" value={booking.locationName} />
          <Row label="Floor" value={`Floor ${booking.floor}`} />
          <Row label="Slot" value={booking.slotNumber} />
          <Row label="Duration" value={`${booking.duration} hour${booking.duration > 1 ? "s" : ""}`} />
          <Row label="Amount Paid" value={`₹${booking.fee}`} />
        </div>
      )}

      <div className="w-full space-y-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg transition-all active:scale-[0.98]">
          Navigate to Slot
        </button>
        <button
          onClick={() => navigate("/home")}
          className="w-full h-12 rounded-xl bg-muted text-foreground font-semibold text-base transition-all active:scale-[0.98]"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-semibold text-foreground">{value}</span>
  </div>
);

export default ConfirmedScreen;
