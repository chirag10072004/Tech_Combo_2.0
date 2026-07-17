import React from 'react'
import {
  FiDollarSign,
  FiActivity,
  FiShoppingCart,
  FiBookOpen,
  FiTruck,
  FiHome,
  FiBriefcase,
} from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const Industries = () => {
  const industriesList = [
    {
      name: 'Fintech',
      subtitle: 'Payments • Banking',
      icon: <FiDollarSign className="h-7 w-7" />,
    },
    {
      name: 'Healthcare',
      subtitle: 'EMR • Telemedicine',
      icon: <FiActivity className="h-7 w-7" />,
    },
    {
      name: 'Retail & E-commerce',
      subtitle: 'POS • Online Store',
      icon: <FiShoppingCart className="h-7 w-7" />,
    },
    {
      name: 'Education',
      subtitle: 'LMS • E-learning',
      icon: <FiBookOpen className="h-7 w-7" />,
    },
    {
      name: 'Logistics',
      subtitle: 'Fleet • Tracking',
      icon: <FiTruck className="h-7 w-7" />,
    },
    {
      name: 'Real Estate',
      subtitle: 'CRM • Property',
      icon: <FiHome className="h-7 w-7" />,
    },
    {
      name: 'Manufacturing',
      subtitle: 'ERP • Automation',
      icon: <FiBriefcase className="h-7 w-7" />,
    },
    {
      name: 'Startups',
      subtitle: 'MVP • SaaS',
      icon: <FaRocket className="h-7 w-7" />,
    },
  ]

  return (
    <section
      id="industries"
      className="py-16 bg-white overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver innovative software solutions tailored to the unique
            needs of businesses across diverse industries.
          </p>
        </div>

        <Swiper
          className="overflow-visible !pb-6"
          modules={[Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {industriesList.map((industry) => (
            <SwiperSlide
              key={industry.name}
              className="overflow-visible py-4"
            >
              <div className="bg-white border border-black rounded-2xl p-8 h-56 flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50 cursor-pointer">

                <div className="w-16 h-16 rounded-xl bg-blue-50 text-green-600 flex items-center justify-center mb-6">
                  {industry.icon}
                </div>

                <h3 className="text-xl font-semibold text-green-900">
                  {industry.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {industry.subtitle}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Industries