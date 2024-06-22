import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main/Main'
import RouteMap from './routes/routes'
import './assets/styles/global.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import store from './features/store/store'
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import { config } from './config/theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={config}>
      <Provider store={store}>
        <BrowserRouter>
            <Main />
          <RouteMap />
        </BrowserRouter>
      </Provider>
      </ConfigProvider> 
    </QueryClientProvider>
  </React.StrictMode>,
)
