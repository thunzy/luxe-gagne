import { CalendarCheck, Sparkles, FileText, MessageSquare, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "booking",
    icon: CalendarCheck,
    title: "Nouvelle réservation via Booking",
    description: "Sophie Martin - 3 nuits",
    time: "Il y a 2 heures",
    color: "text-success bg-success/10",
  },
  {
    id: 2,
    type: "cleaning",
    icon: Sparkles,
    title: "Ménage effectué",
    description: "Appartement prêt pour le prochain guest",
    time: "Il y a 5 heures",
    color: "text-info bg-info/10",
  },
  {
    id: 3,
    type: "invoice",
    icon: FileText,
    title: "Facture Janvier disponible",
    description: "Relevé mensuel prêt à télécharger",
    time: "Hier",
    color: "text-accent bg-accent/10",
  },
  {
    id: 4,
    type: "message",
    icon: MessageSquare,
    title: "Message du conciergerie",
    description: "Confirmation de la maintenance prévue",
    time: "Il y a 2 jours",
    color: "text-forest bg-forest/10",
  },
];

export function OwnerActivityFeed() {
  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
        Dernières Activités
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors"
          >
            <div className={cn("p-2 rounded-lg", activity.color)}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {activity.description}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
              <Clock className="h-3 w-3" />
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
