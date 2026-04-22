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
  // Malls
  { id: "m1", name: "Orion Mall", category: "malls", freeSlots: 8, address: "Rajajinagar, Bangalore", floors: 3, ratePerHour: 50, distance: 1.2 },
  { id: "m2", name: "Phoenix Marketcity", category: "malls", freeSlots: 12, address: "Whitefield, Bangalore", floors: 4, ratePerHour: 60, distance: 5.8 },
  { id: "m3", name: "Forum Mall", category: "malls", freeSlots: 5, address: "Koramangala, Bangalore", floors: 3, ratePerHour: 40, distance: 3.1 },
  { id: "m4", name: "Garuda Mall", category: "malls", freeSlots: 9, address: "Magrath Road, Bangalore", floors: 3, ratePerHour: 45, distance: 2.0 },
  { id: "m5", name: "UB City Mall", category: "malls", freeSlots: 6, address: "Vittal Mallya Road, Bangalore", floors: 3, ratePerHour: 80, distance: 1.6 },
  { id: "m6", name: "Gopalan Innovation Mall", category: "malls", freeSlots: 14, address: "Bannerghatta Road, Bangalore", floors: 3, ratePerHour: 35, distance: 6.2 },
  { id: "m7", name: "Esteem Mall", category: "malls", freeSlots: 11, address: "Hebbal, Bangalore", floors: 2, ratePerHour: 30, distance: 7.4 },
  { id: "m8", name: "VR Bengaluru", category: "malls", freeSlots: 16, address: "Whitefield, Bangalore", floors: 4, ratePerHour: 60, distance: 6.0 },

  // Hospitals
  { id: "h1", name: "Manipal Hospital", category: "hospitals", freeSlots: 15, address: "Old Airport Road, Bangalore", floors: 2, ratePerHour: 30, distance: 4.2 },
  { id: "h2", name: "Fortis Hospital", category: "hospitals", freeSlots: 10, address: "Bannerghatta Road, Bangalore", floors: 2, ratePerHour: 30, distance: 6.5 },
  { id: "h3", name: "Apollo Hospital", category: "hospitals", freeSlots: 7, address: "Jayanagar, Bangalore", floors: 2, ratePerHour: 25, distance: 2.8 },
  { id: "h4", name: "Narayana Health City", category: "hospitals", freeSlots: 22, address: "Bommasandra, Bangalore", floors: 3, ratePerHour: 25, distance: 12.1 },
  { id: "h5", name: "Sakra World Hospital", category: "hospitals", freeSlots: 13, address: "Marathahalli, Bangalore", floors: 2, ratePerHour: 30, distance: 7.8 },
  { id: "h6", name: "Columbia Asia Hospital", category: "hospitals", freeSlots: 9, address: "Hebbal, Bangalore", floors: 2, ratePerHour: 30, distance: 7.2 },
  { id: "h7", name: "Aster CMI Hospital", category: "hospitals", freeSlots: 11, address: "Hebbal, Bangalore", floors: 2, ratePerHour: 30, distance: 7.5 },
  { id: "h8", name: "St. John's Medical College Hospital", category: "hospitals", freeSlots: 8, address: "Koramangala, Bangalore", floors: 2, ratePerHour: 25, distance: 3.4 },

  // Hotels
  { id: "ht1", name: "Taj West End", category: "hotels", freeSlots: 18, address: "Race Course Road, Bangalore", floors: 3, ratePerHour: 100, distance: 1.9 },
  { id: "ht2", name: "The Oberoi", category: "hotels", freeSlots: 16, address: "MG Road, Bangalore", floors: 3, ratePerHour: 100, distance: 1.4 },
  { id: "ht3", name: "ITC Gardenia", category: "hotels", freeSlots: 14, address: "Residency Road, Bangalore", floors: 2, ratePerHour: 90, distance: 2.1 },
  { id: "ht4", name: "JW Marriott", category: "hotels", freeSlots: 20, address: "Vittal Mallya Road, Bangalore", floors: 3, ratePerHour: 95, distance: 1.7 },
  { id: "ht5", name: "The Leela Palace", category: "hotels", freeSlots: 17, address: "Old Airport Road, Bangalore", floors: 3, ratePerHour: 110, distance: 4.5 },
  { id: "ht6", name: "Radisson Blu", category: "hotels", freeSlots: 12, address: "Marathahalli, Bangalore", floors: 2, ratePerHour: 70, distance: 8.0 },
  { id: "ht7", name: "Sheraton Grand", category: "hotels", freeSlots: 15, address: "Whitefield, Bangalore", floors: 3, ratePerHour: 80, distance: 6.3 },
  { id: "ht8", name: "Holiday Inn", category: "hotels", freeSlots: 13, address: "Outer Ring Road, Bangalore", floors: 2, ratePerHour: 65, distance: 5.6 },

  // Restaurants
  { id: "r1", name: "Empire Restaurant", category: "restaurants", freeSlots: 6, address: "Multiple locations, Bangalore", floors: 1, ratePerHour: 30, distance: 2.4 },
  { id: "r2", name: "Meghana Foods", category: "restaurants", freeSlots: 5, address: "Multiple locations, Bangalore", floors: 1, ratePerHour: 30, distance: 2.9 },
  { id: "r3", name: "Truffles", category: "restaurants", freeSlots: 4, address: "Koramangala, Bangalore", floors: 1, ratePerHour: 35, distance: 3.2 },
  { id: "r4", name: "Toit Brewery", category: "restaurants", freeSlots: 7, address: "Indiranagar, Bangalore", floors: 1, ratePerHour: 40, distance: 3.8 },
  { id: "r5", name: "Vidyarthi Bhavan", category: "restaurants", freeSlots: 3, address: "Basavanagudi, Bangalore", floors: 1, ratePerHour: 20, distance: 4.6 },
  { id: "r6", name: "Nagarjuna Restaurant", category: "restaurants", freeSlots: 5, address: "Residency Road, Bangalore", floors: 1, ratePerHour: 30, distance: 1.8 },
  { id: "r7", name: "CTR (Central Tiffin Room)", category: "restaurants", freeSlots: 4, address: "Malleshwaram, Bangalore", floors: 1, ratePerHour: 20, distance: 4.1 },
  { id: "r8", name: "Absolute Barbecues", category: "restaurants", freeSlots: 8, address: "Whitefield, Bangalore", floors: 1, ratePerHour: 35, distance: 6.1 },

  // Public Parking
  { id: "p1", name: "UB City Parking", category: "parking", freeSlots: 28, address: "Vittal Mallya Road, Bangalore", floors: 3, ratePerHour: 40, distance: 1.6 },
  { id: "p2", name: "MG Road Metro Parking", category: "parking", freeSlots: 35, address: "MG Road, Bangalore", floors: 2, ratePerHour: 20, distance: 1.3 },
  { id: "p3", name: "Brigade Road Parking Area", category: "parking", freeSlots: 30, address: "Brigade Road, Bangalore", floors: 2, ratePerHour: 20, distance: 1.7 },
  { id: "p4", name: "Forum Mall Parking", category: "parking", freeSlots: 22, address: "Koramangala, Bangalore", floors: 3, ratePerHour: 30, distance: 3.1 },
  { id: "p5", name: "Orion Mall Parking", category: "parking", freeSlots: 26, address: "Rajajinagar, Bangalore", floors: 3, ratePerHour: 30, distance: 1.2 },
  { id: "p6", name: "Kempegowda Airport Parking", category: "parking", freeSlots: 120, address: "Devanahalli, Bangalore", floors: 4, ratePerHour: 50, distance: 32.0 },
  { id: "p7", name: "Cubbon Park Parking", category: "parking", freeSlots: 18, address: "Cubbon Park, Bangalore", floors: 1, ratePerHour: 15, distance: 2.0 },
  { id: "p8", name: "Indiranagar 100ft Road Parking", category: "parking", freeSlots: 24, address: "Indiranagar, Bangalore", floors: 1, ratePerHour: 25, distance: 3.7 },
];
