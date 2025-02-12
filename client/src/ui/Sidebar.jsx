import { Data, DocumentUpload } from "iconsax-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-[20%] flex flex-col gap-6 border-l-2 border-black/50 p-4">
      <NavLink className="flex items-center gap-2 rounded-sm p-3 text-sm font-semibold hover:bg-[#F8F9FA]">
        <DocumentUpload size="26" color="black" />
        <p>اپلود فایل</p>
      </NavLink>
      <NavLink className="flex items-center gap-2 rounded-sm p-3 text-sm font-semibold hover:bg-[#F8F9FA]">
        <Data size="26" color="black" />
        <p>فایل های شما</p>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
