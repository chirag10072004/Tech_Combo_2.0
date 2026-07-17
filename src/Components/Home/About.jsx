import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
const OfficeImg = '/assets/Home/office.png';

const About = () => {
  const checklist = [
    'Client-focused approach',
    'Agile development process',
    'On-time delivery',
    'Quality & security assured',
  ]

  return (
    <section id="about" className="relative py-24 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Play Video Overlay */}
          <div className="lg:col-span-6 relative group">
            {/* Soft decorative shadow background */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-blue to-green-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-35 transition duration-500" />
            
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl border border-gray-100">
              <img
                src={OfficeImg}
                alt="TechCombo Office Team Working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Copywriting Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Section Header */}
            <div className="space-y-2">
         
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark-navy leading-tight">
                Building Technology Solutions <br className="hidden sm:block" />
                That Empower Businesses
              </h2>
            </div>
            
            {/* Separator line */}
            <div className="w-12 h-1 bg-primary-blue rounded" />

            {/* Description */}
            <p className="text-gray-600 font-light text-base leading-relaxed">
              We are a team of passionate technologists, designers, and problem-solvers who love turning ideas into reality. Our mission is to deliver high-quality, scalable, and innovative solutions that create real business impact.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-700">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 border border-blue-100 text-primary-blue flex-shrink-0">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button Link */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-black hover:bg-green-400 shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                More About Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
