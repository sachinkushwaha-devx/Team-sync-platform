import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminDashboard from '../../features/dashboard/ui/pages/AdminDashboard';
import EmployeeDashboard from '../../features/dashboard/ui/pages/Home';
import { getEmployeeRole } from '../../features/auth/ui/hooks/state/auth/authHelpers';

const RoleDashboard = () => {
  const { employee } = useSelector((state) => state.auth);
  const role = getEmployeeRole(employee);

  if (role === 'admin') {
    return <AdminDashboard />;
  }

  if (role === 'employee') {
    return <EmployeeDashboard />;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default RoleDashboard;
