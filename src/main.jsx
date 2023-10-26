import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)

