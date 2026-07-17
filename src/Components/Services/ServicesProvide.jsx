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

const ServicesProvide = () => {
  const services = [
    {
      id: 1,
      title: 'Fintech',
      desc: 'Payments • Banking',
      icon: <FiDollarSign className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Healthcare',
      desc: 'EMR • Telemedicine',
      icon: <FiHeart className="h-6 w-6" />,
    },
    {
      id: 3,
      title: 'Retail & E-commerce',
      desc: 'POS • Online Store',
      icon: <FiShoppingCart className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Education',
      desc: 'LMS • E-learning',
      icon: <FiBookOpen className="h-6 w-6" />,
    },
    {
      id: 5,
      title: 'Logistics',
      desc: 'Fleet • Tracking',
      icon: <FiTruck className="h-6 w-6" />,
    },
    {
      id: 6,
      title: 'Real Estate',
      desc: 'CRM • Property',
      icon: <FiHome className="h-6 w-6" />,
    },
    {
      id: 7,
      title: 'Manufacturing',
      desc: 'ERP • Automation',
      icon: <FiCpu className="h-6 w-6" />,
    },
    {
      id: 8,
      title: 'Startups',
      desc: 'MVP • SaaS',
      icon: <FaRocket className="h-6 w-6" />,
    },
  ]

  // Framer Motion Animation Configurations
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
    <section id="services-list" className="relative py-24 bg-[#F8FAFC]">
      {/* Background elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl pointer-events-none opacity-40" />

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

            <div className="w-8 h-[2px] bg-green-600 mt-2 rounded" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329]"
          >
            Services We Provide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-normal"
          >
            Choose your industry to discover tailored digital solutions.
          </motion.p>
        </div>

        {/* 8-Card Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white p-8 rounded-[22px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="inline-flex p-4 rounded-2xl bg-blue-50/70 border border-blue-100/30 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  {service.icon}
                </div>

                <div className="space-y-2">
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#071329] group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Subtitle / Details */}
                  <p className="text-sm font-normal text-slate-400 group-hover:text-slate-500 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesProvide
