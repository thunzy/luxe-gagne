import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, BedDouble, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("2");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Gestion Locative Premium
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Transformez votre propriété en{" "}
              <span className="text-gradient-gold">actif financier d'exception.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              La gestion locative qui allie performance hôtelière{" "}
              <span className="text-accent font-semibold">(+30% de revenus)</span> et éco-responsabilité.
            </p>

            {/* Simulation Module */}
            <div className="glass-card-elevated p-6 md:p-8 animate-fade-in-up animation-delay-300">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Simulez vos revenus potentiels
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Entrez votre adresse"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-12 h-14 text-base bg-background/50 border-border/50 focus:border-accent focus:ring-accent"
                  />
                </div>
                
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <BedDouble className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 rounded-lg bg-background/50 border border-border/50 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer"
                    >
                      <option value="1">1 chambre</option>
                      <option value="2">2 chambres</option>
                      <option value="3">3 chambres</option>
                      <option value="4">4 chambres</option>
                      <option value="5">5+ chambres</option>
                    </select>
                  </div>
                </div>
                
                <Button variant="gold" size="xl" className="w-full group">
                  Simuler ma rentabilité
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-border/50 animate-fade-in-up animation-delay-400">
              <p className="text-sm text-muted-foreground mb-4">
                Recommandé par des propriétaires exigeants
              </p>
              <div className="flex items-center gap-6 opacity-60">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/200px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                  alt="Airbnb" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/200px-Booking.com_logo.svg.png" 
                  alt="Booking.com" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Stats Cards */}
              <div className="absolute top-0 right-0 glass-card p-6 animate-float">
                <div className="text-3xl font-serif font-bold text-accent">+30%</div>
                <div className="text-sm text-muted-foreground">Revenus supplémentaires</div>
              </div>
              
              <div className="absolute top-32 right-20 glass-card p-6 animate-float animation-delay-200" style={{ animationDelay: "1s" }}>
                <div className="text-3xl font-serif font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Taux d'occupation</div>
              </div>
              
              <div className="absolute top-64 right-8 glass-card p-6 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-3xl font-serif font-bold text-forest-light">24/7</div>
                <div className="text-sm text-muted-foreground">Support dédié</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
