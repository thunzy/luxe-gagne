import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    id: 1,
    date: "15-18 Déc",
    guest: "Marie Laurent",
    platform: "Airbnb",
    amount: "420€",
    status: "confirmed",
  },
  {
    id: 2,
    date: "20-23 Déc",
    guest: "John Smith",
    platform: "Booking",
    amount: "510€",
    status: "confirmed",
  },
  {
    id: 3,
    date: "26-30 Déc",
    guest: "Sophie Müller",
    platform: "Airbnb",
    amount: "680€",
    status: "pending",
  },
  {
    id: 4,
    date: "1-4 Jan",
    guest: "Carlos Garcia",
    platform: "Direct",
    amount: "450€",
    status: "confirmed",
  },
];

const statusStyles = {
  confirmed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/20 text-warning border-warning/30",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const statusLabels = {
  confirmed: "Confirmé",
  pending: "En attente",
  cancelled: "Annulé",
};

const platformLogos: Record<string, string> = {
  Airbnb: "🏠",
  Booking: "🅱️",
  Direct: "📧",
};

export function OwnerBookingsTable() {
  return (
    <div className="bg-dashboard-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Dernières réservations
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                Date
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                Voyageur
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                Plateforme
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                Montant Net
              </th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={index % 2 === 1 ? "bg-muted/20" : ""}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {booking.date}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {booking.guest}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span>{platformLogos[booking.platform]}</span>
                    {booking.platform}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-success">
                  {booking.amount}
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={statusStyles[booking.status as keyof typeof statusStyles]}
                  >
                    {statusLabels[booking.status as keyof typeof statusLabels]}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
