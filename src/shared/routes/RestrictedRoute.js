import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RestricedRoute = ({ component: Compotent, redirectTo = "/" }) => {
  const { isLogin } = useAuth();
  return isLogin ? <Navigate to={redirectTo} /> : <Compotent />;
};

export default RestricedRoute;
