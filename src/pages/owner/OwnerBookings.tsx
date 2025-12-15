import { CalendarCheck, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bookings = [
  {
    id: "RES-2024-0156",
    checkIn: "15/12/2024",
    checkOut: "18/12/2024",
    nights: 3,
    voyageur: "Sophie Martin",
    guests: 2,
    source: "airbnb",
    montant: 450,
    status: "confirmed",
  },
  {
    id: "RES-2024-0155",
    checkIn: "20/12/2024",
    checkOut: "24/12/2024",
    nights: 4,
    voyageur: "John Smith",
    guests: 4,
    source: "booking",
    montant: 680,
    status: "confirmed",
  },
  {
    id: "RES-2024-0154",
    checkIn: "26/12/2024",
    checkOut: "30/12/2024",
    nights: 4,
    voyageur: "Marie Dubois",
    guests: 2,
    source: "airbnb",
    montant: 520,
    status: "pending",
  },
  {
    id: "RES-2024-0153",
    checkIn: "01/01/2025",
    checkOut: "05/01/2025",
    nights: 4,
    voyageur: "Thomas Bernard",
    guests: 3,
    source: "direct",
    montant: 620,
    status: "confirmed",
  },
];

const sourceConfig = {
  airbnb: { label: "Airbnb", class: "bg-[#FF5A5F]/10 text-[#FF5A5F]" },
  booking: { label: "Booking", class: "bg-[#003580]/10 text-[#003580]" },
  direct: { label: "Direct", class: "bg-forest/10 text-forest" },
};

const statusConfig = {
  confirmed: { label: "Confirmé", class: "bg-success/10 text-success" },
  pending: { label: "En attente", class: "bg-warning/20 text-warning" },
  cancelled: { label: "Annulé", class: "bg-destructive/10 text-destructive" },
};

export default function OwnerBookings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
          Mes Réservations
        </h1>
        <p className="text-muted-foreground mt-1">
          Historique et prochaines réservations de votre bien
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-success/10">
              <CalendarCheck className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ce mois</p>
              <p className="text-2xl font-semibold text-foreground">8 réservations</p>
            </div>
          </div>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-forest/10">
              <CalendarCheck className="h-5 w-5 text-forest" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nuits louées</p>
              <p className="text-2xl font-semibold text-foreground">24 nuits</p>
            </div>
          </div>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-accent/10">
              <CalendarCheck className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Prochaine arrivée</p>
              <p className="text-2xl font-semibold text-foreground">Demain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-dashboard-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="font-semibold">Check-in</TableHead>
              <TableHead className="font-semibold">Check-out</TableHead>
              <TableHead className="font-semibold">Nuits</TableHead>
              <TableHead className="font-semibold">Voyageur</TableHead>
              <TableHead className="font-semibold">Guests</TableHead>
              <TableHead className="font-semibold">Source</TableHead>
              <TableHead className="font-semibold text-right">Montant</TableHead>
              <TableHead className="font-semibold">Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => {
              const source = sourceConfig[booking.source as keyof typeof sourceConfig];
              const status = statusConfig[booking.status as keyof typeof statusConfig];
              return (
                <TableRow
                  key={booking.id}
                  className={index % 2 === 0 ? "bg-background" : "bg-muted/10"}
                >
                  <TableCell className="font-medium">{booking.checkIn}</TableCell>
                  <TableCell>{booking.checkOut}</TableCell>
                  <TableCell>{booking.nights}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1">
                      {booking.voyageur}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </span>
                  </TableCell>
                  <TableCell>{booking.guests}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={source.class}>
                      {source.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {booking.montant}€
                  </TableCell>
                  <TableCell>
                    <Badge className={status.class}>{status.label}</Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
