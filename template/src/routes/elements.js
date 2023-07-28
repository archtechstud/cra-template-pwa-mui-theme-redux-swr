import { Suspense, lazy } from 'react'

const Loadable = Component => props => (
  <Suspense fallback={'Loading...'}>
    <Component {...props} />
  </Suspense>
)

export const LoginPage = Loadable(lazy(() => import('../pages/Login')))
export const RegisterPage = Loadable(lazy(() => import('../pages/Register')))
export const DashboardPage = Loadable(lazy(() => import('../pages/Dashboard')))
