import { useState } from "react";
import { Plus, Search, Upload, AlertTriangle, Clock, CheckCircle2, XCircle, MoreHorizontal, Camera, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tickets = [
  { id: 1, property: "Le Marais Chic", title: "Fuite robinet cuisine", type: "plumbing", priority: "high", status: "todo", assignee: "Plomberie Paris", createdAt: "15 Jan 2025", cost: null, notifyOwner: true, hasPhoto: true },
  { id: 2, property: "Bastille Loft", title: "Ampoule grillée salon", type: "electrical", priority: "low", status: "done", assignee: "Électricité Express", createdAt: "12 Jan 2025", cost: 45, notifyOwner: false, hasPhoto: false },
  { id: 3, property: "Saint-Germain Suite", title: "Serrure bloquée", type: "locksmith", priority: "high", status: "in_progress", assignee: "Serrurier 24h", createdAt: "14 Jan 2025", cost: null, notifyOwner: true, hasPhoto: true },
  { id: 4, property: "Montmartre View", title: "Climatisation HS", type: "hvac", priority: "medium", status: "todo", assignee: null, createdAt: "13 Jan 2025", cost: null, notifyOwner: false, hasPhoto: false },
  { id: 5, property: "Le Marais Chic", title: "Vitre fissurée", type: "glass", priority: "medium", status: "problem", assignee: "Vitrier Pro", createdAt: "10 Jan 2025", cost: 280, notifyOwner: true, hasPhoto: true },
];

const cleanings = [
  { id: 1, property: "Le Marais Chic", date: "16 Jan 2025", time: "11:00", cleaner: "Marie Ménage", status: "scheduled", checkout: "John Smith" },
  { id: 2, property: "Saint-Germain Suite", date: "16 Jan 2025", time: "14:00", cleaner: "Clean Express", status: "scheduled", checkout: "Marie Dupont" },
  { id: 3, property: "Bastille Loft", date: "17 Jan 2025", time: "10:00", cleaner: "Marie Ménage", status: "scheduled", checkout: "Pierre Martin" },
  { id: 4, property: "Montmartre View", date: "15 Jan 2025", time: "12:00", cleaner: "ProClean", status: "done", checkout: "Emma Wilson" },
];

const statusConfig = {
  todo: { label: "À faire", color: "bg-muted text-muted-foreground", icon: Clock },
  in_progress: { label: "En cours", color: "bg-admin-warning text-white", icon: Clock },
  done: { label: "Terminé", color: "bg-admin-success text-white", icon: CheckCircle2 },
  problem: { label: "Problème", color: "bg-admin-urgent text-white", icon: XCircle },
};

const priorityConfig = {
  high: { label: "Haute", color: "bg-admin-urgent/10 text-admin-urgent border-admin-urgent" },
  medium: { label: "Moyenne", color: "bg-admin-warning/10 text-admin-warning border-admin-warning" },
  low: { label: "Basse", color: "bg-muted text-muted-foreground" },
};

export default function AdminMaintenance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [notifyOwner, setNotifyOwner] = useState(false);
  const [photoDialogOpen, setPhotoDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Maintenance & Tâches</h1>
          <p className="text-muted-foreground">Gestion opérationnelle quotidienne</p>
        </div>
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-admin-primary hover:bg-admin-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Créer un Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Nouveau Ticket de Maintenance</DialogTitle>
              <DialogDescription>
                Signalez un incident ou une réparation nécessaire.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Propriété</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le bien..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Le Marais Chic</SelectItem>
                    <SelectItem value="2">Bastille Loft</SelectItem>
                    <SelectItem value="3">Saint-Germain Suite</SelectItem>
                    <SelectItem value="4">Montmartre View</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Type de problème</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plomberie / Fuite</SelectItem>
                    <SelectItem value="electrical">Électricité</SelectItem>
                    <SelectItem value="locksmith">Serrurerie</SelectItem>
                    <SelectItem value="hvac">Climatisation / Chauffage</SelectItem>
                    <SelectItem value="glass">Vitrerie</SelectItem>
                    <SelectItem value="appliance">Électroménager</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Titre / Description courte</Label>
                <Input placeholder="Ex: Fuite sous l'évier cuisine" />
              </div>

              <div className="space-y-2">
                <Label>Description détaillée</Label>
                <Textarea placeholder="Décrivez le problème en détail..." rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Priorité</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-admin-urgent" />
                        Haute - Urgent
                      </div>
                    </SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="low">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Assigner à</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un artisan..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Plomberie Paris</SelectItem>
                    <SelectItem value="2">Électricité Express</SelectItem>
                    <SelectItem value="3">Serrurier 24h</SelectItem>
                    <SelectItem value="4">ProClean</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Photos (preuve du dégât)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Glissez-déposez ou cliquez pour ajouter
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Parcourir
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Notifier le propriétaire par email ?</p>
                    <p className="text-sm text-muted-foreground">Il recevra un email avec les détails</p>
                  </div>
                </div>
                <Switch checked={notifyOwner} onCheckedChange={setNotifyOwner} />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Annuler
              </Button>
              <Button className="bg-admin-primary hover:bg-admin-primary/90" onClick={() => setCreateDialogOpen(false)}>
                Créer le ticket
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="maintenance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="maintenance">Maintenance technique</TabsTrigger>
          <TabsTrigger value="cleaning">Ménages</TabsTrigger>
        </TabsList>

        <TabsContent value="maintenance" className="space-y-4">
          {/* Search */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === "todo").length}</p>
                  <p className="text-xs text-muted-foreground">À faire</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-admin-warning/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-admin-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === "in_progress").length}</p>
                  <p className="text-xs text-muted-foreground">En cours</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-admin-success/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-admin-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === "done").length}</p>
                  <p className="text-xs text-muted-foreground">Terminés</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-admin-urgent/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-admin-urgent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{tickets.filter(t => t.status === "problem").length}</p>
                  <p className="text-xs text-muted-foreground">Problèmes</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tickets Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Ticket</TableHead>
                    <TableHead>Propriété</TableHead>
                    <TableHead>Priorité</TableHead>
                    <TableHead>Assigné à</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Coût</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket, index) => {
                    const StatusIcon = statusConfig[ticket.status as keyof typeof statusConfig].icon;
                    return (
                      <TableRow key={ticket.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{ticket.title}</span>
                            {ticket.hasPhoto && (
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => setPhotoDialogOpen(true)}
                              >
                                <Camera className="h-4 w-4 text-muted-foreground" />
                              </Button>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{ticket.createdAt}</p>
                        </TableCell>
                        <TableCell>{ticket.property}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={priorityConfig[ticket.priority as keyof typeof priorityConfig].color}>
                            {priorityConfig[ticket.priority as keyof typeof priorityConfig].label}
                          </Badge>
                        </TableCell>
                        <TableCell>{ticket.assignee || <span className="text-muted-foreground">Non assigné</span>}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Badge 
                                className={`cursor-pointer ${statusConfig[ticket.status as keyof typeof statusConfig].color}`}
                              >
                                <StatusIcon className="h-3 w-3 mr-1" />
                                {statusConfig[ticket.status as keyof typeof statusConfig].label}
                              </Badge>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>À faire</DropdownMenuItem>
                              <DropdownMenuItem>En cours</DropdownMenuItem>
                              <DropdownMenuItem>Terminé</DropdownMenuItem>
                              <DropdownMenuItem>Problème signalé</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                        <TableCell>
                          {ticket.cost ? `${ticket.cost}€` : "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Voir détails</DropdownMenuItem>
                              <DropdownMenuItem>Modifier</DropdownMenuItem>
                              <DropdownMenuItem>Ajouter photo</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cleaning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ménages planifiés</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Propriété</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Heure</TableHead>
                    <TableHead>Prestataire</TableHead>
                    <TableHead>Check-out de</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cleanings.map((cleaning, index) => (
                    <TableRow key={cleaning.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <TableCell className="font-medium">{cleaning.property}</TableCell>
                      <TableCell>{cleaning.date}</TableCell>
                      <TableCell>{cleaning.time}</TableCell>
                      <TableCell>{cleaning.cleaner}</TableCell>
                      <TableCell>{cleaning.checkout}</TableCell>
                      <TableCell>
                        <Badge className={cleaning.status === "done" ? "bg-admin-success" : "bg-info"}>
                          {cleaning.status === "done" ? "Effectué" : "Planifié"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Photo Dialog */}
      <Dialog open={photoDialogOpen} onOpenChange={setPhotoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Photo du dégât</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Photo de la fuite robinet</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
