import { Store, Cross, Building2, UtensilsCrossed, ParkingSquare, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

const iconMap: Record<string, LucideIcon> = {
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
