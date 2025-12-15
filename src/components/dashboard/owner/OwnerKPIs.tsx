import { Euro, Percent, Calendar, TrendingUp } from "lucide-react";

const kpis = [
  {
    label: "Revenus ce mois",
    value: "3 450€",
    trend: "+12% vs n-1",
    trendPositive: true,
    icon: Euro,
    color: "text-success",
  },
  {
    label: "Taux d'occupation",
    value: "88%",
    progress: 88,
    icon: Percent,
    color: "text-forest",
  },
  {
    label: "Prochaine arrivée",
    value: "Demain",
    subValue: "John Doe",
    icon: Calendar,
    color: "text-accent",
  },
];

export function OwnerKPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                {kpi.label}
              </p>
              <p className={`text-3xl font-semibold mt-2 ${kpi.color}`}>
                {kpi.value}
              </p>
              {kpi.trend && (
                <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  {kpi.trend}
                </span>
              )}
              {kpi.subValue && (
                <p className="text-sm text-muted-foreground mt-1">{kpi.subValue}</p>
              )}
              {kpi.progress !== undefined && (
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-forest rounded-full transition-all duration-500"
                    style={{ width: `${kpi.progress}%` }}
                  />
                </div>
              )}
            </div>
            <div className={`p-3 rounded-lg bg-muted/50 ${kpi.color}`}>
              <kpi.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
