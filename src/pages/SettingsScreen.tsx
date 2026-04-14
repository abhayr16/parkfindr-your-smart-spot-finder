import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Shield, FileText, Headphones, Info } from "lucide-react";

const SettingsScreen = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);

  const items = [
    {
      icon: Bell,
      label: "Notifications",
      toggle: true,
      value: notifications,
      onToggle: () => setNotifications(!notifications),
    },
    { icon: Shield, label: "Privacy Policy", action: () => {} },
    { icon: FileText, label: "Terms & Conditions", action: () => {} },
    { icon: Headphones, label: "Contact Support", action: () => navigate("/support") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <button onClick={() => navigate(-1)} className="text-primary-foreground mb-3">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl font-bold text-primary-foreground">Settings</h1>
      </div>

      <div className="px-5 pt-5 space-y-2">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.toggle ? item.onToggle : item.action}
            className="w-full bg-card rounded-xl p-4 shadow-sm border border-border flex items-center gap-3"
          >
            <item.icon size={20} className="text-primary" />
            <span className="flex-1 text-sm font-medium text-foreground text-left">{item.label}</span>
            {item.toggle && (
              <div className={`w-10 h-6 rounded-full transition-colors flex items-center px-0.5 ${
                item.value ? "bg-primary" : "bg-muted"
              }`}>
                <div className={`w-5 h-5 rounded-full bg-card shadow transition-transform ${
                  item.value ? "translate-x-4" : "translate-x-0"
                }`} />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="px-5 mt-8 flex items-center justify-center gap-1 text-muted-foreground">
        <Info size={14} />
        <span className="text-xs">App Version v1.0.0</span>
      </div>
    </div>
  );
};

export default SettingsScreen;
