import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* CTA Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Votre bien a du potentiel.{" "}
            <span className="text-gradient-gold">Révélez-le.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Rejoignez les propriétaires qui ont choisi l'excellence 
            pour leur investissement immobilier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group">
              Lancer l'estimation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="border-2">
              <Phone className="w-5 h-5 mr-2" />
              Réserver un audit téléphonique
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-xl">C</span>
                </div>
                <span className="font-serif text-xl font-semibold text-foreground">
                  Conciergerie<span className="text-accent">3.0</span>
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La gestion locative nouvelle génération alliant performance financière, 
                excellence hôtelière et responsabilité environnementale.
              </p>

              <div className="flex items-center gap-2 text-sm text-accent">
                <Leaf className="w-4 h-4" />
                <span>Démarche éco-responsable</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#approche" className="text-muted-foreground hover:text-foreground transition-colors">
                    Notre Approche
                  </a>
                </li>
                <li>
                  <a href="#technologie" className="text-muted-foreground hover:text-foreground transition-colors">
                    Technologie
                  </a>
                </li>
                <li>
                  <a href="#temoignages" className="text-muted-foreground hover:text-foreground transition-colors">
                    Témoignages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Légal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    CGV
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>01 23 45 67 89</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>contact@conciergerie30.com</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>12 rue de la Paix<br />75002 Paris</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Conciergerie 3.0. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
