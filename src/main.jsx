import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SocialMediaProvider } from './context/SocialMediaProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialMediaProvider>

    <App />
    </SocialMediaProvider>
  </StrictMode>
)
