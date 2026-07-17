import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall, FiArrowRight } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="relative py-20 bg-[#071329] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner container with dark blue gradient & visual glow highlights */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-[#1e3a8a] border border-blue-800/40 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(7,19,41,0.4)]">
          {/* Background Decorative Rings */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-blue/15 rounded-full blur-[60px]" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[60px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Have a Software Task <br className="hidden sm:block" />
                We Can Help You With?
              </h2>
              <p className="text-gray-200 font-light text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Share your requirements and our experts will get back to you with the best solution, timeline, and estimation.
              </p>
            </div>

            {/* Right Buttons / Actions */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
              <Link
                to="#contact"
                className="group flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-white bg-primary-blue hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
            
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-2.5 text-sm sm:text-base font-semibold text-gray-200 hover:text-white transition-colors duration-300"
              >
                <FiPhoneCall className="h-4 w-4 text-blue-400" />
                <span>Call us: +91 12345 67890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
