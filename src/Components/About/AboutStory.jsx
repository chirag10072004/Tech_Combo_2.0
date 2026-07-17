import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiUsers, FiCloud, FiAward } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

const AboutStory = () => {
  const journey = [
    {
      id: 1,
      year: '2020',
      title: 'Founded',
      desc: 'Company founded with a vision to deliver quality IT solutions.',
      icon: <FiCalendar className="h-6 w-6" />,
    },
    {
      id: 2,
      year: '2021',
      title: 'Expansion',
      desc: 'Expanded software development capabilities and development team.',
      icon: <FiUsers className="h-6 w-6" />,
    },
    {
      id: 3,
      year: '2022',
      title: 'Innovation',
      desc: 'Started delivering cloud solutions, AI integration, and enterprise applications.',
      icon: <FiCloud className="h-6 w-6" />,
    },
    {
      id: 4,
      year: '2023',
      title: 'Global Delivery',
      desc: 'Successfully completed 100+ business projects across multiple industries.',
      icon: <FiAward className="h-6 w-6" />,
    },
    {
      id: 5,
      year: 'Today',
      title: 'Scale & Growth',
      desc: 'Building scalable software products, AI solutions, and digital platforms for businesses worldwide.',
      icon: <FaRocket className="h-6 w-6" />,
    },
  ]

  // Animations configuration
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const nodeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
           
            <div className="w-8 h-[2px] bg-green-600 mt-2 rounded" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329]"
          >
            OUR JOURNEY
          </motion.h2>
        </div>

        {/* Timeline Visual Container */}
        <div className="relative">
          
          {/* Horizontal line for desktop */}
          <div className="absolute top-[32px] left-12 right-12 h-[2px] bg-blue-100 z-0 hidden lg:block" />

          {/* Vertical line for mobile */}
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-blue-100 z-0 lg:hidden" />

          {/* Timeline Nodes Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10"
          >
            {journey.map((node) => (
              <motion.div
                key={node.id}
                variants={nodeVariants}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Node Icon Circle */}
                <div className="flex-shrink-0 w-[64px] h-[64px] rounded-full bg-white border-2 border-blue-100 text-green-600 flex items-center justify-center shadow-sm group-hover:border-green-400 group-hover:shadow-[0_4px_15px_rgba(37,99,235,0.2)] transition-all duration-300 relative z-10">
                  {node.icon}
                </div>

                {/* Content area: positioned to the right on mobile, below on desktop */}
                <div className="ml-6 lg:ml-0 lg:mt-6 space-y-2">
                  {/* Year Tag */}
                  <span className="text-xl font-bold text-green-800 font-mono block">
                    {node.year}
                  </span>
                  
                  {/* Title / Description */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#071329]">
                      {node.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-xs">
                      {node.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default AboutStory
