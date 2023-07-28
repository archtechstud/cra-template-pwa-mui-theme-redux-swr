import { createBrowserRouter, Navigate } from 'react-router-dom'

import { LoginPage, RegisterPage, DashboardPage } from './elements'
import { DashboardLayout, AuthLayout } from '../layouts'
import { PATH_AFTER_LOGIN } from '../config-global'
import { PATH_AUTH } from './paths'

export default function Router() {
  return createBrowserRouter([
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        { element: <Navigate to={PATH_AUTH.login} replace />, index: true },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <DashboardPage /> },
      ],
    },
  ])
}
