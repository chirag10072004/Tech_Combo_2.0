import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Hero from '../Components/Home/Hero'
import Achievement from '../Components/Home/Achievement'
import Services from '../Components/Home/Services'
import About from '../Components/Home/About'
import Technologies from '../Components/Home/Technologies'
import Industries from '../Components/Home/Industries'
import Process from '../Components/Home/Process'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <Hero />

      <Achievement />

      <Services />

      <About />

      <Technologies />

      <Industries />

      <Process />

      <Footer />
    </div>
  )
}

export default Home