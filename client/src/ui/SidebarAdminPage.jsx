import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/sidebarAdmin";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

function SidebarAdminPage() {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-[20%] hidden md:flex flex-col gap-10  py-6 bg-[#155DFC] shadow-lg text-white">
      {data?.map((item) => (
        <div key={item.title} className="w-full">
          {item.submenu ? (
            <div>
              <button
                onClick={() => toggleMenu(item.title)}
                className="w-full flex items-center justify-between gap-3 p-3 text-sm font-semibold transition-all rounded-lg hover:bg-[#0F4ACF]"
              >
                <div className="flex items-center gap-3">
                  <div className="text-xl">{item.icon}</div>
                  <p className="text-base">{item.title}</p>
                </div>
                <span>
                  {openMenus[item.title] ? (
                    <ArrowUp2 size="24" color="white" variant="Bold" />
                  ) : (
                    <ArrowDown2 size="24" color="white" variant="Bold" />
                  )}
                </span>
              </button>
              {openMenus[item.title] && (
                <div className="p-4 bg-[#0A3496] rounded-lg">
                  {item.submenu.map((sub) => (
                    <NavLink
                      key={sub.title}
                      to={sub.route}
                      className={({ isActive }) =>
                        `block p-3 text-sm font-medium transition-all rounded-lg hover:bg-[#0F4ACF] ${
                          isActive ? "bg-[#0D3EB1]" : "text-white"
                        }`
                      }
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 text-sm font-semibold transition-all rounded-lg hover:bg-[#0F4ACF] ${
                  isActive ? "bg-[#0D3EB1]" : "text-white"
                }`
              }
            >
              <div className="text-xl">{item.icon}</div>
              <p className="text-base">{item.title}</p>
            </NavLink>
          )}
        </div>
      ))}
    </aside>
  );
}

export default SidebarAdminPage;
