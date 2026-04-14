import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import SplashScreen from "./pages/SplashScreen";
import AuthScreen from "./pages/AuthScreen";
import HomeScreen from "./pages/HomeScreen";
import LocationDetail from "./pages/LocationDetail";
import BookingScreen from "./pages/BookingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import ConfirmedScreen from "./pages/ConfirmedScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="max-w-md mx-auto min-h-screen bg-background shadow-2xl relative">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/auth" element={<AuthScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/location/:id" element={<LocationDetail />} />
              <Route path="/booking" element={<BookingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/confirmed" element={<ConfirmedScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
