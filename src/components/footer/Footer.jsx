import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Emergency Care', path: '/services' },
      { name: 'Cardiology', path: '/services' },
      { name: 'Neurology', path: '/services' },
      { name: 'Orthopedics', path: '/services' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Doctors', path: '/doctors' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Insurance', path: '/insurance' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-[#E1306C]' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' }
  ]

  return (
    <footer className="bg-[#F8FAFC] pt-8 sm:pt-12 relative">
      {/* Top Accent Bar */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">HospitalCare</h3>
            <p className="text-[#475569] text-xs sm:text-sm">
              Providing exceptional healthcare services with compassion and expertise. Your health and well-being are our top priorities.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-[#475569] transition-colors duration-200 ${social.color}`}
                >
                  <social.icon size={18} sm:size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#475569] hover:text-[#16A34A] transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">Company</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#475569] hover:text-[#16A34A] transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">Support</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#475569] hover:text-[#16A34A] transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E5E7EB] mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-[#475569]">
          <p className="text-center md:text-left">© {currentYear} Apexium Technologies. +923405542097<br className="sm:hidden" /> All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#16A34A] transition-colors duration-200">Privacy</Link>
            <Link to="/terms" className="hover:text-[#16A34A] transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
