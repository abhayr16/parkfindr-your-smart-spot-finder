import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { ArrowLeft, Mail, Phone, Headphones } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const issueTypes = ["Booking Issue", "Payment Issue", "App Bug", "Other"];

const ContactSupportScreen = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [issueType, setIssueType] = useState(issueTypes[0]);
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    toast({ title: "Request Submitted", description: "We'll get back to you shortly." });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <button onClick={() => navigate(-1)} className="text-primary-foreground mb-3">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-xl font-bold text-primary-foreground">Contact Support</h1>
      </div>

      <div className="px-5 pt-5 space-y-4">
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border text-center">
          <Headphones size={28} className="text-primary mx-auto mb-2" />
          <p className="text-sm text-foreground font-medium">We're here to help!</p>
          <p className="text-xs text-muted-foreground">Reach out to us for any issues.</p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Name</label>
            <input
              value={user?.name || ""}
              readOnly
              className="w-full h-11 rounded-xl bg-muted px-4 text-sm text-foreground outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label>
            <input
              value={user?.email || ""}
              readOnly
              className="w-full h-11 rounded-xl bg-muted px-4 text-sm text-foreground outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Issue Type</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full h-11 rounded-xl bg-muted px-4 text-sm text-foreground outline-none border-none"
            >
              {issueTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Describe your issue...</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground outline-none resize-none"
              placeholder="Tell us what happened..."
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg transition-all active:scale-[0.98]"
        >
          Submit Request
        </button>

        {/* Direct contact */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-3">
          <p className="text-sm font-semibold text-foreground">Direct Contact</p>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-primary" />
            <span className="text-sm text-foreground">support@parkfindr.com</span>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-lg">
            <Phone size={16} /> Call Us: +91 80 1234 5678
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportScreen;
