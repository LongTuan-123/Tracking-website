'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type IRootProvider = {
  children: React.ReactNode
}
const queryClient = new QueryClient()

const RootProvider: React.FC<IRootProvider> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default RootProvider
