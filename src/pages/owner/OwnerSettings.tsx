import { User, Mail, Phone, CreditCard, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function OwnerSettings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
          Réglages
        </h1>
        <p className="text-muted-foreground mt-1">
          Gérez vos préférences et informations personnelles
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50 space-y-6">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-forest" />
          <h2 className="font-serif text-lg font-semibold">Profil</h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" defaultValue="Jean" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" defaultValue="Dupont" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jean.dupont@email.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" type="tel" defaultValue="+33 6 12 34 56 78" className="mt-1.5" />
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50 space-y-6">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-forest" />
          <h2 className="font-serif text-lg font-semibold">Notifications</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Nouvelles réservations</p>
              <p className="text-sm text-muted-foreground">Recevoir une notification à chaque nouvelle réservation</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Relevés mensuels</p>
              <p className="text-sm text-muted-foreground">Recevoir les relevés par email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Alertes maintenance</p>
              <p className="text-sm text-muted-foreground">Être notifié des interventions</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-dashboard-card rounded-xl p-6 shadow-soft border border-border/50 space-y-6">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-forest" />
          <h2 className="font-serif text-lg font-semibold">Paiement</h2>
        </div>
        
        <div>
          <Label htmlFor="iban">IBAN pour les virements</Label>
          <Input id="iban" defaultValue="FR76 **** **** **** **** **** 123" className="mt-1.5" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="btn-gold">Sauvegarder les modifications</Button>
      </div>
    </div>
  );
}
