import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PatooStudio from './pages/projects/PatooStudio'
import PatooEvent from './pages/projects/PatooEvent'
import PatooApp from './pages/projects/PatooApp'
import Embers from './pages/projects/Embers'
import PatooCrea from './pages/projects/PatooCrea'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patoo-studio" element={<PatooStudio />} />
        <Route path="/patoo-event" element={<PatooEvent />} />
        <Route path="/patoo-app" element={<PatooApp />} />
        <Route path="/embers" element={<Embers />} />
        <Route path="/patoo-crea" element={<PatooCrea />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)