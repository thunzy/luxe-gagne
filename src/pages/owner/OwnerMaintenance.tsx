import { useState } from "react";
import { Wrench, Plus, AlertTriangle, CheckCircle, Clock, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const maintenanceItems = [
  {
    id: 1,
    title: "Réparation Fuite Robinet",
    description: "Fuite détectée au niveau du robinet de la salle de bain principale",
    status: "resolved",
    date: "10/12/2024",
    cost: 85,
    photos: [
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Remplacement Ampoules Salon",
    description: "Changement des 4 ampoules LED du plafonnier principal",
    status: "in_progress",
    date: "12/12/2024",
    cost: 45,
    photos: [],
  },
  {
    id: 3,
    title: "Vérification Chauffage",
    description: "Contrôle annuel du système de chauffage avant l'hiver",
    status: "pending",
    date: "14/12/2024",
    cost: null,
    photos: [],
  },
  {
    id: 4,
    title: "Nettoyage VMC",
    description: "Nettoyage et entretien des bouches de ventilation",
    status: "resolved",
    date: "01/12/2024",
    cost: 120,
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    ],
  },
];

const statusConfig = {
  resolved: { icon: CheckCircle, label: "Résolu", class: "bg-success/10 text-success" },
  in_progress: { icon: Clock, label: "En cours", class: "bg-warning/20 text-warning" },
  pending: { icon: AlertTriangle, label: "En attente", class: "bg-destructive/10 text-destructive" },
};

export default function OwnerMaintenance() {
  const [selectedPhotos, setSelectedPhotos] = useState<string[] | null>(null);

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

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Tickets ce mois</p>
          <p className="text-2xl font-semibold text-foreground mt-1">4</p>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Résolus</p>
          <p className="text-2xl font-semibold text-success mt-1">2</p>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Coût total</p>
          <p className="text-2xl font-semibold text-foreground mt-1">250€</p>
        </div>
      </div>

      {/* Maintenance List */}
      <div className="grid gap-4">
        {maintenanceItems.map((item) => {
          const status = statusConfig[item.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <div
              key={item.id}
              className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-forest/10 rounded-lg">
                    <Wrench className="h-5 w-5 text-forest" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="text-xs text-muted-foreground">
                        Signalé le {item.date}
                      </span>
                      {item.cost !== null && (
                        <span className="text-xs font-medium text-foreground">
                          Coût: {item.cost}€
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {item.photos.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => setSelectedPhotos(item.photos)}
                    >
                      <Image className="h-4 w-4" />
                      {item.photos.length} photo{item.photos.length > 1 ? "s" : ""}
                    </Button>
                  )}
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

      {/* Photo Gallery Modal */}
      <Dialog open={!!selectedPhotos} onOpenChange={() => setSelectedPhotos(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif">Photos de l'intervention</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {selectedPhotos?.map((photo, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt={`Photo intervention ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
