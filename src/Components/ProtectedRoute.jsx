import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  let { user } = useUserAuth();

  if (!user) {
    return navigate("/");
  }
  return children;
};

export default ProtectedRoute;
