import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar  from './Sidebar.jsx'
import './index.css'
import App from './App.jsx'
import CompareEffects from './CompareEffects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompareEffects/>
  </StrictMode>,
)
