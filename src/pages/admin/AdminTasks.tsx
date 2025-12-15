import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tasks = {
  todo: [{ id: 1, property: "Le Marais Chic", deadline: "14:00", assignee: "Marie C.", type: "Ménage" }],
  in_progress: [{ id: 2, property: "Bastille Studio", deadline: "15:00", assignee: "Paul D.", type: "Check-in" }],
  done: [{ id: 3, property: "Montmartre Loft", deadline: "11:00", assignee: "Marie C.", type: "Ménage" }],
  problem: [{ id: 4, property: "Le Marais Chic", deadline: "12:00", assignee: "Tech", type: "Réparation" }],
};

const columns = [
  { key: "todo", label: "À faire", color: "bg-muted" },
  { key: "in_progress", label: "En cours", color: "bg-info/20" },
  { key: "done", label: "Terminé", color: "bg-success/10" },
  { key: "problem", label: "Problème signalé", color: "bg-destructive/10" },
];

export default function AdminTasks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">Gestion des Tâches</h1>
          <p className="text-muted-foreground mt-1">Kanban des opérations quotidiennes</p>
        </div>
        <Button className="btn-gold gap-2"><Plus className="h-4 w-4" />Nouvelle tâche</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.key} className={`rounded-xl p-4 ${col.color}`}>
            <h3 className="font-semibold text-foreground mb-4">{col.label} ({tasks[col.key as keyof typeof tasks].length})</h3>
            <div className="space-y-3">
              {tasks[col.key as keyof typeof tasks].map((task) => (
                <div key={task.id} className="bg-dashboard-card rounded-lg p-4 shadow-soft border border-border/50">
                  <Badge variant="outline" className="mb-2">{task.type}</Badge>
                  <p className="font-medium text-sm">{task.property}</p>
                  <p className="text-xs text-muted-foreground mt-1">Limite: {task.deadline}</p>
                  <p className="text-xs text-muted-foreground">Assigné: {task.assignee}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
