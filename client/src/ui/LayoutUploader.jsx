import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function LayoutUploader() {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default LayoutUploader;
