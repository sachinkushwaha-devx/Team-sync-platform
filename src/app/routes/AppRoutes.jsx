import Register from '../../features/auth/ui/pages/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import Login from '../../features/auth/ui/pages/Login';
import PublicRoute from '../protectedRoutes/PublicRoute';
import ProtectedRoute from '../protectedRoutes/ProtectedRoute';
import RoleBaseRoute from '../protectedRoutes/RoleBaseRoute';
import { useDispatch } from 'react-redux';
import { currentLoggedEmployee } from '../../features/auth/ui/hooks/state/auth/authAction';
import { useEffect } from 'react';

import { commonRoutes } from './CommonRoutes';
import { adminRoutes } from './AdminRoutes';
import { EmployeeRoutes as employeeRoutes } from './EmployeeRoutes';
import { NotFoundPage, UnauthorizedPage } from './RouteStatusPages';
import RoleDashboard from './RoleDashboard';

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            {
              path: '',
              element: <Login />,
            },
            {
              path: 'register',
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: '/home',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <RoleDashboard />,
            },
            ...commonRoutes,
            {
              element: <RoleBaseRoute allowedRoles={['admin']} />,
              children: adminRoutes,
            },
            {
              element: <RoleBaseRoute allowedRoles={['employee']} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
    {
      path: '/unauthorized',
      element: <UnauthorizedPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
