import { CloseSquare } from "iconsax-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

function UserSidebar({ setIsOpen, isOpen }) {
  const { logout } = useAuth();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/5 bg-white shadow-lg  transition-transform ease-in-out duration-500  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">منوی کاربر</h2>
        <button onClick={() => setIsOpen(false)} className="text-2xl">
          <CloseSquare size="32" color="black" className="cursor-pointer" />
        </button>
      </div>

      <nav className="p-4 space-y-4 flex flex-col items-start">
        <Link to="/profile" className="w-full  p-2 hover:bg-gray-200 rounded">
          پروفایل من
        </Link>
        <Button type={`primary`} extraStyle={`w-full`} onClick={logout}>
          خروج
        </Button>
      </nav>
    </div>
  );
}

export default UserSidebar;
