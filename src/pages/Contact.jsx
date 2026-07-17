import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Components/Home/Navbar'
import ContactHero from '../Components/contact/ContactHero'
import ContactForm from '../Components/contact/ContactForm'
import ContactInfo from '../Components/contact/ContactInfo'
import ContactMap from '../Components/contact/ContactMap'
import ContactCTA from '../Components/contact/ContactCTA'
import Footer from '../Components/Home/Footer'

const Contact = () => {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Existing Navbar */}
      <Navbar />

      {/* Hero Section */}
      <ContactHero />

      {/* Main Content Area */}
      <section className="pb-24 pt-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Form & Details Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Form (Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex"
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info (Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 flex"
            >
              <ContactInfo />
            </motion.div>
          </div>

          {/* Map Location Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ContactMap />
          </motion.div>

          {/* Call To Action banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ContactCTA />
          </motion.div>

        </div>
      </section>

      {/* Existing Footer */}
      <Footer />
    </div>
  )
}

export default Contact
