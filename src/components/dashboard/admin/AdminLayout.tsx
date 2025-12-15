import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-dashboard">
      <AdminSidebar />
      <div className="lg:ml-64">
        <header className="h-16 bg-dashboard-card border-b border-border flex items-center justify-between px-6">
          <div className="lg:hidden w-10" />
          <h1 className="font-serif text-lg font-medium text-foreground hidden sm:block">Panel Administrateur</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full text-[10px] text-primary-foreground font-semibold flex items-center justify-center">5</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center">
                <User className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">Manager</p>
              </div>
            </div>
          </div>
        </header>
        <main className="p-4 lg:p-6"><Outlet /></main>
      </div>
    </div>
  );
}
