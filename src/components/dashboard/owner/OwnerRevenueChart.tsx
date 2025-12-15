import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 2800 },
  { month: "Fév", revenue: 3100 },
  { month: "Mar", revenue: 3400 },
  { month: "Avr", revenue: 2900 },
  { month: "Mai", revenue: 3200 },
  { month: "Jun", revenue: 4100 },
  { month: "Jul", revenue: 4800 },
  { month: "Aoû", revenue: 5200 },
  { month: "Sep", revenue: 3900 },
  { month: "Oct", revenue: 3500 },
  { month: "Nov", revenue: 3100 },
  { month: "Déc", revenue: 3450 },
];

export function OwnerRevenueChart() {
  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
        Revenus mensuels
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}€`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--dashboard-card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-soft)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
              formatter={(value: number) => [`${value.toLocaleString()}€`, "Revenus"]}
            />
            <Bar 
              dataKey="revenue" 
              fill="hsl(var(--forest))" 
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
