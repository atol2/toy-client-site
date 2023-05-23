import { Outlet, useNavigate } from "react-router-dom";
import useFirebaseUser from "../../hooks/useFirebaseUser";
// import { useEffect } from "react";
const PrivateRoute = () => {
    const navigate = useNavigate();
    const { user, loading } = useFirebaseUser();

    if (loading) return <div>Loading...</div>
    // useEffect(() => {

    if (!user) return navigate("/login");

    return <Outlet />;
    // }, [user]) 


};

export default PrivateRoute;

// import { Outlet, useNavigate } from "react-router-dom";
// import useFirebaseUser from "../../hooks/useFirebaseUser";
// import { useEffect } from "react";

// const PrivateRoute = () => {
//   const navigate = useNavigate();
//   const { user } = useFirebaseUser();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   if (user) {
//     return <Outlet />;
//   } else {
//     return null; // or a loading indicator, error message, or a different component
//   }
// };

// export default PrivateRoute;



