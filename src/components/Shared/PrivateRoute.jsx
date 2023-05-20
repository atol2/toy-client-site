import { Outlet, useNavigate } from "react-router-dom";
import useFirebaseUser from "../../hooks/useFirebaseUser";
const PrivateRoute = () => {
  const navigate = useNavigate();
  const { user } = useFirebaseUser();
  if (user) return <Outlet />;
  navigate("/login");
};

export default PrivateRoute;