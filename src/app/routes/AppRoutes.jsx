import React from 'react'
import Register from '../../features/auth/ui/pages/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../../features/dashboard/ui/pages/Home';
import Login from '../../features/auth/ui/pages/Login';

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element: <Login />
                },
                {
                    path:"register",
                    element: <Register /> 
                }
            ]
        },
        {
            path:'/home',
            element:<DashboardLayout />,
            children:[
                {
                path:"",
                element:<Home />
            },
        ],
        },
    ]);

  return <RouterProvider router={router} />
}

export default AppRoutes
