import { Outlet, useLocation } from 'react-router-dom';
import Login from '../../features/auth/ui/pages/Login';
import Register from '../../features/auth/ui/pages/Register';

const AuthLayout = () => {
  const { pathname } = useLocation();

  if (pathname === '/register') {
    return (
      <div className="auth-pair">
        <Login embedded />
        <Register embedded />
      </div>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
