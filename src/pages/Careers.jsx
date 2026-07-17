import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import CareersSection from '../Components/Careers/Careers'

const Careers = () => {
  return (
    <>
      <Navbar />

      <div className='pt-15'>
        <CareersSection />
      </div>

      <Footer />
    </>
  )
}

export default Careers