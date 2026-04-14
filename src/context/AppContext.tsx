import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  email: string;
  carPlate: string;
}

interface BookingDetails {
  locationName: string;
  address: string;
  floor: number;
  slotNumber: string;
  duration: number;
  fee: number;
}

interface AppContextType {
  user: UserProfile | null;
  setUser: (u: UserProfile | null) => void;
  booking: BookingDetails | null;
  setBooking: (b: BookingDetails | null) => void;
  selectedLocation: string | null;
  setSelectedLocation: (l: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser, booking, setBooking, selectedLocation, setSelectedLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
