import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckSquare, FiSmile, FiAward, FiUsers, FiArrowRight } from 'react-icons/fi'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Achievement = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      id: 1,
      icon: <FiCheckSquare className="h-7 w-7 text-primary-blue" />,
      value: 1200,
      suffix: '+',
      label: 'Projects',
      sublabel: 'Delivered',
      bg: 'bg-blue-50',
    },
    {
      id: 2,
      icon: <FiSmile className="h-7 w-7 text-emerald-500" />,
      value: 125,
      suffix: '+',
      label: 'Happy',
      sublabel: 'Clients',
      bg: 'bg-emerald-50',
    },
    {
      id: 3,
      icon: <FiAward className="h-7 w-7 text-amber-500" />,
      value: 5,
      suffix: '+',
      label: 'Years of',
      sublabel: 'Excellence',
      bg: 'bg-amber-50',
    },
    {
      id: 4,
      icon: <FiUsers className="h-7 w-7 text-indigo-500" />,
      value: 50,
      suffix: '+',
      label: 'IT Experts &',
      sublabel: 'Developers',
      bg: 'bg-indigo-50',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 bg-white text-gray-900 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy and Link */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark-navy leading-tight">
              Achievements <br className="hidden lg:block" />
              That Define Us
            </h2>
            <div className="w-12 h-1 bg-primary-blue mx-auto lg:mx-0 rounded" />
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0 font-light text-base leading-relaxed">
              Numbers that reflect our commitment to excellence, client success, and delivering top-tier software and hardware integrations worldwide.
            </p>
            <div className="pt-2">
              <Link
                to="#about"
                className="inline-flex items-center space-x-2 text-black font-semibold hover:text-green-400 transition-colors duration-300 group"
              >
                <span>Know More About Us</span>
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Side: Grid of 4 Floating Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                >
                  {/* Icon Wrapper */}
                  <div className={`p-4 rounded-2xl ${stat.bg} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  
                  {/* Large Number */}
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-dark-navy mb-2 flex items-center justify-center font-mono">
                    {inView ? (
                      (() => {
                        const CountUpComponent = CountUp.default || CountUp;
                        return <CountUpComponent end={stat.value} duration={2.5} />;
                      })()
                    ) : (
                      '0'
                    )}
                    <span>{stat.suffix}</span>
                  </span>
                  
                  {/* Label & Description */}
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-xs sm:text-sm font-light text-gray-400">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Achievement
