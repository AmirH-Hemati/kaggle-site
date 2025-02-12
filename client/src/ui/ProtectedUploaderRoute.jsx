import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedUploaderRoute() {
  const { token, role } = useAuth();
  if (!token || role !== "uploader") return <Navigate to={`/login`} />;
  return <Outlet />;
}

export default ProtectedUploaderRoute;
