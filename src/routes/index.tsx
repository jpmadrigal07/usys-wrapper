import Loading from '@/components/Loading'
import React, { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Main from '@/layouts/Main'

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
      path: 'team',
      element: <Main />,
    },
    {
      path: '*',
      element: <h3>404</h3>,
    },
  ])
}

const Login = Loadable(lazy(() => import('../pages/Login')))
