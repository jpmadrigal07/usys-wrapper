import toast from 'react-hot-toast'

export const showError = (error) => {
  if (error && typeof error !== 'string' && error.fieldErrors) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(error.fieldErrors).forEach(([key, value]: any) => {
      value.forEach((res) => {
        toast.error(`${key.toLocaleUpperCase()}: ${res}`)
      })
    })
  } else {
    toast.error(error)
  }
}
