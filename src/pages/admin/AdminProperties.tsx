import { useState } from "react";
import { Plus, Search, MoreHorizontal, Edit, Eye, EyeOff, Trash2, MapPin, Key, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const properties = [
  { 
    id: 1, 
    name: "Le Marais Chic", 
    address: "12 Rue de Rivoli, 75004 Paris",
    owner: "Jean Dupont",
    lockCode: "2847",
    status: "online",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    bedrooms: 2,
    basePrice: 150,
  },
  { 
    id: 2, 
    name: "Bastille Loft", 
    address: "45 Rue de la Roquette, 75011 Paris",
    owner: "Jean Dupont",
    lockCode: "9156",
    status: "online",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    bedrooms: 1,
    basePrice: 120,
  },
  { 
    id: 3, 
    name: "Saint-Germain Suite", 
    address: "8 Rue de Seine, 75006 Paris",
    owner: "Marie Martin",
    lockCode: "7234",
    status: "offline",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    bedrooms: 3,
    basePrice: 220,
  },
  { 
    id: 4, 
    name: "Montmartre View", 
    address: "28 Rue Lepic, 75018 Paris",
    owner: "Pierre Bernard",
    lockCode: "4521",
    status: "online",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    bedrooms: 2,
    basePrice: 180,
  },
];

export default function AdminProperties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [showLockCode, setShowLockCode] = useState<number | null>(null);

  const filteredProperties = properties.filter(prop => 
    prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Propriétés</h1>
          <p className="text-muted-foreground">Gestion de votre parc immobilier</p>
        </div>
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-admin-primary hover:bg-admin-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter un bien
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Nouvelle Propriété</DialogTitle>
              <DialogDescription>
                Ajoutez un nouveau bien à votre portefeuille.
              </DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="general" className="mt-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="pricing">Prix</TabsTrigger>
                <TabsTrigger value="checkin">Check-in</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propName">Nom du bien</Label>
                    <Input id="propName" placeholder="Le Marais Chic" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="owner">Propriétaire</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Jean Dupont</SelectItem>
                        <SelectItem value="2">Marie Martin</SelectItem>
                        <SelectItem value="3">Pierre Bernard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse complète</Label>
                  <Input id="address" placeholder="12 Rue de Rivoli, 75004 Paris" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Chambres</Label>
                    <Input id="bedrooms" type="number" placeholder="2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Salles de bain</Label>
                    <Input id="bathrooms" type="number" placeholder="1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacité max</Label>
                    <Input id="capacity" type="number" placeholder="4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lockCode">Code serrure connectée</Label>
                  <Input id="lockCode" placeholder="1234" />
                </div>
              </TabsContent>

              <TabsContent value="photos" className="space-y-4 mt-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Glissez-déposez vos photos ici ou cliquez pour parcourir
                  </p>
                  <Button variant="outline" className="mt-4">
                    Parcourir les fichiers
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="basePrice">Prix de base / nuit</Label>
                  <Input id="basePrice" type="number" placeholder="150" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weekendPrice">Prix week-end</Label>
                    <Input id="weekendPrice" type="number" placeholder="180" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cleaningFee">Frais de ménage</Label>
                    <Input id="cleaningFee" type="number" placeholder="80" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Yield Management automatique</p>
                    <p className="text-sm text-muted-foreground">Ajuster les prix selon la demande</p>
                  </div>
                  <Switch />
                </div>
              </TabsContent>

              <TabsContent value="checkin" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkinTime">Heure check-in</Label>
                    <Input id="checkinTime" type="time" defaultValue="15:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkoutTime">Heure check-out</Label>
                    <Input id="checkoutTime" type="time" defaultValue="11:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructions">Instructions d'arrivée</Label>
                  <Textarea 
                    id="instructions" 
                    rows={4}
                    placeholder="Code immeuble: 1234A. Prenez l'ascenseur jusqu'au 3ème étage..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wifi">WiFi</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input id="wifiName" placeholder="Nom du réseau" />
                    <Input id="wifiPass" placeholder="Mot de passe" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button className="bg-admin-primary hover:bg-admin-primary/90" onClick={() => setAddDialogOpen(false)}>
                Enregistrer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, adresse ou propriétaire..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <Badge 
                  className={property.status === "online" 
                    ? "bg-admin-success text-white" 
                    : "bg-muted text-muted-foreground"
                  }
                >
                  {property.status === "online" ? "En ligne" : "Hors ligne"}
                </Badge>
              </div>
              <div className="absolute top-3 left-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-white/90 hover:bg-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {property.status === "online" ? (
                        <>
                          <EyeOff className="h-4 w-4 mr-2" />
                          Mettre hors ligne
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          Mettre en ligne
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="h-3 w-3" />
                <span className="truncate">{property.address}</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-muted-foreground">Propriétaire:</span>
                <span className="font-medium">{property.owner}</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-muted-foreground">Prix base:</span>
                <span className="font-medium">{property.basePrice}€/nuit</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Key className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono">
                    {showLockCode === property.id ? property.lockCode : "••••"}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowLockCode(showLockCode === property.id ? null : property.id)}
                >
                  {showLockCode === property.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
