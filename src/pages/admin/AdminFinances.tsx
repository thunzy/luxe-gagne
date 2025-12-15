import { useState } from "react";
import { Download, FileSpreadsheet, DollarSign, TrendingUp, Users, Calculator, Filter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const commissions = [
  { id: 1, owner: "Jean Dupont", property: "Le Marais Chic", period: "Janvier 2025", grossRevenue: 4200, commission: 630, cleaningFees: 320, netPayout: 3250, status: "pending" },
  { id: 2, owner: "Jean Dupont", property: "Bastille Loft", period: "Janvier 2025", grossRevenue: 2800, commission: 420, cleaningFees: 160, netPayout: 2220, status: "pending" },
  { id: 3, owner: "Marie Martin", property: "Saint-Germain Suite", period: "Janvier 2025", grossRevenue: 5600, commission: 672, cleaningFees: 400, netPayout: 4528, status: "pending" },
  { id: 4, owner: "Pierre Bernard", property: "Montmartre View", period: "Janvier 2025", grossRevenue: 3400, commission: 340, cleaningFees: 240, netPayout: 2820, status: "paid" },
  { id: 5, owner: "Sophie Leroy", property: "Opéra Classic", period: "Janvier 2025", grossRevenue: 2100, commission: 315, cleaningFees: 160, netPayout: 1625, status: "pending" },
  { id: 6, owner: "Jean Dupont", property: "Le Marais Chic", period: "Décembre 2024", grossRevenue: 3800, commission: 570, cleaningFees: 280, netPayout: 2950, status: "paid" },
  { id: 7, owner: "Marie Martin", property: "Saint-Germain Suite", period: "Décembre 2024", grossRevenue: 4900, commission: 588, cleaningFees: 360, netPayout: 3952, status: "paid" },
];

const payoutSummary = [
  { owner: "Jean Dupont", properties: 2, totalGross: 7000, totalCommission: 1050, totalCleaning: 480, totalNet: 5470 },
  { owner: "Marie Martin", properties: 1, totalGross: 5600, totalCommission: 672, totalCleaning: 400, totalNet: 4528 },
  { owner: "Sophie Leroy", properties: 1, totalGross: 2100, totalCommission: 315, totalCleaning: 160, totalNet: 1625 },
];

export default function AdminFinances() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [payoutDialogOpen, setPayoutDialogOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("janvier-2025");

  const pendingCommissions = commissions.filter(c => c.status === "pending");
  const totalPendingPayout = pendingCommissions.reduce((sum, c) => sum + c.netPayout, 0);
  const totalCommissionEarned = commissions.reduce((sum, c) => sum + c.commission, 0);

  const toggleSelectAll = () => {
    if (selectedItems.length === pendingCommissions.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(pendingCommissions.map(c => c.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Finances</h1>
          <p className="text-muted-foreground">Gestion des commissions et reversements</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-admin-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-admin-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Commissions (mois)</p>
                <p className="text-2xl font-bold text-admin-primary">
                  {commissions.filter(c => c.period === "Janvier 2025").reduce((s, c) => s + c.commission, 0).toLocaleString()}€
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-admin-warning/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-admin-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payouts en attente</p>
                <p className="text-2xl font-bold text-admin-warning">{totalPendingPayout.toLocaleString()}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-admin-success/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-admin-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payouts effectués</p>
                <p className="text-2xl font-bold text-admin-success">
                  {commissions.filter(c => c.status === "paid").reduce((s, c) => s + c.netPayout, 0).toLocaleString()}€
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Propriétaires actifs</p>
                <p className="text-2xl font-bold">{payoutSummary.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payout Generator */}
      <Card className="border-admin-primary/20 bg-admin-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-admin-primary" />
                Générateur de Reversements
              </CardTitle>
              <CardDescription>
                Calculez et générez automatiquement les payouts pour tous les propriétaires
              </CardDescription>
            </div>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="janvier-2025">Janvier 2025</SelectItem>
                <SelectItem value="decembre-2024">Décembre 2024</SelectItem>
                <SelectItem value="novembre-2024">Novembre 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {payoutSummary.map((summary, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{summary.owner}</span>
                  <Badge variant="outline">{summary.properties} bien(s)</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CA Brut:</span>
                    <span>{summary.totalGross.toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">- Commission:</span>
                    <span className="text-admin-primary">-{summary.totalCommission.toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">- Frais ménage:</span>
                    <span>-{summary.totalCleaning.toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-medium">
                    <span>Net à reverser:</span>
                    <span className="text-admin-success">{summary.totalNet.toLocaleString()}€</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Dialog open={payoutDialogOpen} onOpenChange={setPayoutDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-admin-primary hover:bg-admin-primary/90">
                <DollarSign className="h-4 w-4 mr-2" />
                Générer les payouts du mois ({payoutSummary.reduce((s, p) => s + p.totalNet, 0).toLocaleString()}€)
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmer la génération des payouts</DialogTitle>
                <DialogDescription>
                  Vous êtes sur le point de générer {payoutSummary.length} ordres de virement pour un total de {payoutSummary.reduce((s, p) => s + p.totalNet, 0).toLocaleString()}€.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-3">
                {payoutSummary.map((summary, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>{summary.owner}</span>
                    <span className="font-medium">{summary.totalNet.toLocaleString()}€</span>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setPayoutDialogOpen(false)}>
                  Annuler
                </Button>
                <Button className="bg-admin-primary hover:bg-admin-primary/90" onClick={() => setPayoutDialogOpen(false)}>
                  Confirmer et générer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Commissions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Détail des commissions</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12">
                  <Checkbox 
                    checked={selectedItems.length === pendingCommissions.length && pendingCommissions.length > 0}
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Propriétaire</TableHead>
                <TableHead>Propriété</TableHead>
                <TableHead>Période</TableHead>
                <TableHead className="text-right">CA Brut</TableHead>
                <TableHead className="text-right">Commission</TableHead>
                <TableHead className="text-right">Frais Ménage</TableHead>
                <TableHead className="text-right">Net Propriétaire</TableHead>
                <TableHead className="text-center">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commissions.map((commission, index) => (
                <TableRow key={commission.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                  <TableCell>
                    {commission.status === "pending" && (
                      <Checkbox 
                        checked={selectedItems.includes(commission.id)}
                        onCheckedChange={() => toggleSelectItem(commission.id)}
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{commission.owner}</TableCell>
                  <TableCell>{commission.property}</TableCell>
                  <TableCell>{commission.period}</TableCell>
                  <TableCell className="text-right">{commission.grossRevenue.toLocaleString()}€</TableCell>
                  <TableCell className="text-right text-admin-primary font-medium">
                    {commission.commission.toLocaleString()}€
                  </TableCell>
                  <TableCell className="text-right">{commission.cleaningFees.toLocaleString()}€</TableCell>
                  <TableCell className="text-right font-medium text-success">
                    {commission.netPayout.toLocaleString()}€
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={commission.status === "paid" ? "bg-admin-success" : "bg-muted text-muted-foreground"}>
                      {commission.status === "paid" ? "Payé" : "En attente"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
