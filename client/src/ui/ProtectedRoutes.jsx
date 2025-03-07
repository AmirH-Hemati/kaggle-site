import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoutes({ roles }) {
  const { token, role } = useAuth();
  if (!token || !roles.includes(role)) {
    return <div>you do not have accsess</div>;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
