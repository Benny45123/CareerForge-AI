import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Design4 from './components/Design4.jsx'
import Design1 from './components/Design1.jsx'
import Design2 from './components/Design2.jsx'
import Design3 from './components/Design3.jsx'
import Design5 from './components/Design5.jsx'
import Design6 from './components/Design6.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Auth/> */}
    <App/>
    
    {/* <Design6/> */}
    </BrowserRouter>
  </StrictMode>,
)
