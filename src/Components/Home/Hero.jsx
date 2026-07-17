import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const HeroImg = '/assets/Home/Hero_IMAGE_BACKGROUND.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Light dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-9 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            We Build Powerful
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Software Solutions
            </span>
            <br />
            That Drive Growth
          </h1>

          <p className="mt-8 text-lg text-gray-200 leading-8 max-w-2xl">
            TechCombo is a full-service IT company that transforms ideas into
            powerful digital products. We specialize in custom software
            development, web applications, mobile apps, cloud solutions, AI,
            and enterprise technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-black hover:bg-green-400 transition flex items-center justify-center gap-2 text-white font-semibold"
            >
              Discuss Your Project
              <FaArrowRight />
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition font-semibold text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero