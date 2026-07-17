import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiPackage, FiShield, FiHeadphones } from 'react-icons/fi'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Experienced Professionals',
      desc: 'Skilled team with proven industry experience.',
      icon: <FiAward className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Scalable Solutions',
      desc: 'Built for performance and future growth.',
      icon: <FiPackage className="h-6 w-6" />,
    },
    {
      id: 3,
      title: 'Secure & Reliable',
      desc: 'Security-first approach at every step.',
      icon: <FiShield className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Support You Can Trust',
      desc: '24/7 assistance and long-term partnership.',
      icon: <FiHeadphones className="h-6 w-6" />,
    },
  ]

  return (
    <section className="relative py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50/50 border border-blue-100/60 rounded-[24px] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle Glow Effect Inside Banner */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-green-600 block">
                Why Choose Us
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329] leading-tight">
                Building Solutions That Drive <span className="text-green-600">Real Impact</span>
              </h2>
              
              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
                We combine expertise, innovation, and commitment to deliver software that helps businesses grow faster and smarter.
              </p>
            </div>

            {/* Vertical Separator Line (Only visible on desktop lg+) */}
            <div className="hidden lg:block lg:col-span-1 h-36 w-[1px] bg-blue-100 justify-self-center" />

            {/* Right Grid (Features) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {features.map((feat) => (
                <div key={feat.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 group">
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-2xl bg-white border border-blue-100/50 shadow-sm text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#071329] group-hover:text-green-600 transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs
