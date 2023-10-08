import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AuthContext } from "../hooks/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="absolute top-[50vh] left-[50vw] loading loading-infinity loading-lg text-6xl text-accent -translate-x-1/2 -translate-y-1/2"></span>
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
