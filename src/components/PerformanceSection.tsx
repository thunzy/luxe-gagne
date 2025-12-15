import { TrendingUp, BarChart3, Target, Zap } from "lucide-react";

const PerformanceSection = () => {
  const stats = [
    { label: "Taux d'occupation", value: "92%", trend: "+12%" },
    { label: "Prix moyen/nuit", value: "185€", trend: "+25%" },
    { label: "Revenu mensuel", value: "4 250€", trend: "+30%" },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Revenue Management",
      description: "Algorithmes de tarification dynamique inspirés de l'hôtellerie de luxe.",
    },
    {
      icon: Target,
      title: "Optimisation continue",
      description: "Ajustement en temps réel selon la demande et les événements locaux.",
    },
    {
      icon: Zap,
      title: "Réactivité maximale",
      description: "Réponse aux demandes en moins de 15 minutes, 24h/24.",
    },
  ];

  return (
    <section id="approche" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Performance Financière
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Ne louez pas,{" "}
              <span className="text-gradient-gold">investissez.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre approche data-driven transforme votre bien en véritable actif financier. 
              Grâce au Revenue Management et à la tarification dynamique, nous maximisons 
              chaque nuit avec la précision d'un fonds d'investissement.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Widget */}
          <div className="relative">
            <div className="glass-card-elevated p-6 md:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Performance</h3>
                  <p className="text-sm text-muted-foreground">Décembre 2024</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">+30%</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="p-4 rounded-xl bg-secondary/50 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
                    <div className="text-xs font-medium text-accent">{stat.trend}</div>
                  </div>
                ))}
              </div>

              {/* Chart Visualization */}
              <div className="relative h-48 bg-secondary/30 rounded-xl p-4">
                <div className="absolute inset-4 flex items-end gap-2">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 92].map((height, index) => (
                    <div 
                      key={index}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all duration-500 hover:from-accent hover:to-accent/60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Juin</span>
                  <span>Déc</span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
