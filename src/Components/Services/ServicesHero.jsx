import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { FiCode, FiCloud, FiShield, FiBarChart2, FiCpu } from 'react-icons/fi'

const ServicesHero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Background Soft Blue Gradients & Grids */}
     
      {/* Grid Overlay for subtle tech look */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Copywriting & Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6">

            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start"
            >

            </motion.div>

            {/* Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#071329] leading-tight"
            >
              Software Solutions <br />
              Built Around <span className="text-green-600">Your Business</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              We deliver end-to-end software development services tailored to your industry needs.
              From strategy and design to development and support, we build scalable digital products with
              modern technology, scalable architecture, and measurable results.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="group flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-green-600 hover:bg-blue-700 shadow-[0_6px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Discuss Your Project</span>
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#services-showcase"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-green-600 border border-blue-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Our Work
              </a>
            </motion.div>
          </div>

          {/* Right Column - Premium 3D-like Software/Laptop Illustration */}
          <div className="lg:col-span-6 flex justify-center relative">

            {/* Interactive/Animated Technical Elements Wrapper */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                {/* Defs for glowing effects */}
                <defs>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Connecting Lines: Laptop to Floating Cards */}
                {/* Line to Cloud Card (Top Left: 110, 110) */}
                <motion.path
                  d="M 250 250 L 110 110"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                />
                <circle cx="110" cy="110" r="3" fill="#2563EB" filter="url(#glowFilter)" />

                {/* Line to Code Card (Top Right: 390, 110) */}
                <motion.path
                  d="M 250 250 L 390 110"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                />
                <circle cx="390" cy="110" r="3" fill="#2563EB" filter="url(#glowFilter)" />

                {/* Line to Analytics Card (Mid Left: 80, 260) */}
                <motion.path
                  d="M 250 250 L 80 260"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2.5 }}
                />
                <circle cx="80" cy="260" r="3" fill="#2563EB" filter="url(#glowFilter)" />

                {/* Line to Security Card (Mid Right: 420, 240) */}
                <motion.path
                  d="M 250 250 L 420 240"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2.2 }}
                />
                <circle cx="420" cy="240" r="3" fill="#2563EB" filter="url(#glowFilter)" />
              </svg>

              {/* Central Laptop / Screen Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-[320px] sm:w-[360px] md:w-[400px] flex flex-col items-center"
              >
                {/* Laptop Screen Body */}
                <div className="w-[300px] sm:w-[340px] md:w-[360px] aspect-[1.6] bg-slate-900 rounded-t-2xl p-2.5 border-t border-x border-slate-700/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  {/* Screen Content - Dashboard representation */}
                  <div className="w-full h-full bg-slate-950 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden">
                    {/* Header bar of fake app */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <div className="flex space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[9px] text-slate-500 font-mono">techcombo-dashboard.js</span>
                      <div className="w-2" />
                    </div>

                    {/* Dashboard body */}
                    <div className="grid grid-cols-12 gap-2 mt-2 flex-grow items-stretch">
                      {/* Left Sidebar */}
                      <div className="col-span-3 border-r border-slate-900 pr-1 flex flex-col space-y-1.5">
                        <div className="h-2 w-full bg-green-600/40 rounded" />
                        <div className="h-1.5 w-4/5 bg-slate-800 rounded" />
                        <div className="h-1.5 w-3/4 bg-slate-800 rounded" />
                        <div className="h-1.5 w-5/6 bg-slate-800 rounded" />
                      </div>

                      {/* Right Workspace with gear and code representation */}
                      <div className="col-span-9 pl-1 flex flex-col justify-between space-y-2">
                        {/* Gears / Settings Animation */}
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="text-blue-500"
                          >
                            <FiCpu className="h-5 w-5 sm:h-6 sm:w-6" />
                          </motion.div>
                          <div className="flex flex-col space-y-1">
                            <div className="h-1.5 w-16 bg-slate-700 rounded" />
                            <div className="h-1 w-24 bg-slate-800 rounded" />
                          </div>
                        </div>

                        {/* Code editor snippet */}
                        <div className="bg-slate-950/80 border border-slate-900 rounded p-1.5 font-mono text-[7px] text-blue-400 space-y-0.5">
                          <div><span className="text-pink-500">const</span> service = () =&gt; &#123;</div>
                          <div className="pl-2"><span className="text-purple-400">return</span> deploy(&#123;</div>
                          <div className="pl-4">scale: <span className="text-amber-500">true</span>,</div>
                          <div className="pl-4">security: <span className="text-amber-500">'military'</span></div>
                          <div className="pl-2">&#125;);</div>
                          <div>&#125;;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard Base */}
                <div className="w-[340px] sm:w-[380px] md:w-[410px] h-3 bg-slate-800 rounded-b-2xl border-t border-slate-600 shadow-[0_12px_24px_rgba(7,19,41,0.3)] relative flex justify-center">
                  {/* Trackpad */}
                  <div className="w-12 sm:w-16 h-1 bg-slate-700 rounded-b" />
                </div>

                {/* Reflection/Glow below laptop */}
                <div className="w-[280px] sm:w-[320px] h-2 bg-blue-500/10 blur-[10px] rounded-full mt-1" />
              </motion.div>

              {/* Floating Badge 1: Cloud Service (Top Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[60px] left-[60px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiCloud className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Floating Badge 2: Coding Tag (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[60px] right-[60px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiCode className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Floating Badge 3: Data Analytics (Mid Left) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[210px] left-[20px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiBarChart2 className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Floating Badge 4: Security Shield (Mid Right) */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.7 }}
                className="absolute top-[200px] right-[20px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiShield className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Bottom Decorative Glowing Cube */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-[30px] right-[100px] z-20"
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-green-600 to-blue-400 rounded-lg shadow-[0_6px_15px_rgba(37,99,235,0.3)] opacity-70" />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
