import React, { useEffect } from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import AboutHero from '../Components/About/AboutHero'
import AboutWhoWeAre from '../Components/About/AboutWhoWeAre'
import AboutStory from '../Components/About/AboutStory'
import AboutMissionValues from '../Components/About/AboutMissionValues'
import AboutWhyChoose from '../Components/About/AboutWhyChoose'
import AboutTechStack from '../Components/About/AboutTechStack'
import AboutIndustries from '../Components/About/AboutIndustries'
import AboutStats from '../Components/About/AboutStats'
import AboutCTA from '../Components/About/AboutCTA'


const About = () => {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* Who We Are */}
      <AboutWhoWeAre />

      {/* Our Story / Journey Timeline */}
      <AboutStory />

      {/* Mission Vision Values Cards */}
      <AboutMissionValues />

      {/* Why Choose Us Features */}
      <AboutWhyChoose />

     
      {/* Industries We Build For */}
      <AboutIndustries />

      {/* Company Stats Counters */}
      <AboutStats />

      {/* CTA Section Banner */}
      <AboutCTA />


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
