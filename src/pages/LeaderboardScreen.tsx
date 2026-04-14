import { useState } from "react";
import { Trophy, Medal } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const leaderboardData = [
  { rank: 1, name: "Arjun Mehta", visits: 87, amount: 4350 },
  { rank: 2, name: "Priya Sharma", visits: 72, amount: 3600 },
  { rank: 3, name: "Rahul Iyer", visits: 65, amount: 3250 },
  { rank: 4, name: "Sneha Reddy", visits: 58, amount: 2900 },
  { rank: 5, name: "Karthik Nair", visits: 50, amount: 2500 },
  { rank: 6, name: "Ananya Das", visits: 44, amount: 2200 },
  { rank: 7, name: "You", visits: 24, amount: 1200 },
  { rank: 8, name: "Vikram Singh", visits: 20, amount: 1000 },
  { rank: 9, name: "Meera Joshi", visits: 18, amount: 900 },
  { rank: 10, name: "Rohan Gupta", visits: 15, amount: 750 },
];

const medalColors: Record<number, string> = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-amber-600",
};

const LeaderboardScreen = () => {
  const [period, setPeriod] = useState<"month" | "alltime">("alltime");

  const top3 = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-hero pt-12 pb-6 px-5 rounded-b-[1.5rem]">
        <h1 className="text-xl font-bold text-primary-foreground flex items-center gap-2">
          <Trophy size={22} /> Top ParkFindr Users
        </h1>
      </div>

      {/* Toggle */}
      <div className="px-5 pt-4">
        <div className="flex bg-muted rounded-lg p-1 mb-4">
          {(["month", "alltime"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setPeriod(t)}
              className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition-all ${
                period === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {t === "month" ? "This Month" : "All Time"}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 */}
      <div className="px-5 space-y-2 mb-4">
        {top3.map((u) => (
          <div key={u.rank} className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center gap-3">
            <Medal size={24} className={medalColors[u.rank]} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{u.name}</p>
              <p className="text-xs text-muted-foreground">{u.visits} visits | ₹{u.amount.toLocaleString()}</p>
            </div>
            <span className="text-lg font-extrabold text-foreground">#{u.rank}</span>
          </div>
        ))}
      </div>

      {/* Rest */}
      <div className="px-5 space-y-2">
        {rest.map((u) => {
          const isCurrentUser = u.name === "You";
          return (
            <div
              key={u.rank}
              className={`rounded-xl p-3.5 flex items-center gap-3 border ${
                isCurrentUser
                  ? "bg-primary/10 border-primary/30"
                  : "bg-card border-border"
              }`}
            >
              <span className="w-7 text-center text-sm font-bold text-muted-foreground">
                {u.rank}
              </span>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${isCurrentUser ? "text-primary" : "text-foreground"}`}>
                  {u.name}
                </p>
                <p className="text-xs text-muted-foreground">{u.visits} visits | ₹{u.amount.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default LeaderboardScreen;
