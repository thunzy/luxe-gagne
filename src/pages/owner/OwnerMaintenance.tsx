import { Wrench, Plus, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const maintenanceItems = [
  { id: 1, title: "Fuite robinet salle de bain", status: "resolved", date: "10/12/2024", priority: "medium" },
  { id: 2, title: "Remplacement ampoules salon", status: "in_progress", date: "12/12/2024", priority: "low" },
  { id: 3, title: "Vérification chauffage", status: "pending", date: "14/12/2024", priority: "high" },
];

const statusConfig = {
  resolved: { icon: CheckCircle, label: "Résolu", class: "bg-success/10 text-success" },
  in_progress: { icon: Clock, label: "En cours", class: "bg-warning/20 text-warning" },
  pending: { icon: AlertTriangle, label: "En attente", class: "bg-destructive/10 text-destructive" },
};

const priorityConfig = {
  low: { label: "Faible", class: "bg-muted text-muted-foreground" },
  medium: { label: "Moyen", class: "bg-warning/20 text-warning" },
  high: { label: "Urgent", class: "bg-destructive/10 text-destructive" },
};

export default function OwnerMaintenance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
            Maintenance
          </h1>
          <p className="text-muted-foreground mt-1">
            Suivez les interventions sur votre bien
          </p>
        </div>
        <Button className="btn-gold gap-2">
          <Plus className="h-4 w-4" />
          Signaler un problème
        </Button>
      </div>

      <div className="grid gap-4">
        {maintenanceItems.map((item) => {
          const status = statusConfig[item.status as keyof typeof statusConfig];
          const priority = priorityConfig[item.priority as keyof typeof priorityConfig];
          const StatusIcon = status.icon;

          return (
            <div
              key={item.id}
              className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-forest/10 rounded-lg">
                    <Wrench className="h-5 w-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Signalé le {item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={priority.class}>
                    {priority.label}
                  </Badge>
                  <Badge className={status.class}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {status.label}
                  </Badge>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
