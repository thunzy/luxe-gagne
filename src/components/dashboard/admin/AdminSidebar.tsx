import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Building2, 
  Wrench, 
  DollarSign, 
  Settings,
  Menu, 
  X, 
  LogOut,
  ChevronDown
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Calendar, label: "Calendrier Unifié", path: "/admin/calendar" },
  { icon: Users, label: "Propriétaires", path: "/admin/owners" },
  { icon: Building2, label: "Propriétés", path: "/admin/properties" },
  { 
    icon: Wrench, 
    label: "Maintenance & Tâches", 
    path: "/admin/maintenance",
    subItems: [
      { label: "Ménages", path: "/admin/maintenance/cleaning" },
      { label: "Maintenance technique", path: "/admin/maintenance/technical" },
    ]
  },
  { icon: DollarSign, label: "Finances", path: "/admin/finances" },
  { icon: Settings, label: "Réglages", path: "/admin/settings" },
];

export function AdminSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [maintenanceOpen, setMaintenanceOpen] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSubActive = (path: string) => location.pathname.startsWith(path);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-4 left-4 z-50 lg:hidden text-foreground" 
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-foreground/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setMobileOpen(false)} 
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 bg-admin-sidebar transition-transform duration-300 lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-white/10">
            <span className="text-xl font-semibold text-white">
              Concierge<span className="text-admin-primary">3.0</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <Collapsible 
                    key={item.path} 
                    open={maintenanceOpen} 
                    onOpenChange={setMaintenanceOpen}
                  >
                    <CollapsibleTrigger asChild>
                      <button className={cn(
                        "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        isSubActive(item.path) 
                          ? "bg-admin-sidebar-accent text-white" 
                          : "text-admin-sidebar-foreground hover:bg-admin-sidebar-accent hover:text-white"
                      )}>
                        <item.icon className="h-5 w-5" />
                        <span className="flex-1 text-left">{item.label}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          maintenanceOpen && "rotate-180"
                        )} />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-12 space-y-1 mt-1">
                      {item.subItems.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-4 py-2 rounded-lg text-sm transition-colors",
                            isActive(sub.path)
                              ? "bg-admin-primary text-white"
                              : "text-admin-sidebar-foreground hover:text-white"
                          )}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              }

              return (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  end={item.path === "/admin"}
                  onClick={() => setMobileOpen(false)} 
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.path) 
                      ? "bg-admin-primary text-white" 
                      : "text-admin-sidebar-foreground hover:bg-admin-sidebar-accent hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-admin-sidebar-foreground hover:bg-admin-sidebar-accent hover:text-white transition-colors">
              <LogOut className="h-5 w-5" />
              Déconnexion
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
