import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Contact form submitted:', formData)
      alert('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Medical Center Drive', 'Healthcare City, HC 12345']
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568 (Emergency)']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@hospitalcare.com', 'appointments@hospitalcare.com']
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 5:00 PM']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#16A34A] to-[#16A34A] text-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
    
  </div>
</section>


      {/* Contact Section */}
      <div className="min-h-screen py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#F8FAFC] rounded-2xl shadow-sm border border-[#E5E7EB] p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    error={errors.name}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  error={errors.subject}
                />

                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please enter your message..."
                    className={`w-full px-3 py-2 border rounded-lg bg-white placeholder-[#94A3B8] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-none transition ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold rounded-lg transition"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#F8FAFC] border border-transparent hover:border-[#E5E7EB] transition"
                    >
                      <div className="w-12 h-12 bg-[#16A34A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-[#16A34A]" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0F172A] mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#475569]">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <FaPhone className="text-red-600" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800">Emergency?</h3>
              <p className="text-red-700">
                For medical emergencies, please call <span className="font-bold">(555) 911-0000</span> immediately or visit our emergency department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
