import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OwnerTopbar() {
  return (
    <header className="h-16 bg-dashboard-card border-b border-border flex items-center justify-between px-6 lg:pl-72">
      <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
      
      <h1 className="font-serif text-lg font-medium text-foreground hidden sm:block">
        Espace Propriétaire
      </h1>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full text-[10px] text-accent-foreground font-semibold flex items-center justify-center">
            2
          </span>
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-forest flex items-center justify-center">
            <User className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">Jean Dupont</p>
            <p className="text-xs text-muted-foreground">Propriétaire</p>
          </div>
        </div>
      </div>
    </header>
  );
}
