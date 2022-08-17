import toast from 'react-hot-toast'

export const showError = (error, id: string) => {
  if (error && typeof error !== 'string' && error.fieldErrors) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(error.fieldErrors).forEach(([key, value]: any) => {
      value.forEach((res, index) => {
        toast.error(`${key.toLocaleUpperCase()}: ${res}`, {
          id: `${id}${index}`,
        })
      })
    })
  } else {
    toast.error(error, {
      id,
    })
  }
}
