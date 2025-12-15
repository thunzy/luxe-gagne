import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Owner Portal
import { OwnerLayout } from "./components/dashboard/owner/OwnerLayout";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import OwnerBookings from "./pages/owner/OwnerBookings";
import OwnerFinances from "./pages/owner/OwnerFinances";
import OwnerCalendar from "./pages/owner/OwnerCalendar";
import OwnerDocuments from "./pages/owner/OwnerDocuments";
import OwnerMaintenance from "./pages/owner/OwnerMaintenance";
import OwnerSettings from "./pages/owner/OwnerSettings";

// Admin Panel
import { AdminLayout } from "./components/dashboard/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOwners from "./pages/admin/AdminOwners";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminCalendar from "./pages/admin/AdminCalendar";
import AdminMaintenance from "./pages/admin/AdminMaintenance";
import AdminFinances from "./pages/admin/AdminFinances";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Owner Portal */}
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<OwnerDashboard />} />
            <Route path="bookings" element={<OwnerBookings />} />
            <Route path="finances" element={<OwnerFinances />} />
            <Route path="calendar" element={<OwnerCalendar />} />
            <Route path="documents" element={<OwnerDocuments />} />
            <Route path="maintenance" element={<OwnerMaintenance />} />
            <Route path="settings" element={<OwnerSettings />} />
          </Route>

          {/* Admin Panel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="owners" element={<AdminOwners />} />
            <Route path="owners/:id" element={<AdminOwners />} />
            <Route path="properties" element={<AdminProperties />} />
            <Route path="properties/:id" element={<AdminProperties />} />
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="maintenance" element={<AdminMaintenance />} />
            <Route path="maintenance/cleaning" element={<AdminMaintenance />} />
            <Route path="maintenance/technical" element={<AdminMaintenance />} />
            <Route path="finances" element={<AdminFinances />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
