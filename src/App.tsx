import { routers } from '@routres'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes } from 'react-router-dom'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			keepPreviousData: true,
			retry: 3,
			refetchOnWindowFocus: false,
			retryDelay: 3000,
		},
	},
})

function App() {
	const element = useRoutes(routers)

	return <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
}

export default App
