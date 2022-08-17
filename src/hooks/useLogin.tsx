import toast from 'react-hot-toast'
import { trpc } from '@/utils/trpc'
import { showError } from '@/utils/showAlert'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const navigate = useNavigate()
  const { mutate, isLoading } = trpc.useMutation(['auth.login'])
  const handleLogin = (email: string, password: string) => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          Cookies.set('u_auth', data)
          toast.success('You are now authenticated')
          navigate('/menu', { replace: true })
        },
        onError: (error) => {
          if (error.data?.zodError) {
            showError(error.data?.zodError)
          } else {
            showError(error.message)
          }
        },
      }
    )
  }
  return {
    handleLogin,
    isLoading,
  }
}

export default useLogin
