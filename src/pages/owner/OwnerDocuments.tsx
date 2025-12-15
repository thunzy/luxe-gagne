import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  { id: 1, name: "Relevé Novembre 2024", type: "Relevé", date: "01/12/2024", size: "245 KB" },
  { id: 2, name: "Relevé Octobre 2024", type: "Relevé", date: "01/11/2024", size: "238 KB" },
  { id: 3, name: "Contrat de gestion", type: "Contrat", date: "15/01/2024", size: "1.2 MB" },
  { id: 4, name: "Attestation d'assurance", type: "Assurance", date: "01/01/2024", size: "512 KB" },
];

export default function OwnerDocuments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
          Mes Documents
        </h1>
        <p className="text-muted-foreground mt-1">
          Retrouvez tous vos relevés et documents importants
        </p>
      </div>

      <div className="bg-dashboard-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                  Document
                </th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                  Type
                </th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                  Date
                </th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                  Taille
                </th>
                <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {documents.map((doc, index) => (
                <tr key={doc.id} className={index % 2 === 1 ? "bg-muted/20" : ""}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-forest/10 rounded-lg">
                        <FileText className="h-5 w-5 text-forest" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{doc.type}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{doc.date}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{doc.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
