import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthenticationContextProvider } from './components/services/authentication/authentication.context.jsx'
import { ThemeContextProvider } from './components/services/theme/theme.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthenticationContextProvider>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
     </AuthenticationContextProvider>
  </StrictMode>,
)
