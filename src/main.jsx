import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import { Contact } from './routes/Contact.jsx'
import { Services } from './routes/Services.jsx'
import { OurHistory } from './routes/OurHistory.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx'
import { NotRouteMatch } from './components/NotRouteMatch.jsx'
import './index.css'
import { FaWhatsapp } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contacto' element={<Contact />}/>
        <Route path='/Servicios' element={<Services />}/>
        <Route path='/Nuestra Historia' element={<OurHistory />}/>
        <Route path='/*' element={<NotRouteMatch />} />
      </Routes>
      <Footer/>
      <a className="btn-wpp" href="https://api.whatsapp.com/send/?phone=5493564366909" target="_blank" rel="noreferrer noopener" aria-label="Ir a WhatsApp">
          <FaWhatsapp />
      </a>
    </BrowserRouter>
  </React.StrictMode>,
)

