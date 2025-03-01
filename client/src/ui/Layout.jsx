import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col w-full h-screen ">
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
