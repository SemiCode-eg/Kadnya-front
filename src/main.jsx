import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import CustomMuiThemeProvider from './theme/CustomMuiThemeProvider.jsx'
import { router } from './router/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomMuiThemeProvider>
    <RouterProvider router={router} />
  </CustomMuiThemeProvider>,
)
