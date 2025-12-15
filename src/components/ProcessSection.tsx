import { Search, Camera, Coins, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Audit & Estimation",
      description: "Visite de votre bien et analyse de son potentiel. Estimation précise de vos revenus locatifs.",
    },
    {
      number: "02",
      icon: Camera,
      title: "Mise en scène",
      description: "Shooting photo professionnel, rédaction optimisée et création de votre annonce premium.",
    },
    {
      number: "03",
      icon: Coins,
      title: "Récolte des gains",
      description: "Gestion 100% passive pour vous. Vous recevez vos revenus chaque mois sans lever le petit doigt.",
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
            Notre Processus
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Démarrage simple{" "}
            <span className="text-accent">et rapide.</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/80">
            En 3 étapes simples, transformez votre bien en source de revenus passifs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (hidden on mobile and for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary-foreground/30 to-transparent z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/30" />
                </div>
              )}

              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <step.icon className="w-10 h-10 text-primary-foreground group-hover:text-accent transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
