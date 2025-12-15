import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";

const properties = [
  { id: 1, name: "Le Marais Chic" },
  { id: 2, name: "Bastille Loft" },
  { id: 3, name: "Saint-Germain Suite" },
  { id: 4, name: "Montmartre View" },
  { id: 5, name: "Opéra Classic" },
];

const reservations = [
  { id: 1, propertyId: 1, guest: "John Smith", start: addDays(new Date(), 1), end: addDays(new Date(), 4), source: "airbnb", status: "confirmed", amount: 540 },
  { id: 2, propertyId: 1, guest: "Emma Wilson", start: addDays(new Date(), 6), end: addDays(new Date(), 9), source: "booking", status: "confirmed", amount: 480 },
  { id: 3, propertyId: 2, guest: "Pierre Martin", start: addDays(new Date(), 2), end: addDays(new Date(), 5), source: "direct", status: "confirmed", amount: 360 },
  { id: 4, propertyId: 3, guest: "Marie Dupont", start: addDays(new Date(), 0), end: addDays(new Date(), 3), source: "airbnb", status: "pending", amount: 720 },
  { id: 5, propertyId: 4, guest: "Hans Mueller", start: addDays(new Date(), 4), end: addDays(new Date(), 7), source: "booking", status: "confirmed", amount: 560 },
  { id: 6, propertyId: 2, guest: "Blocked", start: addDays(new Date(), 8), end: addDays(new Date(), 10), source: "blocked", status: "blocked", amount: 0 },
];

const sourceColors: Record<string, string> = {
  airbnb: "bg-[#FF5A5F] text-white",
  booking: "bg-[#003580] text-white",
  direct: "bg-admin-primary text-white",
  blocked: "bg-muted text-muted-foreground",
};

const sourceLogos: Record<string, string> = {
  airbnb: "Airbnb",
  booking: "Booking",
  direct: "Direct",
  blocked: "Bloqué",
};

export default function AdminCalendar() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedReservation, setSelectedReservation] = useState<typeof reservations[0] | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const days = Array.from({ length: 14 }, (_, i) => addDays(currentWeek, i));

  const getReservationsForPropertyAndDay = (propertyId: number, day: Date) => {
    return reservations.filter(r => 
      r.propertyId === propertyId &&
      day >= r.start && day <= r.end
    );
  };

  const isReservationStart = (reservation: typeof reservations[0], day: Date) => {
    return isSameDay(reservation.start, day);
  };

  const isReservationEnd = (reservation: typeof reservations[0], day: Date) => {
    return isSameDay(reservation.end, day);
  };

  const getReservationSpan = (reservation: typeof reservations[0], startDay: Date) => {
    let span = 0;
    for (let i = 0; i < 14; i++) {
      const day = addDays(startDay, i);
      if (day >= reservation.start && day <= reservation.end) {
        span++;
      }
    }
    return span;
  };

  const handleReservationClick = (reservation: typeof reservations[0]) => {
    setSelectedReservation(reservation);
    setDetailDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Calendrier Unifié</h1>
          <p className="text-muted-foreground">Channel Manager - Vue multi-propriétés</p>
        </div>
        <Button className="bg-admin-primary hover:bg-admin-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Bloquer des dates
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(subWeeks(currentWeek, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentWeek(startOfWeek(new Date(), { weekStartsOn: 1 }))}>
            Aujourd'hui
          </Button>
        </div>
        <h2 className="text-lg font-medium">
          {format(currentWeek, "MMMM yyyy", { locale: fr })}
        </h2>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-[#FF5A5F]" />
          <span className="text-sm">Airbnb</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-[#003580]" />
          <span className="text-sm">Booking.com</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-admin-primary" />
          <span className="text-sm">Direct</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-muted" />
          <span className="text-sm">Bloqué</span>
        </div>
      </div>

      {/* Timeline Grid */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Header Row */}
            <div className="flex border-b bg-muted/50">
              <div className="w-48 flex-shrink-0 p-3 border-r font-medium text-sm">
                Propriétés
              </div>
              {days.map((day, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 min-w-[80px] p-2 text-center border-r last:border-r-0 ${
                    isSameDay(day, new Date()) ? "bg-admin-primary/10" : ""
                  }`}
                >
                  <div className="text-xs text-muted-foreground">
                    {format(day, "EEE", { locale: fr })}
                  </div>
                  <div className={`text-sm font-medium ${isSameDay(day, new Date()) ? "text-admin-primary" : ""}`}>
                    {format(day, "d")}
                  </div>
                </div>
              ))}
            </div>

            {/* Property Rows */}
            {properties.map((property) => (
              <div key={property.id} className="flex border-b last:border-b-0 hover:bg-muted/20">
                <div className="w-48 flex-shrink-0 p-3 border-r font-medium text-sm flex items-center">
                  {property.name}
                </div>
                <div className="flex-1 flex relative" style={{ minHeight: "56px" }}>
                  {days.map((day, dayIdx) => {
                    const dayReservations = getReservationsForPropertyAndDay(property.id, day);
                    
                    return (
                      <div 
                        key={dayIdx}
                        className={`flex-1 min-w-[80px] border-r last:border-r-0 relative ${
                          isSameDay(day, new Date()) ? "bg-admin-primary/5" : ""
                        }`}
                      >
                        {dayReservations.map((reservation) => {
                          if (!isReservationStart(reservation, day)) return null;
                          
                          const span = getReservationSpan(reservation, day);
                          
                          return (
                            <div
                              key={reservation.id}
                              className={`absolute top-2 left-1 h-10 rounded-md flex items-center px-2 cursor-pointer transition-opacity hover:opacity-90 ${sourceColors[reservation.source]}`}
                              style={{ 
                                width: `calc(${span * 100}% - 8px)`,
                                zIndex: 10 
                              }}
                              onClick={() => handleReservationClick(reservation)}
                            >
                              <span className="text-xs font-medium truncate">
                                {reservation.source === "blocked" ? "Bloqué" : reservation.guest}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reservation Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent>
          {selectedReservation && selectedReservation.source !== "blocked" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>Réservation</span>
                  <Badge className={sourceColors[selectedReservation.source]}>
                    {sourceLogos[selectedReservation.source]}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Voyageur</p>
                    <p className="font-medium">{selectedReservation.guest}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Propriété</p>
                    <p className="font-medium">
                      {properties.find(p => p.id === selectedReservation.propertyId)?.name}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Arrivée</p>
                    <p className="font-medium">{format(selectedReservation.start, "d MMMM yyyy", { locale: fr })}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Départ</p>
                    <p className="font-medium">{format(selectedReservation.end, "d MMMM yyyy", { locale: fr })}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Montant total</p>
                    <p className="font-medium text-lg text-success">{selectedReservation.amount}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Statut</p>
                    <Badge variant={selectedReservation.status === "confirmed" ? "default" : "secondary"} className={selectedReservation.status === "confirmed" ? "bg-admin-success" : ""}>
                      {selectedReservation.status === "confirmed" ? "Confirmé" : "En attente"}
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Notes de ménage</p>
                  <p className="text-sm">Aucune note particulière pour cette réservation.</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
