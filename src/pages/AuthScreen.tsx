import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { Car } from "lucide-react";

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
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(180deg, #0A0F2C 0%, #1A237E 100%)" }}>
      {/* Glowing icon + title */}
      <div className="pt-16 pb-8 flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{
            background: "rgba(59,130,246,0.15)",
            boxShadow: "0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2)",
          }}
        >
          <Car size={32} className="text-blue-400" />
        </div>
        <h1
          className="text-3xl font-extrabold tracking-tight"
          style={{
            color: "#fff",
            textShadow: "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.3)",
          }}
        >
          ParkFindr
        </h1>
        <p className="text-blue-300/60 text-sm mt-1">Find your spot, effortlessly.</p>
      </div>

      {/* Form area */}
      <div className="flex-1 px-6 pt-4">
        {/* Tabs */}
        <div className="flex rounded-xl p-1 mb-6" style={{ background: "rgba(255,255,255,0.08)" }}>
          {(["login", "signup"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === t
                  ? "text-white shadow-md"
                  : "text-blue-300/50"
              }`}
              style={tab === t ? { background: "rgba(59,130,246,0.25)" } : {}}
            >
              {t === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {tab === "signup" && (
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
            />
          )}
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          {tab === "signup" && (
            <input
              placeholder="Car Number Plate (e.g. KA 01 AB 1234)"
              value={carPlate}
              onChange={(e) => setCarPlate(e.target.value)}
              className="auth-input"
            />
          )}
        </div>

        <button
          onClick={handleContinue}
          className="w-full h-12 mt-6 text-base font-semibold rounded-xl text-white transition-all active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #2563EB)",
            boxShadow: "0 4px 20px rgba(59,130,246,0.5), 0 8px 40px rgba(59,130,246,0.3)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AuthScreen;
