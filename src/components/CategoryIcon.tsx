import { Store, Cross, Building2, UtensilsCrossed, ParkingSquare } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  malls: Store,
  hospitals: Cross,
  hotels: Building2,
  restaurants: UtensilsCrossed,
  parking: ParkingSquare,
};

const CategoryIcon = ({ category, size = 20, className = "" }: { category: string; size?: number; className?: string }) => {
  const Icon = iconMap[category] || Store;
  return <Icon size={size} className={className} />;
};

export default CategoryIcon;
