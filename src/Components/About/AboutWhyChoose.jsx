import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiUsers, 
  FiRefreshCw, 
  FiCpu, 
  FiShield, 
  FiClock, 
  FiHeadphones 
} from 'react-icons/fi'

const AboutWhyChoose = () => {
  const cardsList = [
    {
      id: 1,
      title: 'Experienced Developers',
      desc: 'Skilled professionals with deep expertise in modern technologies.',
      icon: <FiUsers className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Agile Development',
      desc: 'We follow agile methodologies to deliver fast and efficient results.',
      icon: <FiRefreshCw className="h-6 w-6" />,
    },
    {
      id: 3,
      title: 'Modern Tech Stack',
      desc: 'We use the latest tools and frameworks to build future-ready solutions.',
      icon: <FiCpu className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Secure Architecture',
      desc: 'Security and scalability built-in at every stage of development.',
      icon: <FiShield className="h-6 w-6" />,
    },
    {
      id: 5,
      title: 'On-Time Delivery',
      desc: 'We value your time and ensure timely delivery always.',
      icon: <FiClock className="h-6 w-6" />,
    },
    {
      id: 6,
      title: 'Long-Term Support',
      desc: 'Dedicated support and maintenance for long-term success.',
      icon: <FiHeadphones className="h-6 w-6" />,
    },
  ]

  // Animations configuration
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-24 bg-[#F8FAFC]">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Our Core Strengths
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
            WHY CHOOSE TECHCOMBO
          </motion.h2>
        </div>

        {/* 6-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cardsList.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-white p-8 rounded-[22px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left space-y-6 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="inline-flex p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100/30 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#071329] group-hover:text-green-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutWhyChoose
