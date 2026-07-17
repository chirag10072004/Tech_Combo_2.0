import React from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiTarget, FiLayers, FiCheckSquare, FiSend } from 'react-icons/fi'

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Requirement Analysis',
      desc: 'We gather and analyze your requirements to create a robust software roadmap.',
      icon: <FiSearch className="h-6 w-6" />,
    },
    {
      id: 2,
      number: '02',
      title: 'Planning & Strategy',
      desc: 'We design the architecture, select the tech stack, and structure project phases.',
      icon: <FiTarget className="h-6 w-6" />,
    },
    {
      id: 3,
      number: '03',
      title: 'Design & Development',
      desc: 'Our engineers build clean, high-performance, and scalable digital solutions.',
      icon: <FiLayers className="h-6 w-6" />,
    },
    {
      id: 4,
      number: '04',
      title: 'Testing & QA',
      desc: 'We perform rigorous quality assurance checks to ensure reliable, bug-free software solutions.',
      icon: <FiCheckSquare className="h-6 w-6" />,
    },
    {
      id: 5,
      number: '05',
      title: 'Deployment & Support',
      desc: 'We deploy the application smoothly and provide 24/7 post-launch maintenance.',
      icon: <FiSend className="h-6 w-6" />,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
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
            How We Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base font-normal"
          >
            From alignment to delivery, we follow a transparent and streamlined approach.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Horizontal connecting line (Desktop only) */}
          <div className="absolute top-[35px] left-8 right-8 h-[2px] border-t border-dashed border-blue-200 z-0 hidden lg:block" />

          {/* Vertical connecting line (Mobile/Tablet only) */}
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] border-l border-dashed border-blue-200 z-0 lg:hidden" />

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative flex flex-row lg:flex-col items-start lg:items-center group"
              >

                {/* Visual Connector Node & Number Badge */}
                <div className="flex-shrink-0 flex items-center justify-center w-[64px] h-[64px] lg:mb-8 rounded-full bg-white border-2 border-blue-100 text-green-600 shadow-md group-hover:border-green-600 group-hover:shadow-[0_4px_15px_rgba(37,99,235,0.2)] transition-all duration-300 relative z-10">
                  <span className="text-sm font-bold font-mono">{step.number}</span>
                </div>

                {/* Content Card (placed next to node on mobile, below on desktop) */}
                <div className="ml-6 lg:ml-0 lg:text-center flex-grow flex flex-col items-start lg:items-center space-y-4">

                  {/* Card wrapper to resemble high-end container */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-[0_15px_35px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300 w-full flex flex-col items-start lg:items-center text-left lg:text-center space-y-4">
                    {/* Icon container */}
                    <div className="p-3 rounded-xl bg-blue-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#071329] group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Step Desc */}
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {step.desc}
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

export default ProcessSection
