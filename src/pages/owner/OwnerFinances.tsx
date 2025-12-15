import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "RES-2024-0156",
    date: "14/12/2024",
    source: "airbnb",
    voyageur: "Sophie Martin",
    brut: 450,
    commission: 67.5,
    menage: 45,
    net: 337.5,
    status: "paid",
  },
  {
    id: "RES-2024-0155",
    date: "10/12/2024",
    source: "booking",
    voyageur: "John Smith",
    brut: 680,
    commission: 102,
    menage: 45,
    net: 533,
    status: "paid",
  },
  {
    id: "RES-2024-0154",
    date: "05/12/2024",
    source: "airbnb",
    voyageur: "Marie Dubois",
    brut: 520,
    commission: 78,
    menage: 45,
    net: 397,
    status: "pending",
  },
  {
    id: "RES-2024-0153",
    date: "01/12/2024",
    source: "direct",
    voyageur: "Thomas Bernard",
    brut: 390,
    commission: 0,
    menage: 45,
    net: 345,
    status: "paid",
  },
  {
    id: "RES-2024-0152",
    date: "28/11/2024",
    source: "booking",
    voyageur: "Emma Wilson",
    brut: 720,
    commission: 108,
    menage: 45,
    net: 567,
    status: "paid",
  },
  {
    id: "RES-2024-0151",
    date: "22/11/2024",
    source: "airbnb",
    voyageur: "Lucas Petit",
    brut: 580,
    commission: 87,
    menage: 45,
    net: 448,
    status: "paid",
  },
];

const sourceConfig = {
  airbnb: { label: "Airbnb", class: "bg-[#FF5A5F]/10 text-[#FF5A5F]" },
  booking: { label: "Booking", class: "bg-[#003580]/10 text-[#003580]" },
  direct: { label: "Direct", class: "bg-forest/10 text-forest" },
};

const statusConfig = {
  paid: { label: "Payé", class: "bg-success/10 text-success" },
  pending: { label: "En attente", class: "bg-muted text-muted-foreground" },
};

export default function OwnerFinances() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
            Finances & Factures
          </h1>
          <p className="text-muted-foreground mt-1">
            Détail de vos revenus et transactions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exporter CSV
          </Button>
          <Button className="btn-gold gap-2">
            <FileText className="h-4 w-4" />
            Relevé Mensuel (PDF)
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Total Brut (Dec)</p>
          <p className="text-2xl font-semibold text-foreground mt-1">3 340€</p>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Commissions</p>
          <p className="text-2xl font-semibold text-destructive mt-1">-442€</p>
        </div>
        <div className="bg-dashboard-card rounded-xl p-5 shadow-soft border border-border/50">
          <p className="text-sm text-muted-foreground">Net Propriétaire</p>
          <p className="text-2xl font-semibold text-success mt-1">2 628€</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-dashboard-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">ID Résa</TableHead>
              <TableHead className="font-semibold">Source</TableHead>
              <TableHead className="font-semibold">Voyageur</TableHead>
              <TableHead className="font-semibold text-right">Brut</TableHead>
              <TableHead className="font-semibold text-right">Commission</TableHead>
              <TableHead className="font-semibold text-right">Ménage</TableHead>
              <TableHead className="font-semibold text-right">Net</TableHead>
              <TableHead className="font-semibold">Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, index) => {
              const source = sourceConfig[tx.source as keyof typeof sourceConfig];
              const status = statusConfig[tx.status as keyof typeof statusConfig];
              return (
                <TableRow
                  key={tx.id}
                  className={index % 2 === 0 ? "bg-background" : "bg-muted/10"}
                >
                  <TableCell className="font-medium">{tx.date}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      {tx.id}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={source.class}>
                      {source.label}
                    </Badge>
                  </TableCell>
                  <TableCell>{tx.voyageur}</TableCell>
                  <TableCell className="text-right">{tx.brut}€</TableCell>
                  <TableCell className="text-right text-destructive">
                    -{tx.commission}€
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    -{tx.menage}€
                  </TableCell>
                  <TableCell className="text-right font-semibold text-success">
                    {tx.net}€
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
