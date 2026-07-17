import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiDollarSign, 
  FiHeart, 
  FiShoppingCart, 
  FiBookOpen, 
  FiTruck, 
  FiHome, 
  FiCpu 
} from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

const AboutIndustries = () => {
  const industries = [
    { name: 'Fintech', icon: <FiDollarSign className="h-6 w-6" /> },
    { name: 'Healthcare', icon: <FiHeart className="h-6 w-6" /> },
    { name: 'Retail & E-commerce', icon: <FiShoppingCart className="h-6 w-6" /> },
    { name: 'Education', icon: <FiBookOpen className="h-6 w-6" /> },
    { name: 'Logistics', icon: <FiTruck className="h-6 w-6" /> },
    { name: 'Real Estate', icon: <FiHome className="h-6 w-6" /> },
    { name: 'Manufacturing', icon: <FiCpu className="h-6 w-6" /> },
    { name: 'Startups', icon: <FaRocket className="h-6 w-6" /> },
  ]

  // Animations configuration
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Sectors We Serve
            </span>
            <div className="w-8 h-[2px] bg-green-600 mt-2 rounded" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329]"
          >
            INDUSTRIES WE BUILD FOR
          </motion.h2>
        </div>

        {/* 8-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white p-6 sm:p-8 rounded-[22px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="inline-flex p-4 rounded-full bg-blue-50/70 border border-blue-100/30 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {ind.icon}
              </div>
              
              {/* Industry Name */}
              <h3 className="text-sm sm:text-base font-bold text-[#071329] group-hover:text-green-600 transition-colors duration-300">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutIndustries
