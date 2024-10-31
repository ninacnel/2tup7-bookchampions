import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthenticationContextProvider } from './components/services/authentication/authentication.context.jsx'
import { ThemeContextProvider } from './components/services/theme/theme.context.jsx'
import { TranslateContextProvider } from './components/services/translation/translation.context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <TranslateContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </TranslateContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>,
)
