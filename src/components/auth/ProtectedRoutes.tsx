// components/auth/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRoles
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) => {
  const auth = useSelector((state: any) => state.auth);
  const userRole = auth?.user?.role;

  if (!userRole) return <Navigate to="/account/login" />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" />;

  return children;
};

export default ProtectedRoute;
