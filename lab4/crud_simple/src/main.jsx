import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Empleados from './empleados.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Empleados /><Empleados />
  </StrictMode>,
)
