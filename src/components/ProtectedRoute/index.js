import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwtToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
