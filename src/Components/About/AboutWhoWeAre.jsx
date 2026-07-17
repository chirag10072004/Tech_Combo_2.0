import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
const officeImg = '/assets/Home/office.png';

const AboutWhoWeAre = () => {
  const checklist = [
    'Custom Software Development',
    'Cloud Solutions',
    'Web Applications',
    'Cybersecurity',
    'Mobile App Development',
    'UI/UX Design',
    'AI & Machine Learning',
    'Maintenance & Support'
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Team / Office Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[540px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(7,19,41,0.1)] border border-slate-100/60 bg-white p-2 group">
              <div className="overflow-hidden rounded-[20px] aspect-[4/3] relative">
                <img 
                  src={officeImg} 
                  alt="TechCombo team collaborating at the office" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-green-600/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-3">
            
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329] leading-tight">
                Technology Driven.<br />Business Focused.
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Since our beginning, TechCombo has focused on delivering innovative software solutions 
              that solve real business problems. Our experienced developers, designers, architects, 
              and technology consultants collaborate to create secure, scalable, and high-performance 
              digital products for startups, SMEs, and enterprises.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 text-left">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <FiCheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700 text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutWhoWeAre
