import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../sections/Home/HeroSection'
import ServicesSection from '../sections/Home/ServicesSection'
import TestimonialSection from '../sections/Home/TestimonialSection'

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16"
        style={{ background: '#16A34A' }} /* Primary background */
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Book an appointment today and take the first step towards better health.
            Our experienced medical professionals are here to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            {/* Primary / Outline CTA (both identical styling) */}
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.95)',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF'
                e.currentTarget.style.color = '#16A34A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              aria-label="Book Appointment"
            >
              Book Appointment
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.95)',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF'
                e.currentTarget.style.color = '#16A34A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              aria-label="Contact Us"
            >
              Contact Us
            </Link>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
