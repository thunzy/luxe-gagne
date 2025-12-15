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
import AdminTasks from "./pages/admin/AdminTasks";

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
            <Route path="tasks" element={<AdminTasks />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
