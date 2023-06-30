import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuthRoute = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default RequireAuthRoute;
