import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import { Feed } from '../pages/Feed'
import { Edition } from '../pages/Edition'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Home />
        <Edition />
        <Feed />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
