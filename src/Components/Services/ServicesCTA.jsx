import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'

const ServicesCTA = () => {
  return (
    <section className="relative py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-green-600 via-blue-700 to-indigo-900 rounded-[24px] px-8 py-12 sm:px-12 sm:py-16 lg:px-20 overflow-hidden shadow-xl"
        >
          {/* Decorative Glowing Circle overlay */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Side Content */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-blue-100 text-base sm:text-lg font-light">
                Let's build something amazing together.
              </p>
            </div>

            {/* Middle/Right: Action Buttons & Contact Info */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4 w-full justify-self-center lg:justify-self-end">
              <Link
                to="/contact"
                className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-semibold text-green-600 bg-white hover:bg-blue-50 hover:text-blue-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span>Get a Free Quote</span>
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="tel:+911234567890" 
                className="flex items-center space-x-2 text-sm text-blue-100 hover:text-white transition-colors duration-300 group"
              >
                <FaPhoneAlt className="h-3.5 w-3.5 text-blue-300 group-hover:scale-115 transition-transform duration-300" />
                <span className="font-semibold">Call Us: +91 12345 67890</span>
              </a>
            </div>

            {/* Far Right: Decorative floating glowing blue cubes */}
            <div className="hidden lg:block lg:col-span-2 relative h-32 w-full">
              {/* Cube 1 */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 45, 0],
                  rotateY: [0, 45, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
                className="absolute right-4 top-2 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-green-600/10 border border-blue-300/35 rounded-lg shadow-lg backdrop-blur-sm"
              />
              
              {/* Cube 2 */}
              <motion.div
                animate={{
                  y: [-10, 8, -10],
                  rotateX: [15, -30, 15],
                  rotateY: [-15, 30, -15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
                className="absolute right-20 top-12 w-8 h-8 bg-gradient-to-tr from-blue-400/40 to-green-600/15 border border-blue-300/35 rounded shadow-md backdrop-blur-sm"
              />
              
              {/* Cube 3 */}
              <motion.div
                animate={{
                  y: [4, -8, 4],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                }}
                className="absolute right-12 top-20 w-6 h-6 bg-gradient-to-bl from-blue-400/45 to-blue-500/20 border border-blue-300/30 rounded-md shadow-md backdrop-blur-sm"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesCTA
