import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

import { store } from './app/routes/Store.jsx'
import AppRoutes from './app/routes/AppRoutes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </QueryClientProvider>

)
