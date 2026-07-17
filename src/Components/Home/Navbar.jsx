import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'
const Logo = '/assets/Home/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const location = useLocation()
  const isLightNavbar = true

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash
      if (hash === '#services') {
        setActiveItem('Services')
      } else if (hash === '#industries') {
        setActiveItem('Industries')
      } else if (hash === '#product') {
        setActiveItem('Product')
      } else if (hash === '#our-work') {
        setActiveItem('Our Work')
      } else {
        setActiveItem('Home')
      }
    } else if (location.pathname === '/about') {
      setActiveItem('About Us')
    } else if (location.pathname === '/services') {
      setActiveItem('Services')
    } else if (location.pathname === '/contact') {
      setActiveItem('Contact Us')
    } else if (location.pathname === '/careers') {
      setActiveItem('Careers')
    }
  }, [location.pathname, location.hash])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/#industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const services = [
    { name: "Custom Software Development", path: "/services/staffing" },
    { name: "Web Development", path: "/services/manpower" },
    { name: "Cloud Solutions", path: "/services/payroll" },
    { name: "App Development", path: "/services/executive-search" },
    { name: "Cybersecurity Services", path: "/services/it-project" },
  ];

  const [showServices, setShowServices] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200/50 text-slate-800'
        : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 text-slate-800'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link
            to="/"
            onClick={() => setActiveItem('Home')}
            className="flex items-center space-x-3 group"
          >
            <img
              src={Logo}
              alt="TechCombo Logo"
              className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-120"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveItem(link.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-black ${activeItem === link.name
                  ? 'text-green-400'
                  : isLightNavbar
                    ? 'text-slate-600'
                    : 'text-gray-300'
                  }`}
              >
                {link.name}
                {/* Active Indicator Line */}
                {activeItem === link.name && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              onClick={() => setActiveItem('Contact Us')}
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-green-400 hover:bg-black shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300 ${isLightNavbar
                ? 'text-slate-700 hover:text-primary-blue hover:bg-slate-100'
                : 'text-gray-400 hover:text-white hover:bg-blue-900/30'
                }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Animated Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#071329] border-l border-blue-900/30 z-50 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-6 border-b border-blue-900/20">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="TechCombo Logo" className="h-8 w-auto" />

            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="mt-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setActiveItem(link.name)
                  setIsOpen(false)
                }}
                className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-blue-900/20 hover:text-primary-blue ${activeItem === link.name ? 'text-primary-blue bg-blue-900/10' : 'text-gray-300'
                  }`}
              >
                <span>{link.name}</span>
                <FaChevronRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="pb-8">
          <Link
            to="/contact"
            onClick={() => {
              setActiveItem('Contact Us')
              setIsOpen(false)
            }}
            className="block text-center w-full px-6 py-3 rounded-xl text-base font-semibold text-white bg-green-300 hover:bg-black transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar