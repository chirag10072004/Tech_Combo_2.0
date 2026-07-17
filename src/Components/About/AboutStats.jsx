import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiLayers, FiUsers, FiCode, FiAward } from 'react-icons/fi'

const AboutStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      id: 1,
      value: 1200,
      suffix: '+',
      label: 'Projects Delivered',
      icon: <FiLayers className="h-6 w-6" />,
    },
    {
      id: 2,
      value: 125,
      suffix: '+',
      label: 'Happy Clients',
      icon: <FiUsers className="h-6 w-6" />,
    },
    {
      id: 3,
      value: 50,
      suffix: '+',
      label: 'Software Engineers',
      icon: <FiCode className="h-6 w-6" />,
    },
    {
      id: 4,
      value: 5,
      suffix: '+',
      label: 'Years Experience',
      icon: <FiAward className="h-6 w-6" />,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section ref={ref} className="relative py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              className="bg-blue-50/30 border border-blue-100/50 p-8 rounded-[20px] shadow-sm hover:shadow-md hover:bg-white hover:border-blue-100 transition-all duration-300 flex items-center space-x-5 group cursor-default"
            >
              {/* Icon container */}
              <div className="p-3.5 rounded-2xl bg-white border border-blue-100/50 text-green-600 shadow-sm flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              {/* Number and Label */}
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#071329] font-mono flex items-center">
                  {inView ? (
                    (() => {
                      const CountUpComponent = CountUp.default || CountUp;
                      return <CountUpComponent end={stat.value} duration={2.5} />;
                    })()
                  ) : (
                    '0'
                  )}
                  <span className="text-green-600">{stat.suffix}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-500 font-light tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutStats
