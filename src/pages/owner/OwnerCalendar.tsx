import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for booked dates (Guest reservations)
const guestBookedDates = [
  new Date(2024, 11, 15),
  new Date(2024, 11, 16),
  new Date(2024, 11, 17),
  new Date(2024, 11, 20),
  new Date(2024, 11, 21),
  new Date(2024, 11, 22),
  new Date(2024, 11, 26),
  new Date(2024, 11, 27),
  new Date(2024, 11, 28),
  new Date(2024, 11, 29),
];

// Owner blocked dates
const ownerBlockedDates = [
  new Date(2024, 11, 24),
  new Date(2024, 11, 25),
];

export default function OwnerCalendar() {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isGuestBooked = (date: Date) =>
    guestBookedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );

  const isOwnerBlocked = (date: Date) =>
    ownerBlockedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
            Calendrier
          </h1>
          <p className="text-muted-foreground mt-1">
            Visualisez vos réservations et bloquez des dates
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-gold gap-2">
              <Lock className="h-4 w-4" />
              Bloquer des dates pour moi
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-serif">Bloquer des dates</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Calendar
                mode="multiple"
                selected={selectedDates}
                onSelect={setSelectedDates}
                className="rounded-md border pointer-events-auto"
              />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Annuler
                </Button>
                <Button className="btn-gold" onClick={() => setDialogOpen(false)}>
                  Confirmer
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-success" />
          <span className="text-muted-foreground">Réservation Guest</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-muted-foreground" />
          <span className="text-muted-foreground">Blocage Propriétaire</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-dashboard-card border border-border" />
          <span className="text-muted-foreground">Disponible</span>
        </div>
      </div>

      {/* Full Page Calendar */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <Calendar
          mode="single"
          className="rounded-md pointer-events-auto w-full"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4 w-full",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-lg font-serif font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full",
            head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn(
              "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 w-full aspect-square",
              "[&:has([aria-selected])]:bg-accent"
            ),
            day: cn(
              "h-full w-full p-0 font-normal flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            ),
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          modifiers={{
            guestBooked: guestBookedDates,
            ownerBlocked: ownerBlockedDates,
          }}
          modifiersClassNames={{
            guestBooked: "!bg-success !text-primary-foreground hover:!bg-success/90",
            ownerBlocked: "!bg-muted-foreground !text-primary-foreground hover:!bg-muted-foreground/90",
          }}
        />
      </div>
    </div>
  );
}
