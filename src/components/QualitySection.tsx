import { Sparkles, Leaf, Shield, Clock } from "lucide-react";

const QualitySection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Ménage hôtelier",
      description: "Standards 5 étoiles à chaque rotation",
    },
    {
      icon: Leaf,
      title: "Produits bio",
      description: "Cosmétiques et produits d'entretien éco-responsables",
    },
    {
      icon: Shield,
      title: "Linge de luxe",
      description: "Draps et serviettes qualité palace",
    },
    {
      icon: Clock,
      title: "Maintenance 24/7",
      description: "Intervention rapide en cas de besoin",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop"
                    alt="Chambre luxueuse"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    alt="Produits bio"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop"
                    alt="Linge de luxe"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
                    alt="Salon élégant"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card-elevated px-6 py-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Éco-certifié</div>
                <div className="text-sm text-muted-foreground">Démarche responsable</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Excellence & Durabilité
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              L'Excellence Hôtelière,{" "}
              <span className="text-gradient-gold">la conscience en plus.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Chaque détail compte. Du linge 400 fils aux produits d'accueil bio, 
              nous créons une expérience inoubliable tout en respectant l'environnement.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="glass-card p-5 group hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
