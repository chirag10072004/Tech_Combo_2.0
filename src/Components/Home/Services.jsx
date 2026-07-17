import React from 'react'
import { Link } from 'react-router-dom'
import { FiCode, FiSmartphone, FiCloud, FiCpu, FiShield, FiArrowRight } from 'react-icons/fi'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: <FiCode className="h-6 w-6 text-green-700" />,
      title: 'Custom Software Development',
      desc: 'End-to-end custom software solutions tailored to your unique business needs and requirements',
      link: '/',
    },
    {
      id: 2,
      icon: <FiSmartphone className="h-6 w-6 text-green-700" />,
      title: 'App Development',
      desc: 'Custom mobile applications designed for speed, scalability, and exceptional user engagement',
      link: '#web-mobile',
    },
    {
      id: 3,
      icon: <FiCloud className="h-6 w-6 text-green-700" />,
      title: 'Cloud Solutions',
      desc: 'Scalable, secure, and cost-effective cloud infrastructure solutions on AWS, Azure & GCP',
      link: '#cloud-solutions',
    },
    {
      id: 4,
      icon: <FiCpu className="h-6 w-6 text-green-700" />,
      title: 'Web Development',
      desc: 'Modern, responsive websites that deliver great user experiences and performance',
      link: '#ai-ml',
    },
    {
      id: 5,
      icon: <FiShield className="h-6 w-6 text-green-700" />,
      title: 'Cybersecurity Services',
      desc: 'Protect your business with robust security audits, compliance, and threat mitigation models',
      link: '#cybersecurity',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-[#97e183] text-gray-900 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark-navy">
            Our IT Services
          </h2>
          <div className="w-12 h-1 bg-primary-green mx-auto rounded" />
          <p className="text-black-600 max-w-xl mx-auto  text-sm sm:text-base">
            We take software tasks from requirements to deployment and support, enabling your business growth.
          </p>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="inline-flex p-3 rounded-xl bg-blue-50 border border-blue-100/50 transition-colors duration-300 group-hover:bg-primary-black group-hover:border-primary-green group-hover:text-white text-primary-blue">
                  <span className="transition-colors duration-300 group-hover:text-white">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-dark-navy leading-snug group-hover:text-primary-blue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Learn More link */}
              <div className="pt-6 border-t border-gray-50 mt-6">
                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-1 text-sm font-semibold text-primary-blue group-hover:text-blue-700 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
