import React from 'react'
import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-blue">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's <span className="text-primary-blue">Connect</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Have a project in mind or need expert guidance? We'd love to hear from you. Fill out the form or reach us using the information below.
            </p>
          </motion.div>

          {/* Right Column - Premium 3D-style SVG Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center relative select-none"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/20 to-blue-200/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              {/* Main SVG Illustration Canvas */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_20px_40px_rgba(37,99,235,0.08)]">
                
                {/* Background Grid Pattern (Dots) */}
                <defs>
                  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#2563EB" opacity="0.08" />
                  </pattern>
                </defs>
                <rect x="50" y="50" width="400" height="400" fill="url(#grid)" />

                {/* Floating Plus and Circle Accents */}
                <motion.g 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M 90 120 L 110 120 M 100 110 L 100 130" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="410" cy="180" r="6" fill="none" stroke="#60A5FA" strokeWidth="2" />
                  <path d="M 420 100 L 434 100 M 427 93 L 427 107" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="80" cy="360" r="4" fill="#93C5FD" opacity="0.7" />
                </motion.g>

                {/* Left Floating Paper Airplane */}
                <motion.g
                  animate={{ 
                    x: [0, 8, 0], 
                    y: [0, -12, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="cursor-pointer"
                >
                  {/* Shadow */}
                  <path d="M 70 205 L 140 135 L 100 215 Z" fill="#000" opacity="0.04" transform="translate(10, 20)" />
                  {/* Paper Airplane Body */}
                  <path d="M 60 190 L 130 120 L 90 200 Z" fill="#3B82F6" />
                  <path d="M 130 120 L 90 200 L 95 170 Z" fill="#60A5FA" />
                  <path d="M 130 120 L 95 170 L 60 190 Z" fill="#93C5FD" />
                </motion.g>

                {/* Envelope 3D Structure */}
                <motion.g
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Back Shadow */}
                  <rect x="180" y="200" width="220" height="150" rx="16" fill="#1E3A8A" opacity="0.05" transform="translate(10, 15)" />
                  
                  {/* Envelope Back Plate */}
                  <rect x="180" y="200" width="220" height="150" rx="16" fill="#DBEAFE" />

                  {/* Document / Paper Coming Out */}
                  <motion.g
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    {/* Document Shadow */}
                    <rect x="200" y="125" width="180" height="140" rx="10" fill="#000" opacity="0.03" transform="translate(0, 5)" />
                    {/* Document body */}
                    <rect x="200" y="120" width="180" height="140" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                    {/* Document content lines */}
                    <rect x="220" y="145" width="140" height="6" rx="3" fill="#E2E8F0" />
                    <rect x="220" y="165" width="140" height="6" rx="3" fill="#E2E8F0" />
                    <rect x="220" y="185" width="100" height="6" rx="3" fill="#E2E8F0" />
                    <rect x="220" y="205" width="70" height="6" rx="3" fill="#E2E8F0" />
                  </motion.g>

                  {/* Envelope Front / Pocket Sides */}
                  <path d="M 180 200 L 290 285 rx 8 L 400 200 L 400 334 C 400 343 393 350 384 350 L 196 350 C 187 350 180 343 180 334 Z" fill="#EFF6FF" />
                  {/* Left flap */}
                  <path d="M 180 200 L 290 285 L 180 350 Z" fill="#93C5FD" opacity="0.4" />
                  {/* Right flap */}
                  <path d="M 400 200 L 290 285 L 400 350 Z" fill="#93C5FD" opacity="0.3" />
                  {/* Bottom flap overlay */}
                  <path d="M 180 350 L 290 275 L 400 350 Z" fill="#BFDBFE" opacity="0.8" />
                </motion.g>

                {/* Floating Phone Bubble */}
                <motion.g
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 1.03, 1] 
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  {/* Outer White Card Bubble */}
                  <circle cx="360" cy="280" r="38" fill="#FFFFFF" filter="drop-shadow(0 8px 16px rgba(37,99,235,0.12))" />
                  {/* Inner Light Blue circle */}
                  <circle cx="360" cy="280" r="28" fill="#EFF6FF" />
                  {/* Deep Blue Circle */}
                  <circle cx="360" cy="280" r="22" fill="#2563EB" />
                  
                  {/* Phone Receiver path */}
                  <path 
                    d="M 354 271 
                       C 352.5 272.5 352 274.5 353 276.5
                       C 354.5 279.5 357.5 282.5 360.5 284
                       C 362.5 285 364.5 284.5 366 283
                       L 368 281
                       C 369 280 369 278.5 368 277.5
                       L 364.5 274
                       C 363.5 273 362 273 361 274
                       L 359.5 275.5
                       C 358.5 274.8 357.2 273.5 356.5 272.5
                       L 358 271
                       C 359 270 359 268.5 358 267.5
                       L 354.5 264
                       C 353.5 263 352 263 351 264
                       Z" 
                    fill="#FFFFFF" 
                    transform="translate(1.5, 3) scale(0.95)"
                  />
                </motion.g>

              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactHero
