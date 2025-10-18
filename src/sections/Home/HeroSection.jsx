import React from 'react'
import { FaUserMd, FaHospital, FaHeartbeat, FaCalendarCheck, FaAward } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  const features = [
    { text: 'Verified Pakistani Doctors', icon: MdVerified },
    { text: 'Easy Appointment Booking', icon: FaCalendarCheck }
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <FaAward className="text-green-600" size={16} />
              <span className="text-green-700 font-medium text-sm">Most Trusted Healthcare in Pakistan</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health is Our <span className="text-green-600">Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Connect with Pakistan's top medical specialists. Book appointments and receive world-class healthcare from the comfort of your home.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <feature.icon className="text-green-600 flex-shrink-0" size={20} />
                  <span className="font-medium">{feature.text}</span>
                </div>
                
              ))}
            </div>

            
          </div>

          {/* Right Content - Doctor Image */}
          <div className="flex-1 relative w-full max-w-xl cursor-pointer" onClick={() => navigate('/doctors')}>
            {/* Background Gradient Circle */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-100 to-green-100 z-0 animate-pulse-slow" />
            </div>

            {/* Doctor Image */}
            <div className="relative z-10">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/680/179/original/an-pakistani-male-doctor-on-isolated-transparent-background-png.png"
                alt="Pakistani Doctor"
                className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle Card - Experience */}
            
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
