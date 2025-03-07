import { NavLink } from "react-router-dom";
import data from "../data/sidebarAdmin";

function SidebarAdminPage() {
  return (
    <aside className="w-[20%] hidden md:flex flex-col gap-6 border-l-2 border-black/20 py-6 ">
      {data?.map((item) => (
        <NavLink
          key={item.title}
          to={item.route}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 text-sm font-semibold transition-all rounded-lg hover:bg-blue-100 
          ${
            isActive
              ? "bg-blue-200 text-blue-800 border-l-4 border-blue-600"
              : "bg-white text-gray-700"
          }`
          }
        >
          <div className="text-xl">{item.icon}</div>
          <p className="text-base">{item.title}</p>
        </NavLink>
      ))}
    </aside>
  );
}

export default SidebarAdminPage;
