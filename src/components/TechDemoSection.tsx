import { Calendar, Euro, TrendingUp, Users, CheckCircle, Clock } from "lucide-react";

const TechDemoSection = () => {
  const kpis = [
    { label: "Revenus du mois", value: "4 250€", icon: Euro, trend: "+18%" },
    { label: "Taux d'occupation", value: "92%", icon: TrendingUp, trend: "+5%" },
    { label: "Réservations", value: "12", icon: Users, trend: null },
    { label: "Note moyenne", value: "4.9", icon: CheckCircle, trend: null },
  ];

  const recentBookings = [
    { guest: "Marie L.", dates: "15-18 Déc", amount: "540€", status: "Confirmée" },
    { guest: "Thomas B.", dates: "20-23 Déc", amount: "720€", status: "En cours" },
    { guest: "Sophie M.", dates: "27-31 Déc", amount: "960€", status: "Confirmée" },
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    booked: [1, 2, 3, 8, 9, 10, 15, 16, 17, 18, 20, 21, 22, 23, 27, 28, 29, 30, 31].includes(i + 1),
    blocked: [5, 6].includes(i + 1),
  }));

  return (
    <section id="technologie" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Portail Propriétaire
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Pilotez votre bien en{" "}
            <span className="text-gradient-gold">toute transparence.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Accédez à votre tableau de bord personnel et suivez en temps réel 
            la performance de votre investissement.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card-elevated p-2 md:p-3 rounded-3xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-secondary/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground text-center max-w-xs mx-auto">
                  app.conciergerie30.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-background rounded-2xl p-4 md:p-6 mt-2">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Bonjour, Marie</h3>
                  <p className="text-sm text-muted-foreground">Appartement Marais - Paris 4ème</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Dernière mise à jour: il y a 2 min
                </div>
              </div>

              {/* KPIs Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="bg-secondary/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <kpi.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-foreground">{kpi.value}</span>
                      {kpi.trend && (
                        <span className="text-xs font-medium text-accent mb-1">{kpi.trend}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="bg-secondary/20 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-4">Revenus mensuels</h4>
                  <div className="h-40 flex items-end gap-2">
                    {[2800, 3200, 3800, 3400, 4100, 3900, 4250].map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t hover:from-accent hover:to-accent/60 transition-colors duration-300"
                          style={{ height: `${(value / 4500) * 100}%` }}
                        />
                        <span className="text-[10px] text-muted-foreground">
                          {["Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <div className="bg-secondary/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Disponibilités - Décembre</h4>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded bg-accent" />
                        <span className="text-muted-foreground">Réservé</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded bg-muted" />
                        <span className="text-muted-foreground">Bloqué</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {["L", "M", "M", "J", "V", "S", "D"].map((day) => (
                      <div key={day} className="text-center text-xs text-muted-foreground py-1">
                        {day}
                      </div>
                    ))}
                    {/* Empty cells for first day offset (Dec 2024 starts on Sunday) */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {calendarDays.map((day) => (
                      <div
                        key={day.day}
                        className={`aspect-square rounded flex items-center justify-center text-xs font-medium transition-colors
                          ${day.booked ? "bg-accent text-accent-foreground" : ""}
                          ${day.blocked ? "bg-muted text-muted-foreground" : ""}
                          ${!day.booked && !day.blocked ? "bg-background hover:bg-secondary" : ""}
                        `}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="mt-6 bg-secondary/20 rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-4">Dernières réservations</h4>
                <div className="space-y-3">
                  {recentBookings.map((booking, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between bg-background rounded-lg p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{booking.guest}</div>
                          <div className="text-xs text-muted-foreground">{booking.dates}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{booking.amount}</div>
                        <div className={`text-xs ${booking.status === "Confirmée" ? "text-accent" : "text-muted-foreground"}`}>
                          {booking.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDemoSection;
