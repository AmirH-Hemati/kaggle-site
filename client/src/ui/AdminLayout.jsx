import { Outlet } from "react-router-dom";
import SidebarAdminPage from "./SidebarAdminPage";

function AdminLayout() {
  return (
    <div className="w-full h-screen bg-gray-50 flex overflow-hidden">
      <SidebarAdminPage />
      <main className="flex-1 overflow-hidden bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
