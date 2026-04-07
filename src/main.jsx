import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'

// 🔥 IMPORTS
import App from './App.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Header from './Components/Header/Header.jsx'
import Nosotros from './Components/Nosotros/Nosotros.jsx' // 👈 NUEVO

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* 🔥 HEADER GLOBAL */}
      <Header />

      {/* 🔥 RUTAS */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
)