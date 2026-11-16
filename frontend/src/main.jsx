import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppShell from './AppShell.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
)
