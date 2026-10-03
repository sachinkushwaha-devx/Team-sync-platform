import Register from '../../features/auth/ui/pages/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../../features/dashboard/ui/pages/Home';
import Login from '../../features/auth/ui/pages/Login';
import PublicRoute from '../protectedRoutes/PublicRoute';
import ProtectedRoute from '../protectedRoutes/ProtectedRoute';
import { EmployeeRoutes } from './EmployeeRoutes';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children:[
                {
                    path : "",
                    element : <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: "register",
                            element: <Register />
                        },
                    ],
                },
            ],
        },
        {
            path:'/home',
            element: <ProtectedRoute />,
            children:[
                {
                    path: "",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        },
                        ...EmployeeRoutes,
                    ],
                },
            ],
        },
    ]);

  return <RouterProvider router={router} />
}

export default AppRoutes
