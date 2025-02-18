import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  const [hasLogin, setHasLogin] = useState(false);
  return (
    <div className="w-full h-full flex flex-col  justify-center items-center">
      <Outlet />
      <Link
        to={hasLogin ? `/login` : `/signIn`}
        onClick={() => setHasLogin((hasLogin) => !hasLogin)}
      >
        {hasLogin ? " اکانت دارید ؟ وارد شوید" : "اکانت ندارید ؟ ثبت نام کنید"}
      </Link>
    </div>
  );
}

export default AuthLayout;
