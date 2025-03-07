import { Outlet } from "react-router-dom";
import SidebarAdminPage from "./SidebarAdminPage";

function AdminLayout() {
  return (
    <div className="w-full h-screen bg-gray-50 flex">
      <SidebarAdminPage />
      <main className="flex-1 overflow-auto bg-amber-400">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
