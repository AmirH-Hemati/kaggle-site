import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  const [hasLogin, setHasLogin] = useState(false);

  return (
    <div className="w-full h-full flex flex-col  justify-center items-center bg-gray-50">
      <Outlet />
      <Link
        to={hasLogin ? `/login` : `/signIn`}
        onClick={() => setHasLogin((hasLogin) => !hasLogin)}
      >
        {hasLogin ? (
          <span className="font-semibold"> اکانت دارید ؟ وارد شوید</span>
        ) : (
          <span className="font-semibold"> اکانت ندارید ؟ ثبت نام کنید</span>
        )}
      </Link>
    </div>
  );
}

export default AuthLayout;
