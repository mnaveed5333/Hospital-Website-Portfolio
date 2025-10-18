import React from 'react'
import { FaAward, FaUsers, FaClock, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Button from '../components/common/Button'

const About = () => {
  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Patients Served' },
    { icon: FaAward, value: '25+', label: 'Years of Excellence' },
    { icon: FaClock, value: '24/7', label: 'Emergency Support' },
    { icon: FaHeart, value: '98%', label: 'Patient Satisfaction' }
  ]

  const values = [
    {
      title: 'Compassion',
      description:
        'We treat every patient with genuine empathy and respect, recognizing the human story behind each medical case.'
    },
    {
      title: 'Excellence',
      description:
        'We deliver world-class medical care, guided by best practices and continuous improvement in everything we do.'
    },
    {
      title: 'Integrity',
      description:
        'We uphold honesty, transparency, and ethical care to build trust with patients and their families.'
    },
    {
      title: 'Innovation',
      description:
        'We embrace advanced technologies and modern treatments to enhance health outcomes and patient experiences.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#16A34A] to-[#16A34A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About HospitalCare
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            At HospitalCare, we combine compassion, innovation, and expertise to deliver
            exceptional healthcare services to our community for over 25 years.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                Welcome to HospitalCare
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-6">
                HospitalCare has been a cornerstone of healthcare excellence in Pakistan for over 25 years.
                Our commitment to providing world-class medical services has made us a trusted name in
                healthcare, serving thousands of patients with compassion, expertise, and innovation.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed mb-6">
                We combine state-of-the-art medical technology with a patient-centered approach,
                ensuring that every individual receives personalized care tailored to their unique needs.
                Our team of highly qualified medical professionals works tirelessly to deliver outstanding
                health outcomes and improve the quality of life for our patients.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed">
                At HospitalCare, we believe that healthcare is not just about treating illnesses,
                but about building lasting relationships with our patients and their families,
                fostering trust, and promoting wellness in our community.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="HospitalCare Medical Facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#16A34A]/20 transition">
                  <stat.icon className="text-[#16A34A]" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-2">
                  {stat.value}
                </h3>
                <p className="text-[#475569] text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      

      {/* Our Values Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto leading-relaxed">
              These values guide our mission to provide safe, trusted, and patient-centered healthcare every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E7EB] hover:shadow-lg hover:border-[#16A34A]/30 transition"
              >
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#16A34A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Take the first step toward better health. Book your appointment today and experience exceptional care from trusted medical experts.
          </p>
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

        </div>
      </section>
    </div>
  )
}

export default About
