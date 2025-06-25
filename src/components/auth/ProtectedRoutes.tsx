import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import { RootState } from "../../redux/store/store";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const location = useLocation();
  const auth = useSelector((state: any) => state.auth);
debugger
  const user = auth?.user;

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <Navigate
        to="/otp-login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;

