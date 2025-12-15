import { Outlet } from "react-router-dom";
import { OwnerSidebar } from "./OwnerSidebar";
import { OwnerTopbar } from "./OwnerTopbar";

export function OwnerLayout() {
  return (
    <div className="min-h-screen bg-dashboard">
      <OwnerSidebar />
      <div className="lg:ml-64">
        <OwnerTopbar />
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
