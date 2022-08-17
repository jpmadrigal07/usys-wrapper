import { useState } from 'react'
import { getFetch } from '@trpc/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Router from '@/routes'
import { trpc } from '@/utils/trpc'
import { apiUrl } from '@/config'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  )
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: apiUrl,
      fetch: async (input, init?) => {
        const fetch = getFetch()
        return fetch(input, {
          ...init,
          credentials: 'include',
        })
      },
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
