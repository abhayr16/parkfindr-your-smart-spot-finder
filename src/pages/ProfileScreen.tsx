import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { User, Mail, Car, BarChart3, IndianRupee, Settings, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { user, setUser } = useApp();

  const handleLogout = () => {
    setUser(null);
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-hero pt-12 pb-8 px-5 rounded-b-[1.5rem] flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border-[3px] border-primary-foreground/50 bg-primary-foreground/20 flex items-center justify-center mb-3">
          <User size={36} className="text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold text-primary-foreground">{user?.name || "User"}</h1>
        <p className="text-primary-foreground/70 text-sm">{user?.email || "user@email.com"}</p>
      </div>

      <div className="px-5 pt-5 space-y-4">
        {/* Info cards */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-3">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{user?.email || "user@email.com"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Car size={18} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Car Number Plate</p>
              <p className="text-sm font-medium text-foreground">{user?.carPlate || "KA 01 AB 1234"}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-card rounded-xl p-4 shadow-sm border border-border text-center">
            <BarChart3 size={18} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">24</p>
            <p className="text-[10px] text-muted-foreground">Total Visits</p>
          </div>
          <div className="flex-1 bg-card rounded-xl p-4 shadow-sm border border-border text-center">
            <IndianRupee size={18} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">1,200</p>
            <p className="text-[10px] text-muted-foreground">Amount Spent</p>
          </div>
        </div>

        {/* Actions */}
        <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
          Edit Profile
        </button>

        <button
          onClick={() => navigate("/settings")}
          className="w-full h-12 rounded-xl bg-muted text-foreground font-semibold text-sm flex items-center justify-center gap-2"
        >
          <Settings size={18} /> Settings
        </button>

        <button
          onClick={handleLogout}
          className="w-full h-12 rounded-xl bg-destructive/10 text-destructive font-semibold text-sm flex items-center justify-center gap-2"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfileScreen;
