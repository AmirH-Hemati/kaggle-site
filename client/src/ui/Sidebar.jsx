import { NavLink } from "react-router-dom";
import data from "../data/sidebarDatasets";
function Sidebar() {
  return (
    <aside className="w-[20%] flex flex-col gap-6 border-l-2 border-black/20 py-6 ">
      {data.map((item) => (
        <NavLink
          key={item.title}
          to={item.route}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-sm p-3 text-sm font-semibold hover:bg-[#F8F9FA]     ${
              isActive
                ? "border-l-2 border-black bg-[#F8F9FA] rounded-none"
                : "border-l-0 bg-white "
            }`
          }
        >
          {item.icon}
          <p>{item.title}</p>
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
