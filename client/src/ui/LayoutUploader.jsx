import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function LayoutUploader({ dataDatasets }) {
  console.log(dataDatasets);
  return (
    <div className="w-full h-full flex">
      <Sidebar data={dataDatasets} />
      <Outlet />
    </div>
  );
}

export default LayoutUploader;
