import { useState } from "react";
import { Plus, Search, MoreHorizontal, Edit, LogIn, Archive, Eye, Mail, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const owners = [
  { id: 1, name: "Jean Dupont", email: "jean.dupont@email.com", phone: "+33 6 12 34 56 78", properties: 2, revenue: 45600, commission: 15, status: "active" },
  { id: 2, name: "Marie Martin", email: "marie.martin@email.com", phone: "+33 6 98 76 54 32", properties: 1, revenue: 28900, commission: 12, status: "active" },
  { id: 3, name: "Pierre Bernard", email: "pierre.b@email.com", phone: "+33 6 55 44 33 22", properties: 3, revenue: 72300, commission: 10, status: "active" },
  { id: 4, name: "Sophie Leroy", email: "sophie.leroy@email.com", phone: "+33 6 11 22 33 44", properties: 1, revenue: 15200, commission: 15, status: "inactive" },
];

const ownerDetails = {
  1: {
    properties: [
      { name: "Le Marais Chic", address: "12 Rue de Rivoli, Paris", revenue: 28400 },
      { name: "Bastille Loft", address: "45 Rue de la Roquette, Paris", revenue: 17200 },
    ],
    documents: [
      { name: "Contrat de gestion 2024", date: "15 Jan 2024", type: "contract" },
      { name: "Attestation assurance", date: "10 Mar 2024", type: "insurance" },
    ],
    history: [
      { date: "15 Jan 2025", action: "Nouvelle réservation - Le Marais Chic", amount: "+450€" },
      { date: "12 Jan 2025", action: "Payout mensuel décembre", amount: "-3,200€" },
      { date: "08 Jan 2025", action: "Facture ménage", amount: "-85€" },
    ],
  }
};

export default function AdminOwners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState<typeof owners[0] | null>(null);
  const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);

  const filteredOwners = owners.filter(owner => 
    owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    owner.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetail = (owner: typeof owners[0]) => {
    setSelectedOwner(owner);
    setDetailDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Propriétaires</h1>
          <p className="text-muted-foreground">Gestion de votre base client</p>
        </div>
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-admin-primary hover:bg-admin-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter un Propriétaire
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Nouveau Propriétaire</DialogTitle>
              <DialogDescription>
                Ajoutez un nouveau propriétaire à votre portefeuille.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Jean Dupont" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jean@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="+33 6 12 34 56 78" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commission">Commission (%)</Label>
                <Input id="commission" type="number" placeholder="15" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button className="bg-admin-primary hover:bg-admin-primary/90" onClick={() => setAddDialogOpen(false)}>
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom ou email..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Owners Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead className="text-center">Biens</TableHead>
                <TableHead className="text-right">CA Généré (YTD)</TableHead>
                <TableHead className="text-center">Commission</TableHead>
                <TableHead className="text-center">Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOwners.map((owner, index) => (
                <TableRow 
                  key={owner.id} 
                  className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}
                >
                  <TableCell 
                    className="font-medium cursor-pointer hover:text-admin-primary transition-colors"
                    onClick={() => handleViewDetail(owner)}
                  >
                    {owner.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{owner.email}</TableCell>
                  <TableCell className="text-muted-foreground">{owner.phone}</TableCell>
                  <TableCell className="text-center">{owner.properties}</TableCell>
                  <TableCell className="text-right font-medium text-success">
                    {owner.revenue.toLocaleString()}€
                  </TableCell>
                  <TableCell className="text-center">{owner.commission}%</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={owner.status === "active" ? "default" : "secondary"} className={owner.status === "active" ? "bg-admin-success text-white" : ""}>
                      {owner.status === "active" ? "Actif" : "Inactif"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewDetail(owner)}>
                          <Eye className="h-4 w-4 mr-2" />
                          Voir la fiche
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <LogIn className="h-4 w-4 mr-2" />
                          Login as
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => {
                            setSelectedOwner(owner);
                            setArchiveDialogOpen(true);
                          }}
                        >
                          <Archive className="h-4 w-4 mr-2" />
                          Archiver
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Owner Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          {selectedOwner && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedOwner.name}</DialogTitle>
                <DialogDescription className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {selectedOwner.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {selectedOwner.phone}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="properties" className="mt-4">
                <TabsList>
                  <TabsTrigger value="properties">Propriétés</TabsTrigger>
                  <TabsTrigger value="history">Historique</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="properties" className="space-y-4 mt-4">
                  {ownerDetails[1].properties.map((prop, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-admin-primary/10 flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-admin-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{prop.name}</p>
                            <p className="text-sm text-muted-foreground">{prop.address}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-success">{prop.revenue.toLocaleString()}€</p>
                          <p className="text-xs text-muted-foreground">CA annuel</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="history" className="mt-4">
                  <div className="space-y-3">
                    {ownerDetails[1].history.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
                        <div>
                          <p className="text-sm font-medium">{item.action}</p>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                        <span className={`font-medium ${item.amount.startsWith('+') ? 'text-success' : 'text-muted-foreground'}`}>
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="mt-4">
                  <div className="space-y-3">
                    {ownerDetails[1].documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.date}</p>
                        </div>
                        <Button variant="outline" size="sm">Télécharger</Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Archive Confirmation Dialog */}
      <AlertDialog open={archiveDialogOpen} onOpenChange={setArchiveDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Archiver ce propriétaire ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action désactivera le compte de {selectedOwner?.name}. Les données seront conservées mais le propriétaire n'aura plus accès à son espace.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
              Archiver
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
