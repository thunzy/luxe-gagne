import { Bell, Search, User, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { AdminSearchCommand } from "./AdminSearchCommand";

const notifications = [
  { id: 1, type: "reservation", message: "Nouvelle réservation - Le Marais Chic", time: "Il y a 5 min", urgent: false },
  { id: 2, type: "message", message: "Message de Jean Dupont", time: "Il y a 15 min", urgent: false },
  { id: 3, type: "maintenance", message: "Ticket urgent: Fuite d'eau - Bastille Loft", time: "Il y a 30 min", urgent: true },
  { id: 4, type: "checkin", message: "Check-in dans 2h - Saint-Germain Suite", time: "Il y a 1h", urgent: false },
];

export function AdminTopbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="h-16 bg-dashboard-card border-b border-border flex items-center justify-between px-6">
        <div className="lg:hidden w-10" />

        {/* Global Search */}
        <div className="flex-1 max-w-xl mx-4">
          <Button
            variant="outline"
            className="w-full justify-start text-muted-foreground h-10"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Rechercher voyageurs, propriétaires, factures...</span>
            <span className="sm:hidden">Rechercher...</span>
            <kbd className="pointer-events-none hidden sm:inline-flex ml-auto h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <Command className="h-3 w-3" />K
            </kbd>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-admin-urgent rounded-full text-[10px] text-white font-semibold flex items-center justify-center">
                  {notifications.length}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>
                <Badge variant="secondary" className="text-xs">
                  {notifications.filter(n => n.urgent).length} urgent
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notif) => (
                <DropdownMenuItem key={notif.id} className="flex flex-col items-start py-3 cursor-pointer">
                  <div className="flex items-center gap-2 w-full">
                    {notif.urgent && (
                      <span className="h-2 w-2 rounded-full bg-admin-urgent flex-shrink-0" />
                    )}
                    <span className="font-medium text-sm">{notif.message}</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{notif.time}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-admin-primary font-medium">
                Voir toutes les notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 h-auto py-2">
                <div className="h-9 w-9 rounded-full bg-admin-primary flex items-center justify-center">
                  <User className="h-5 w-5 text-admin-primary-foreground" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-foreground">Admin</p>
                  <p className="text-xs text-muted-foreground">Manager</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Paramètres</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Déconnexion</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <AdminSearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
