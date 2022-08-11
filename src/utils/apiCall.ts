import axios, { Method, AxiosError } from 'axios'

const apiCall = async (
  endpoint = '',
  headers = {},
  method: Method = 'GET',
  body = null
) => {
  const params = {
    method: method,
    url: endpoint,
    headers: headers,
  }
  try {
    const res = await axios(
      method === 'DELETE' ? params : { ...params, data: body }
    )
    return res.data
  } catch (error) {
    const err = error as AxiosError
    throw err.response ? err?.response?.data : err.message
  }
}

export default apiCall
