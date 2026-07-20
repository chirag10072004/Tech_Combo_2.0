import React from 'react'
import { FaHeadphones, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const ContactCTA = () => {
  return (
    <div className="w-full bg-[#EBF3FF]/60 rounded-3xl p-6 md:p-8 border border-[#DBEAFE]/80 relative overflow-hidden">
      {/* Background Decorative Dot Patterns */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.06] select-none pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#2563EB">
          <circle cx="6" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="34" cy="6" r="2" />
          <circle cx="48" cy="6" r="2" />
          <circle cx="6" cy="20" r="2" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="34" cy="20" r="2" />
          <circle cx="48" cy="20" r="2" />
          <circle cx="6" cy="34" r="2" />
          <circle cx="20" cy="34" r="2" />
          <circle cx="34" cy="34" r="2" />
          <circle cx="48" cy="34" r="2" />
          <circle cx="6" cy="48" r="2" />
          <circle cx="20" cy="48" r="2" />
          <circle cx="34" cy="48" r="2" />
          <circle cx="48" cy="48" r="2" />
        </svg>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.06] select-none pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#2563EB">
          <circle cx="6" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="34" cy="6" r="2" />
          <circle cx="48" cy="6" r="2" />
          <circle cx="6" cy="20" r="2" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="34" cy="20" r="2" />
          <circle cx="48" cy="20" r="2" />
          <circle cx="6" cy="34" r="2" />
          <circle cx="20" cy="34" r="2" />
          <circle cx="34" cy="34" r="2" />
          <circle cx="48" cy="34" r="2" />
          <circle cx="6" cy="48" r="2" />
          <circle cx="20" cy="48" r="2" />
          <circle cx="34" cy="48" r="2" />
          <circle cx="48" cy="48" r="2" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side: Icon & Copy */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-5 flex-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary-blue shadow-md border border-slate-100 flex-shrink-0">
            <FaHeadphones className="h-6.5 w-6.5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary-blue">Need immediate assistance?</h3>
            <p className="text-sm md:text-base text-slate-500 font-normal mt-1 leading-relaxed">
              Call us directly or drop an email. Our team is happy to help!
            </p>
          </div>
        </div>

        {/* Right Side: Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center space-x-2.5 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-2xl w-full sm:w-auto text-sm transition-all duration-300 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-0.5 hover:shadow-md shadow-sm"
          >
            <FaPhoneAlt className="h-3.5 w-3.5" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@techcombo.in"
            className="flex items-center justify-center space-x-2.5 bg-primary-blue text-white font-semibold px-6 py-3.5 rounded-2xl w-full sm:w-auto text-sm transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)] shadow-sm"
          >
            <FaEnvelope className="h-3.5 w-3.5" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactCTA
