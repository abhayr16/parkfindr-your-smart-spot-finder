export interface Location {
  id: string;
  name: string;
  category: string;
  icon: string;
  freeSlots: number;
  address: string;
  floors: number;
  ratePerHour: number;
}

export const categories = [
  { key: "malls", label: "Malls", emoji: "🏬" },
  { key: "hospitals", label: "Hospitals", emoji: "🏥" },
  { key: "hotels", label: "Hotels", emoji: "🏨" },
  { key: "restaurants", label: "Restaurants", emoji: "🍽️" },
  { key: "parking", label: "Public Parking", emoji: "🅿️" },
];

export const locations: Location[] = [
  { id: "1", name: "Orion Mall", category: "malls", icon: "🏬", freeSlots: 8, address: "Rajajinagar, Bangalore", floors: 3, ratePerHour: 50 },
  { id: "2", name: "Phoenix Marketcity", category: "malls", icon: "🏬", freeSlots: 12, address: "Whitefield, Bangalore", floors: 4, ratePerHour: 60 },
  { id: "3", name: "Forum Mall", category: "malls", icon: "🏬", freeSlots: 5, address: "Koramangala, Bangalore", floors: 3, ratePerHour: 40 },
  { id: "4", name: "Manipal Hospital", category: "hospitals", icon: "🏥", freeSlots: 15, address: "Old Airport Road, Bangalore", floors: 2, ratePerHour: 30 },
  { id: "5", name: "Fortis Hospital", category: "hospitals", icon: "🏥", freeSlots: 10, address: "Bannerghatta Road, Bangalore", floors: 2, ratePerHour: 30 },
  { id: "6", name: "Apollo Hospital", category: "hospitals", icon: "🏥", freeSlots: 7, address: "Jayanagar, Bangalore", floors: 2, ratePerHour: 25 },
  { id: "7", name: "Taj Hotel", category: "hotels", icon: "🏨", freeSlots: 20, address: "MG Road, Bangalore", floors: 3, ratePerHour: 80 },
  { id: "8", name: "Marriott", category: "hotels", icon: "🏨", freeSlots: 18, address: "Whitefield, Bangalore", floors: 3, ratePerHour: 70 },
  { id: "9", name: "ITC Gardenia", category: "hotels", icon: "🏨", freeSlots: 14, address: "Residency Road, Bangalore", floors: 2, ratePerHour: 90 },
  { id: "10", name: "Hard Rock Cafe", category: "restaurants", icon: "🍽️", freeSlots: 4, address: "St Marks Road, Bangalore", floors: 1, ratePerHour: 40 },
  { id: "11", name: "The Black Pearl", category: "restaurants", icon: "🍽️", freeSlots: 6, address: "Indiranagar, Bangalore", floors: 1, ratePerHour: 35 },
  { id: "12", name: "MG Road Parking", category: "parking", icon: "🅿️", freeSlots: 25, address: "MG Road, Bangalore", floors: 2, ratePerHour: 20 },
  { id: "13", name: "Brigade Road Parking", category: "parking", icon: "🅿️", freeSlots: 30, address: "Brigade Road, Bangalore", floors: 2, ratePerHour: 20 },
];
