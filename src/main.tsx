import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { App as OldApp } from './oldApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <OldApp/> */}
    <App />
  </StrictMode>,
)
