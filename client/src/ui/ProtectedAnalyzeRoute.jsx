import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedAnalyzeRoute() {
  const { token, role } = useAuth();
  if (!token || role !== "analyzer") {
    return <Navigate to={`/login`} />;
  }
  return <Outlet />;
}

export default ProtectedAnalyzeRoute;
