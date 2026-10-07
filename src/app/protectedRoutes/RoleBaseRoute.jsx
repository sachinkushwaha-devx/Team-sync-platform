import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getEmployeeRole } from "../../features/auth/ui/hooks/state/auth/authHelpers";

const RoleBaseRoute = ({ allowedRoles }) => {
  const { employee } = useSelector((store) => store.auth);
  const employeeRole = getEmployeeRole(employee);
  const hasAccess = allowedRoles.some((role) => role.trim().toLowerCase() === employeeRole);

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default RoleBaseRoute;