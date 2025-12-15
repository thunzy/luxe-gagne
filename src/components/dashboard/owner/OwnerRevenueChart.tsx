import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenus: 2800, charges: 420 },
  { month: "Fév", revenus: 3200, charges: 480 },
  { month: "Mar", revenus: 3100, charges: 465 },
  { month: "Avr", revenus: 3500, charges: 525 },
  { month: "Mai", revenus: 3800, charges: 570 },
  { month: "Juin", revenus: 4200, charges: 630 },
  { month: "Juil", revenus: 4800, charges: 720 },
  { month: "Août", revenus: 5100, charges: 765 },
  { month: "Sep", revenus: 4000, charges: 600 },
  { month: "Oct", revenus: 3600, charges: 540 },
  { month: "Nov", revenus: 3200, charges: 480 },
  { month: "Déc", revenus: 3450, charges: 518 },
];

export function OwnerRevenueChart() {
  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50 h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Revenus vs Charges
        </h3>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-forest" />
            <span className="text-sm text-muted-foreground">Revenus</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="text-sm text-muted-foreground">Charges</span>
          </div>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}€`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--dashboard-card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: number, name: string) => [
                `${value}€`,
                name === "revenus" ? "Revenus" : "Charges",
              ]}
            />
            <Bar dataKey="revenus" stackId="a" fill="hsl(var(--forest))" radius={[0, 0, 0, 0]} />
            <Bar dataKey="charges" stackId="a" fill="hsl(var(--destructive) / 0.6)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
