import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const { auth } = useContext(AuthContext);

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
