import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { ArrowLeft, Smartphone, CreditCard, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";

const methods = [
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Card", icon: CreditCard },
  { id: "wallet", label: "Wallet", icon: Wallet },
];

const PaymentScreen = () => {
  const navigate = useNavigate();
  const { booking } = useApp();
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");

  if (!booking) { navigate("/home"); return null; }

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <button onClick={() => navigate(-1)} className="text-primary-foreground mb-3">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl font-bold text-primary-foreground">Payment</h1>
      </div>

      <div className="px-5 pt-5 space-y-4">
        {/* Amount */}
        <div className="bg-card rounded-xl p-5 shadow-sm border border-border text-center">
          <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
          <p className="text-3xl font-extrabold text-foreground">₹{booking.fee}</p>
        </div>

        {/* Methods */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
          <p className="text-sm font-semibold text-foreground mb-3">Payment Method</p>
          <div className="space-y-2">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  method === m.id
                    ? "bg-secondary border-2 border-primary"
                    : "bg-muted border-2 border-transparent"
                }`}
              >
                <m.icon size={20} className={method === m.id ? "text-primary" : "text-muted-foreground"} />
                <span className={`text-sm font-medium ${method === m.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {m.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {method === "upi" && (
          <Input
            placeholder="Enter UPI ID (e.g. name@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="h-12"
          />
        )}

        <button
          onClick={() => navigate("/confirmed")}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg transition-all active:scale-[0.98]"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;
