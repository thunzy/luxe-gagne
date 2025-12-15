import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { User, Building2, FileText, Calendar, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AdminSearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockData = {
  owners: [
    { id: 1, name: "Jean Dupont", email: "jean@example.com" },
    { id: 2, name: "Marie Martin", email: "marie@example.com" },
    { id: 3, name: "Pierre Bernard", email: "pierre@example.com" },
  ],
  properties: [
    { id: 1, name: "Le Marais Chic", address: "12 Rue de Rivoli" },
    { id: 2, name: "Bastille Loft", address: "45 Rue de la Roquette" },
    { id: 3, name: "Saint-Germain Suite", address: "8 Rue de Seine" },
  ],
  guests: [
    { id: 1, name: "John Smith", booking: "15-18 Jan 2025" },
    { id: 2, name: "Emma Wilson", booking: "20-25 Jan 2025" },
  ],
  invoices: [
    { id: "INV-2025-001", owner: "Jean Dupont", amount: "3,450€" },
    { id: "INV-2025-002", owner: "Marie Martin", amount: "2,890€" },
  ],
};

export function AdminSearchCommand({ open, onOpenChange }: AdminSearchCommandProps) {
  const navigate = useNavigate();

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher voyageurs, propriétaires, factures..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
        
        <CommandGroup heading="Propriétaires">
          {mockData.owners.map((owner) => (
            <CommandItem 
              key={owner.id} 
              onSelect={() => handleSelect(`/admin/owners/${owner.id}`)}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span>{owner.name}</span>
                <span className="text-xs text-muted-foreground">{owner.email}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Propriétés">
          {mockData.properties.map((property) => (
            <CommandItem 
              key={property.id} 
              onSelect={() => handleSelect(`/admin/properties/${property.id}`)}
              className="cursor-pointer"
            >
              <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span>{property.name}</span>
                <span className="text-xs text-muted-foreground">{property.address}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Voyageurs">
          {mockData.guests.map((guest) => (
            <CommandItem 
              key={guest.id} 
              onSelect={() => handleSelect(`/admin/calendar`)}
              className="cursor-pointer"
            >
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span>{guest.name}</span>
                <span className="text-xs text-muted-foreground">{guest.booking}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Factures">
          {mockData.invoices.map((invoice) => (
            <CommandItem 
              key={invoice.id} 
              onSelect={() => handleSelect(`/admin/finances`)}
              className="cursor-pointer"
            >
              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span>{invoice.id}</span>
                <span className="text-xs text-muted-foreground">{invoice.owner} • {invoice.amount}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
