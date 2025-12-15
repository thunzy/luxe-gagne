import { Euro, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const avgNightData = [
  { value: 120 },
  { value: 135 },
  { value: 128 },
  { value: 142 },
  { value: 138 },
  { value: 155 },
  { value: 148 },
];

export function OwnerKPIs() {
  const occupancyRate = 88;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {/* Net Payout */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">
              Net Payout
            </p>
            <p className="text-3xl font-semibold mt-2 text-success">
              3 450€
            </p>
            <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-warning/20 text-warning text-xs font-medium rounded-full">
              <ArrowUpRight className="h-3 w-3" />
              Virement en cours
            </span>
          </div>
          <div className="p-3 rounded-lg bg-success/10 text-success">
            <Euro className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Taux d'Occupation - Circular Gauge */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">
              Taux d'occupation
            </p>
            <p className="text-3xl font-semibold mt-2 text-forest">
              {occupancyRate}%
            </p>
          </div>
          <div className="relative w-14 h-14">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${(occupancyRate / 100) * 150.8} 150.8`}
                strokeLinecap="round"
                className="text-forest transition-all duration-500"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-forest">
              {occupancyRate}%
            </span>
          </div>
        </div>
      </div>

      {/* Prix Moyen Nuitée - Mini Line Chart */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">
              Prix Moyen Nuitée
            </p>
            <p className="text-3xl font-semibold mt-2 text-foreground">
              148€
            </p>
            <span className="inline-flex items-center gap-1 mt-2 text-success text-xs font-medium">
              <TrendingUp className="h-3 w-3" />
              +8% ce mois
            </span>
          </div>
          <div className="w-20 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={avgNightData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--forest))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Note Qualité - Stars */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">
              Note Qualité
            </p>
            <p className="text-3xl font-semibold mt-2 text-foreground">
              4.9<span className="text-lg text-muted-foreground">/5</span>
            </p>
            <div className="flex gap-0.5 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= 4
                      ? "text-accent fill-accent"
                      : "text-accent fill-accent/80"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-accent/10 text-accent">
            <Star className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
