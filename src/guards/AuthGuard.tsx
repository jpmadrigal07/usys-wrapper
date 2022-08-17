import { useState, ReactNode, useEffect } from 'react'
import { trpc } from '@/utils/trpc'
import { useNavigate } from 'react-router-dom'
import { showError } from '@/utils/showAlert'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'

type AuthGuardProps = {
  children: ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { mutate: verifyLogin, isLoading: isVerifyLoginLoading } =
    trpc.useMutation(['auth.verify'])
  useEffect(() => {
    const token = Cookies.get('u_auth')
    if (token) {
      verifyLogin(token, {
        onSuccess: () => {
          setIsAuthenticated(true)
        },
        onError: (error) => {
          if (error.data?.zodError) {
            showError(error.data?.zodError, 'authError')
          } else {
            showError(error.message, 'authError')
          }
          setIsAuthenticated(false)
          navigate('/login', { replace: true })
        },
      })
    } else {
      showError('Please login to access the page', 'authError')
      navigate('/login', { replace: true })
    }
  }, [navigate, verifyLogin])

  return (
    <>
      {isVerifyLoginLoading || !isAuthenticated ? (
        <div className="grid place-items-center h-screen">
          <Loading />
        </div>
      ) : (
        children
      )}
    </>
  )
}
