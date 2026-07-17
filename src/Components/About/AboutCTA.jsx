import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'

const AboutCTA = () => {
  return (
    <section className="relative py-16 bg-white">
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
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
                Let's Build Something<br />Amazing Together
              </h2>
              <p className="text-blue-100 text-sm sm:text-base font-light max-w-xl leading-relaxed">
                Whether you're launching a startup MVP, modernizing enterprise software, or building AI-powered products, TechCombo is ready to turn your vision into reality.
              </p>
            </div>

            {/* Right Side Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 w-full">
              <Link
                to="/contact"
                className="group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold text-green-600 bg-white hover:bg-blue-50 hover:text-blue-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span>Get Free Quote</span>
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white border border-blue-300/40 hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <FaEnvelope className="h-3.5 w-3.5 opacity-80" />
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Floating glowing blue cubes backgrounds (only visible on desktop) */}
            <div className="hidden lg:block lg:col-span-12 absolute inset-0 pointer-events-none">
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
                className="absolute right-12 top-4 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-green-600/10 border border-blue-300/35 rounded-lg shadow-lg backdrop-blur-sm opacity-60"
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
                className="absolute right-28 top-20 w-8 h-8 bg-gradient-to-tr from-blue-400/40 to-green-600/15 border border-blue-300/35 rounded shadow-md backdrop-blur-sm opacity-60"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutCTA
