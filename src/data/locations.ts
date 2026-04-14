export interface Location {
  id: string;
  name: string;
  category: string;
  freeSlots: number;
  address: string;
  floors: number;
  ratePerHour: number;
  distance: number;
}

export const categories = [
  { key: "malls", label: "Malls", iconName: "Store" as const },
  { key: "hospitals", label: "Hospitals", iconName: "Cross" as const },
  { key: "hotels", label: "Hotels", iconName: "Building2" as const },
  { key: "restaurants", label: "Restaurants", iconName: "UtensilsCrossed" as const },
  { key: "parking", label: "Public Parking", iconName: "ParkingSquare" as const },
];

export const locations: Location[] = [
  { id: "1", name: "Orion Mall", category: "malls", freeSlots: 8, address: "Rajajinagar, Bangalore", floors: 3, ratePerHour: 50, distance: 1.2 },
  { id: "2", name: "Phoenix Marketcity", category: "malls", freeSlots: 12, address: "Whitefield, Bangalore", floors: 4, ratePerHour: 60, distance: 5.8 },
  { id: "3", name: "Forum Mall", category: "malls", freeSlots: 5, address: "Koramangala, Bangalore", floors: 3, ratePerHour: 40, distance: 3.1 },
  { id: "4", name: "Manipal Hospital", category: "hospitals", freeSlots: 15, address: "Old Airport Road, Bangalore", floors: 2, ratePerHour: 30, distance: 4.2 },
  { id: "5", name: "Fortis Hospital", category: "hospitals", freeSlots: 10, address: "Bannerghatta Road, Bangalore", floors: 2, ratePerHour: 30, distance: 6.5 },
  { id: "6", name: "Apollo Hospital", category: "hospitals", freeSlots: 7, address: "Jayanagar, Bangalore", floors: 2, ratePerHour: 25, distance: 2.8 },
  { id: "7", name: "Taj Hotel", category: "hotels", freeSlots: 20, address: "MG Road, Bangalore", floors: 3, ratePerHour: 80, distance: 1.5 },
  { id: "8", name: "Marriott", category: "hotels", freeSlots: 18, address: "Whitefield, Bangalore", floors: 3, ratePerHour: 70, distance: 5.4 },
  { id: "9", name: "ITC Gardenia", category: "hotels", freeSlots: 14, address: "Residency Road, Bangalore", floors: 2, ratePerHour: 90, distance: 2.1 },
  { id: "10", name: "Hard Rock Cafe", category: "restaurants", freeSlots: 4, address: "St Marks Road, Bangalore", floors: 1, ratePerHour: 40, distance: 1.8 },
  { id: "11", name: "The Black Pearl", category: "restaurants", freeSlots: 6, address: "Indiranagar, Bangalore", floors: 1, ratePerHour: 35, distance: 3.6 },
  { id: "12", name: "MG Road Parking", category: "parking", freeSlots: 25, address: "MG Road, Bangalore", floors: 2, ratePerHour: 20, distance: 1.3 },
  { id: "13", name: "Brigade Road Parking", category: "parking", freeSlots: 30, address: "Brigade Road, Bangalore", floors: 2, ratePerHour: 20, distance: 1.7 },
];
