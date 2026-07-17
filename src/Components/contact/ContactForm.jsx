import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaTag, FaComment, FaPaperPlane, FaLock } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simple verification
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setStatus({ type: 'info', message: 'Sending message...' })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100/80">
      {/* Card Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-primary-blue flex-shrink-0">
          <FaUser className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Send Us a Message</h2>
          <div className="w-12 h-0.5 bg-primary-blue rounded-full mt-1.5" />
        </div>
      </div>

      {status.message && (
        <div className={`p-4 mb-6 rounded-xl text-sm font-medium ${
          status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {status.message}
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div className="relative">
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaUser className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              required
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaUser className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              required
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaEnvelope className="h-4 w-4" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaPhoneAlt className="h-4 w-4" />
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Company Name (Optional) */}
          <div className="relative md:col-span-2">
            <label htmlFor="company" className="sr-only">Company Name</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaBuilding className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Subject */}
          <div className="relative md:col-span-2">
            <label htmlFor="subject" className="sr-only">Subject</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/80 pointer-events-none">
              <FaTag className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Message */}
          <div className="relative md:col-span-2">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <span className="absolute left-4 top-5 text-slate-400/80 pointer-events-none">
              <FaComment className="h-4 w-4" />
            </span>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              rows="5"
              className="w-full bg-[#FCFDFE] text-slate-800 placeholder-slate-400 border border-slate-200/70 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm resize-none"
            />
          </div>
        </div>

        {/* Submit and Notice */}
        <div className="pt-4 space-y-4">
          <button
            type="submit"
            className="px-8 py-4 rounded-xl text-sm font-semibold text-white bg-primary-blue hover:bg-blue-700 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <FaPaperPlane className="h-3.5 w-3.5" />
          </button>

          <div className="flex items-center space-x-2 text-xs text-slate-400 font-light pt-2">
            <FaLock className="h-3.5 w-3.5 text-slate-350" />
            <span>Your information is secure and will not be shared.</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
