import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import { Contact } from './routes/Contact.jsx'
import { Services } from './routes/Services.jsx'
import { Clients } from './routes/Clients.jsx'
import { WorkWithUs } from './routes/WorkWithUs.jsx'
import { OurHistory } from './routes/OurHistory.jsx'
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
        <Route path='/Contacto' element={<Contact />}/>
        <Route path='/Servicios' element={<Services />}/>
        <Route path='/Trabaja con nosotros' element={<WorkWithUs />}/>
        <Route path='/Nuestra Historia' element={<OurHistory />}/>
      </Routes>
      <Footer/>
      <a className="btn-wpp" href="https://api.whatsapp.com/send/?phone=5493564366909" target="_blank" rel="noreferrer noopener">
        <i className='bx bxl-whatsapp'></i>
      </a>
    </BrowserRouter>
  </React.StrictMode>,
)

