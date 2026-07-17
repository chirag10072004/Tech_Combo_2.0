import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Careers from './pages/Careers' // <-- Add this
import About from './pages/About'
import Services from './pages/Services'
import ScrollToHashElement from './Components/ScrollToHashElement'

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div className=" font-bold min-h-screen bg-[#071329] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} /> {/* <-- Add this */}
        </Routes>
      </div>
    </Router>
  )
}

export default App