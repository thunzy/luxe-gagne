import { LogIn, LogOut, Brush, AlertTriangle, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const checkIns = [{ guest: "Marie Laurent", property: "Le Marais Chic", time: "14:00" }, { guest: "John Smith", property: "Bastille Studio", time: "15:00" }];
const checkOuts = [{ guest: "Sophie Müller", property: "Montmartre Loft", time: "11:00" }];
const cleanings = [{ property: "Montmartre Loft", time: "11:30", cleaner: "Marie C.", status: "pending" }, { property: "Le Marais Chic", time: "13:00", cleaner: "Paul D.", status: "confirmed" }];
const channelData = [
  { property: "Le Marais Chic", days: ["booked", "booked", "free", "free", "booked"] },
  { property: "Bastille Studio", days: ["free", "booked", "booked", "booked", "free"] },
  { property: "Montmartre Loft", days: ["booked", "free", "free", "booked", "booked"] },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">Vue d'ensemble</h1>
        <p className="text-muted-foreground mt-1">Opérations du {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Check-ins */}
        <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-success/10 rounded-lg"><LogIn className="h-5 w-5 text-success" /></div>
            <h3 className="font-semibold text-foreground">Check-ins ({checkIns.length})</h3>
          </div>
          <div className="space-y-3">
            {checkIns.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div><p className="font-medium text-sm">{item.guest}</p><p className="text-xs text-muted-foreground">{item.property}</p></div>
                <Badge variant="outline">{item.time}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Check-outs */}
        <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-warning/20 rounded-lg"><LogOut className="h-5 w-5 text-warning" /></div>
            <h3 className="font-semibold text-foreground">Check-outs ({checkOuts.length})</h3>
          </div>
          <div className="space-y-3">
            {checkOuts.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div><p className="font-medium text-sm">{item.guest}</p><p className="text-xs text-muted-foreground">{item.property}</p></div>
                <Badge variant="outline">{item.time}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanings */}
        <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-info/10 rounded-lg"><Brush className="h-5 w-5 text-info" /></div>
            <h3 className="font-semibold text-foreground">Ménages ({cleanings.length})</h3>
          </div>
          <div className="space-y-3">
            {cleanings.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div><p className="font-medium text-sm">{item.property}</p><p className="text-xs text-muted-foreground">{item.cleaner} • {item.time}</p></div>
                <Badge className={item.status === "confirmed" ? "bg-success/10 text-success" : "bg-warning/20 text-warning"}>{item.status === "confirmed" ? "Confirmé" : "En attente"}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Manager */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <Building className="h-5 w-5 text-forest" />
          <h3 className="font-serif text-lg font-semibold">Channel Manager - 5 prochains jours</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-muted-foreground uppercase">
                <th className="text-left pb-3">Propriété</th>
                {[0, 1, 2, 3, 4].map(i => <th key={i} className="text-center pb-3">{new Date(Date.now() + i * 86400000).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric" })}</th>)}
              </tr>
            </thead>
            <tbody>
              {channelData.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 font-medium text-sm">{row.property}</td>
                  {row.days.map((day, j) => (
                    <td key={j} className="text-center py-3">
                      <div className={`mx-auto w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${day === "booked" ? "bg-success text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        {day === "booked" ? "✓" : "–"}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
