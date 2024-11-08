import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralProvider } from './contexts/generalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralProvider>
    <App />

    </GeneralProvider>
  </StrictMode>
)
