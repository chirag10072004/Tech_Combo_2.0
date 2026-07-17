import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa'
const Logo = '/assets/Home/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/#industries' },
    { name: 'Our Work', path: '/#our-work' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const servicesLinks = [
    { name: 'Custom Software Development', path: '#custom-software' },
    { name: 'Mobile Development', path: '#web-mobile' },
    { name: 'Cloud Solutions', path: '#cloud-solutions' },
    { name: 'Web Development', path: '#ai-ml' },
    { name: 'Cybersecurity', path: '#cybersecurity' },
    { name: 'IT Consulting', path: '#it-consulting' },
  ]

  const industriesLinks = [
    { name: 'Fintech', path: '#fintech' },
    { name: 'Healthcare', path: '#healthcare' },
    { name: 'Retail', path: '#retail' },
    { name: 'Education', path: '#education' },
    { name: 'Logistics', path: '#logistics' },
    { name: 'Real Estate', path: '#real-estate' },
    { name: 'Manufacturing', path: '#manufacturing' },
    { name: 'Startups', path: '#startups' },
  ]

  return (
    <footer className="relative bg-[#050e1d] text-gray-400 pt-20 pb-8 border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Col 1: Bio & Logo */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={Logo} alt="TechCombo Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              We deliver innovative IT solutions that empower businesses to grow, scale, and succeed in the digital era.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-950/40 border border-blue-900/30 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-950/40 border border-blue-900/30 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-950/40 border border-blue-900/30 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-950/40 border border-blue-900/30 hover:border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-light hover:text-primary-blue transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Services & Industries */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <div className="flex flex-col space-y-2.5">
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-light hover:text-primary-blue transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 mt-0.5 text-primary-blue flex-shrink-0" />
                <span>123, Tech Park, Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-primary-blue flex-shrink-0" />
                <a href="mailto:info@techcombo.in" className="hover:text-primary-blue transition-colors duration-300">
                  info@techcombo.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="h-4 w-4 text-primary-blue flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary-blue transition-colors duration-300">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegClock className="h-4 w-4 mt-0.5 text-primary-blue flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line & Meta Info */}
        <div className="pt-8 border-t border-blue-950/40 flex flex-col md:flex-row items-center justify-between text-xs font-light text-gray-500 gap-4">
          <p>© {currentYear} TechCombo. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="#privacy" className="hover:text-primary-blue transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#terms" className="hover:text-primary-blue transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
