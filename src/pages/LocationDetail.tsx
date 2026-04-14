import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { useApp } from "@/context/AppContext";

const generateSlots = (floor: number, total: number) => {
  const slots: { id: string; occupied: boolean }[] = [];
  for (let i = 1; i <= total; i++) {
    slots.push({ id: `F${floor}-S${i}`, occupied: Math.random() > 0.5 });
  }
  return slots;
};

const LocationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBooking, user } = useApp();
  const location = locations.find((l) => l.id === id);
  const [activeFloor, setActiveFloor] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  if (!location) return null;

  const floors = Array.from({ length: location.floors }, (_, i) => i + 1);
  const [slots] = useState(() => {
    const map: Record<number, ReturnType<typeof generateSlots>> = {};
    floors.forEach((f) => { map[f] = generateSlots(f, 12); });
    return map;
  });

  const currentSlots = slots[activeFloor] || [];

  const handleProceed = () => {
    if (!selectedSlot) return;
    setBooking({
      locationName: location.name,
      address: location.address,
      floor: activeFloor,
      slotNumber: selectedSlot,
      duration: 1,
      fee: location.ratePerHour,
    });
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <button onClick={() => navigate(-1)} className="text-primary-foreground mb-3">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl font-bold text-primary-foreground">{location.name}</h1>
        <div className="flex items-center gap-1 mt-1 text-primary-foreground/70">
          <MapPin size={14} />
          <span className="text-sm">{location.address}</span>
        </div>
      </div>

      <div className="px-5 pt-5">
        {/* Floor tabs */}
        <div className="flex gap-2 mb-5">
          {floors.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFloor(f); setSelectedSlot(null); }}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeFloor === f
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Floor {f}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-4 text-xs">
          <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-parking-available" /> Available</div>
          <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-parking-occupied" /> Occupied</div>
          <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-parking-selected" /> Selected</div>
        </div>

        {/* Slots grid */}
        <div className="grid grid-cols-4 gap-2.5">
          {currentSlots.map((slot) => {
            const isSelected = selectedSlot === slot.id;
            return (
              <button
                key={slot.id}
                disabled={slot.occupied}
                onClick={() => setSelectedSlot(isSelected ? null : slot.id)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-semibold transition-all ${
                  slot.occupied
                    ? "bg-parking-occupied/15 text-parking-occupied border border-parking-occupied/30 cursor-not-allowed"
                    : isSelected
                    ? "bg-parking-selected text-primary-foreground shadow-md scale-105"
                    : "bg-parking-available/15 text-parking-available border border-parking-available/30 active:scale-95"
                }`}
              >
                <span className="text-lg mb-0.5">🚗</span>
                <span>{slot.id.split("-")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Proceed button */}
        {selectedSlot && (
          <button
            onClick={handleProceed}
            className="w-full mt-6 mb-8 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg transition-all active:scale-[0.98] animate-fade-up"
          >
            Book Slot {selectedSlot}
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationDetail;
