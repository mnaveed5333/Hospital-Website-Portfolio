import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-card">
      <div className="max-w-md mx-auto text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-accent opacity-20">404</div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-[#16A34A] mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary-text text-lg mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Button size="lg" className="w-full">
            <Link to="/" className="flex items-center justify-center space-x-2">
              <FaHome size={18} />
              <span>Go to Homepage</span>
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="w-full">
            <Link to="/contact" className="flex items-center justify-center space-x-2">
              <FaSearch size={18} />
              <span>Contact Support</span>
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-[#16A34A] mb-4">
            Popular Pages
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200"
            >
              Doctors
            </Link>
            <Link
              to="/appointment"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <Link
              to="/about"
              className="text-secondary-accent hover:text-primary-accent transition-colors duration-200"
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