import { Link } from "react-router-dom";
import Button from "./Button";
import { useCurrentUser } from "../feature/authorization/useCurrentUser";
import { Icon, User } from "iconsax-react";
import { useState } from "react";
import UserSidebar from "./UserSidebar";

function Header() {
  const { currentUser } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser?.data);
  return (
    <header className="w-full bg-white shadow-md z-30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <nav className="flex items-center gap-8 text-lg font-semibold text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            خانه
          </Link>
          <Link
            to="/allDataset"
            className="hover:text-blue-600 transition-colors"
          >
            مجموعه داده
          </Link>
          {currentUser?.data && (
            <Link
              to={`${
                currentUser?.data?.role == "uploader"
                  ? "/datasets"
                  : "/codeEditor"
              }`}
              className="hover:text-blue-600 transition-colors"
            >
              داشبورد
            </Link>
          )}
        </nav>
        {currentUser?.data ? (
          <User onClick={() => setIsOpen((isOpen) => !isOpen)} />
        ) : (
          <Link to="/login">
            <Button extraStyle="w-24 py-2" type="contained">
              ورود
            </Button>
          </Link>
        )}
      </div>
      {isOpen && <UserSidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Header;
