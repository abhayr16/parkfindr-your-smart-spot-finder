import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthScreen = () => {
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [tab, setTab] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carPlate, setCarPlate] = useState("");

  const handleContinue = () => {
    setUser({ name: name || "User", email, carPlate: carPlate || "KA 01 AB 1234" });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="gradient-hero pt-12 pb-8 px-6 rounded-b-[2rem] flex flex-col items-center">
        <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-3">
          <Car size={28} className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-primary-foreground">ParkFindr</h1>
      </div>

      <div className="flex-1 px-6 pt-6">
        <div className="flex bg-muted rounded-lg p-1 mb-6">
          {(["login", "signup"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition-all ${
                tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {t === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {tab === "signup" && (
            <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="h-12" />
          )}
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12" />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-12" />
          {tab === "signup" && (
            <Input placeholder="Car Number Plate (e.g. KA 01 AB 1234)" value={carPlate} onChange={(e) => setCarPlate(e.target.value)} className="h-12" />
          )}
        </div>

        <Button onClick={handleContinue} className="w-full h-12 mt-6 text-base font-semibold">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AuthScreen;
