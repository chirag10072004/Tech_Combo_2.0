import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiAward, FiCheck } from 'react-icons/fi'

const AboutMissionValues = () => {
  const values = [
    'Innovation',
    'Customer Success',
    'Quality',
    'Continuous Learning',
    'Transparency',
    'Integrity'
  ]

  // Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.12,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Our Mission */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-[24px] border border-slate-100 p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-blue-50/70 border border-blue-100/30 text-green-600 w-fit">
              <FiTarget className="h-7 w-7" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071329]">
                Our Mission
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
                Empower businesses through innovative technology solutions that drive growth and efficiency, creating a measurable digital footprint.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-[24px] border border-slate-100 p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-blue-50/70 border border-blue-100/30 text-green-600 w-fit">
              <FiEye className="h-7 w-7" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071329]">
                Our Vision
              </h3>
              <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
                Become a trusted global technology partner, recognized globally for engineering world-class software products and digital systems.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Our Values */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-[24px] border border-slate-100 p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-6"
          >
            <div className="inline-flex p-4 rounded-2xl bg-blue-50/70 border border-blue-100/30 text-green-600 w-fit">
              {/* Diamond-like outline icon */}
              <FiAward className="h-7 w-7" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071329]">
                Our Values
              </h3>
              
              {/* Values Checklist */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-1">
                {values.map((val, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-500 text-sm">
                    <span className="flex-shrink-0 p-0.5 rounded bg-blue-50 text-green-800">
                      <FiCheck className="h-3 w-3" />
                    </span>
                    <span className="font-light leading-none">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutMissionValues
