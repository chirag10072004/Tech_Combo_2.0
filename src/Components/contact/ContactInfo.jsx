import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock, FaInfoCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100/80 h-full flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-primary-blue flex-shrink-0">
            <FaInfoCircle className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">Contact Information</h2>
            <div className="w-12 h-0.5 bg-primary-blue rounded-full mt-1.5" />
          </div>
        </div>

        {/* Info Items */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex-shrink-0 mt-0.5 shadow-sm">
              <FaMapMarkerAlt className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Our Location</h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed mt-1">
                123 Tech Park, Innovation Street, Bangalore, Karnataka 560102, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex-shrink-0 mt-0.5 shadow-sm">
              <FaPhoneAlt className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Phone Number</h3>
              <div className="flex flex-col text-sm text-slate-500 font-normal mt-1 space-y-0.5">
                <a href="tel:+919876543210" className="hover:text-primary-blue transition-colors duration-200">
                  +91 98765 43210
                </a>
                <a href="tel:+918765432109" className="hover:text-primary-blue transition-colors duration-200">
                  +91 87654 32109
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex-shrink-0 mt-0.5 shadow-sm">
              <FaEnvelope className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Email Address</h3>
              <div className="flex flex-col text-sm text-slate-500 font-normal mt-1 space-y-0.5">
                <a href="mailto:hello@techcombo.in" className="hover:text-primary-blue transition-colors duration-200">
                  hello@techcombo.in
                </a>
                <a href="mailto:info@techcombo.in" className="hover:text-primary-blue transition-colors duration-200">
                  info@techcombo.in
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex-shrink-0 mt-0.5 shadow-sm">
              <FaRegClock className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Business Hours</h3>
              <div className="flex flex-col text-sm text-slate-500 font-normal mt-1 space-y-1">
                <span className="flex justify-between gap-4">
                  <span>Mon - Fri:</span>
                  <span className="font-medium text-slate-700">9:00 AM - 7:00 PM</span>
                </span>
                <span className="flex justify-between gap-4">
                  <span>Saturday:</span>
                  <span className="font-medium text-slate-700">10:00 AM - 2:00 PM</span>
                </span>
                <span className="flex justify-between gap-4">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-500 font-semibold">Closed</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="pt-8 mt-8 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Follow Us</h3>
        <div className="flex items-center space-x-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-white border border-slate-200/60 text-slate-600 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
          >
            <FaLinkedinIn className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-white border border-slate-200/60 text-slate-600 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
          >
            <FaTwitter className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-white border border-slate-200/60 text-slate-600 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
          >
            <FaFacebookF className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-white border border-slate-200/60 text-slate-600 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
          >
            <FaInstagram className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
