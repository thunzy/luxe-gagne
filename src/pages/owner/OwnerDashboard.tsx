import { OwnerKPIs } from "@/components/dashboard/owner/OwnerKPIs";
import { OwnerRevenueChart } from "@/components/dashboard/owner/OwnerRevenueChart";
import { OwnerBookingsTable } from "@/components/dashboard/owner/OwnerBookingsTable";

export default function OwnerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
          Bienvenue, Jean Dupont
        </h1>
        <p className="text-muted-foreground mt-1">
          Votre appartement <span className="font-medium text-forest">"Le Marais Chic"</span> performe bien.
        </p>
      </div>

      {/* KPIs */}
      <div className="animate-fade-in animation-delay-100">
        <OwnerKPIs />
      </div>

      {/* Chart */}
      <div className="animate-fade-in animation-delay-200">
        <OwnerRevenueChart />
      </div>

      {/* Bookings Table */}
      <div className="animate-fade-in animation-delay-300">
        <OwnerBookingsTable />
      </div>
    </div>
  );
}
