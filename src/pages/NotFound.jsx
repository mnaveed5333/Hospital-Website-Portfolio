import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-card">
      <div className="max-w-md mx-auto text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-6 sm:mb-8">
          <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-primary-accent opacity-20">404</div>
        </div>

        {/* Content */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16A34A] mb-3 sm:mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary-text text-base sm:text-lg mb-6 sm:mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="space-y-3 sm:space-y-4">
          <Button size="lg" className="w-full">
            <Link to="/" className="flex items-center justify-center space-x-2">
              <FaHome size={16} sm:size={18} />
              <span className="text-sm sm:text-base">Go to Homepage</span>
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="w-full">
            <Link to="/contact" className="flex items-center justify-center space-x-2">
              <FaSearch size={16} sm:size={18} />
              <span className="text-sm sm:text-base">Contact Support</span>
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-base sm:text-lg font-semibold text-[#16A34A] mb-3 sm:mb-4">
            Popular Pages
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/services"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200 text-sm sm:text-base"
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200 text-sm sm:text-base"
            >
              Doctors
            </Link>
            <Link
              to="/appointment"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200 text-sm sm:text-base"
            >
              Book Appointment
            </Link>
            <Link
              to="/about"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200 text-sm sm:text-base"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound