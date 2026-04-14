import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Car } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/auth"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gradient-hero">
      <div className="animate-fade-up flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm animate-pulse-glow">
          <Car size={40} className="text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-extrabold text-primary-foreground tracking-tight">
          ParkFindr
        </h1>
        <p className="text-primary-foreground/80 text-base font-medium">
          Find your spot, effortlessly.
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
