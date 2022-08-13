import { useState } from 'react'
import { getFetch } from '@trpc/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Router from '@/routes'
import { trpc } from '@/utils/trpc'

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
      url: 'http://localhost:9000/trpc',
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
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
