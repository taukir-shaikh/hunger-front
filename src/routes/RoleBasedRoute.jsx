import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RoleBasedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  if (!isAuthenticated) return <Navigate to="/auth/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/" />;
  return <Outlet />;
};

export default RoleBasedRoute;
