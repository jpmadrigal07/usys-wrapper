import Loading from '@/components/Loading'
import React, { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import AuthGuard from '@/guards/AuthGuard'
// import Main from '@/layouts/Main'

const Loadable = (Component: React.ElementType) => (props) => {
  return (
    <Suspense
      fallback={
        <div className="grid place-items-center h-screen">
          <Loading />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/menu',
      element: (
        <AuthGuard>
          <Menu />
        </AuthGuard>
      ),
    },
    {
      path: '*',
      element: <h3>404</h3>,
    },
  ])
}

const Login = Loadable(lazy(() => import('../pages/Login')))
const Menu = Loadable(lazy(() => import('../pages/Menu')))
