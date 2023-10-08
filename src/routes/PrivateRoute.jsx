import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AuthContext } from "../hooks/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
        <div className="absolute flex justify-center items-center z-50 h-screen w-screen top-0 left-0 right-0 overflow-hidden bg-event-secondary"><span className=" loading loading-infinity loading-lg text-accent"></span></div>
      
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
