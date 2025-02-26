import { StrictMode } from '../$node_modules/@types/react/index.js'
import { createRoot } from '../$node_modules/@types/react-dom/client.js'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
