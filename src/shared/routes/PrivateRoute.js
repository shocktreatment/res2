import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component: Compotent, redirectTo = "/" }) => {
  const { isLogin, isCurrent } = useAuth();
  const shouldRedirect = !isLogin && !isCurrent;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Compotent />;
};

export default PrivateRoute;
