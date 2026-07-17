import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { FiCode, FiCloud, FiShield, FiSmartphone, FiCpu } from 'react-icons/fi'

const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex items-center overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background mask */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6">

            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start"
            >

            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#071329] leading-tight"
            >
              Building Digital Solutions <br />
              That Power <span className="text-green-600">Business Growth</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              TechCombo is a technology company helping businesses transform ideas into scalable
              digital products. We build custom software, AI-powered applications, cloud solutions,
              mobile apps, and enterprise systems that enable organizations to innovate and grow.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                to="/services"
                className="group flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-green-600 hover:bg-black shadow-[0_6px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Our Services</span>
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-green-600 border border-blue-200 bg-white hover:bg-blue-50/55 hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Premium 3D-like Mockup Illustration */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

              {/* Glowing Connection Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="aboutGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.15" />
                  </linearGradient>
                  <filter id="aboutGlowF" x="-25%" y="-25%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Connecting Lines */}
                {/* To Cloud (Top Left: 110, 110) */}
                <motion.path
                  d="M 250 250 L 110 110"
                  stroke="url(#aboutGlow)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                />
                <circle cx="110" cy="110" r="3" fill="#2563EB" filter="url(#aboutGlowF)" />

                {/* To Phone (Top Right: 390, 110) */}
                <motion.path
                  d="M 250 250 L 390 110"
                  stroke="url(#aboutGlow)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                />
                <circle cx="390" cy="110" r="3" fill="#2563EB" filter="url(#aboutGlowF)" />

                {/* To AI Cube (Mid Left: 80, 260) */}
                <motion.path
                  d="M 250 250 L 80 260"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2.5 }}
                />
                <circle cx="80" cy="260" r="3" fill="#2563EB" filter="url(#aboutGlowF)" />

                {/* To Security Shield (Mid Right: 420, 240) */}
                <motion.path
                  d="M 250 250 L 420 240"
                  stroke="url(#aboutGlow)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2.2 }}
                />
                <circle cx="420" cy="240" r="3" fill="#2563EB" filter="url(#aboutGlowF)" />
              </svg>

              {/* Laptop Screen Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-[320px] sm:w-[360px] md:w-[400px] flex flex-col items-center"
              >
                {/* Laptop Screen */}
                <div className="w-[300px] sm:w-[340px] md:w-[360px] aspect-[1.6] bg-slate-900 rounded-t-2xl p-2.5 border-t border-x border-slate-700/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-full bg-slate-950 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <div className="flex space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[9px] text-slate-500 font-mono">digital-transformation.py</span>
                      <div className="w-2" />
                    </div>

                    {/* Workspace body */}
                    <div className="grid grid-cols-12 gap-2 mt-2 flex-grow items-stretch">
                      {/* Sidebar */}
                      <div className="col-span-3 border-r border-slate-900 pr-1 flex flex-col space-y-1.5">
                        <div className="h-2 w-full bg-green-600/40 rounded animate-pulse" />
                        <div className="h-1.5 w-4/5 bg-slate-800 rounded" />
                        <div className="h-1.5 w-3/4 bg-slate-800 rounded" />
                        <div className="h-1.5 w-5/6 bg-slate-800 rounded" />
                      </div>

                      {/* Code Area */}
                      <div className="col-span-9 pl-1 flex flex-col justify-between space-y-2">
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            className="text-blue-500"
                          >
                            <FiCpu className="h-5 w-5" />
                          </motion.div>
                          <div className="flex flex-col space-y-1">
                            <div className="h-1.5 w-20 bg-slate-700 rounded" />
                            <div className="h-1 w-12 bg-slate-850 rounded" />
                          </div>
                        </div>

                        {/* Python Code Snippet */}
                        <div className="bg-slate-950/80 border border-slate-900 rounded p-1.5 font-mono text-[7px] text-emerald-400 space-y-0.5">
                          <div><span className="text-blue-400">def</span> <span className="text-yellow-400">innovate</span>(idea):</div>
                          <div className="pl-2">product = transform(idea)</div>
                          <div className="pl-2">product.scale(<span className="text-amber-500">True</span>)</div>
                          <div className="pl-2"><span className="text-blue-400">return</span> product.launch()</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Base keyboard body */}
                <div className="w-[340px] sm:w-[380px] md:w-[410px] h-3 bg-slate-800 rounded-b-2xl border-t border-slate-600 shadow-[0_12px_24px_rgba(7,19,41,0.3)] relative flex justify-center">
                  <div className="w-12 sm:w-16 h-1 bg-slate-700 rounded-b" />
                </div>

                <div className="w-[280px] sm:w-[320px] h-2 bg-blue-500/10 blur-[10px] rounded-full mt-1" />
              </motion.div>

              {/* Floating Badge 1: Cloud (Top Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[60px] left-[60px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiCloud className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Floating Badge 2: Mobile Phone (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[60px] right-[60px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FiSmartphone className="h-6 w-6 text-green-600" />
                </div>
              </motion.div>

              {/* Floating Badge 3: AI Cube (Mid Left) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[210px] left-[20px] z-20"
              >
                <div className="bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.08)] border border-blue-50 flex items-center justify-center hover:scale-110 transition-transform duration-300 text-green-600">
                  <span className="font-bold text-xs font-mono">AI</span>
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

              {/* Floating glassmorphic cubes */}
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

              {/* API Connection badge floating */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute bottom-[40px] left-[100px] z-20"
              >
                
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero