import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="w-full bg-white z-50 shadow-md items-center p-4 h-16 flex justify-between">
      <Link to={`/`}>خانه</Link>
      <Link to={`/login`}>
        <Button extraStyle={`w-20 `} type={`contained`}>
          ورود
        </Button>
      </Link>
    </header>
  );
}

export default Header;
