import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function LayoutUploader({ data }) {
  return (
    <div className="flex-1 flex">
      <Sidebar data={data} />
      <Outlet />
    </div>
  );
}

export default LayoutUploader;
