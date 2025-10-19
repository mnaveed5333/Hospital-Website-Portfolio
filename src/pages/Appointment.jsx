import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const doctors = [
  {
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    degree: 'MBBS, MD Cardiology',
    image: 'https://tse2.mm.bing.net/th/id/OIP.AmxvG008YZpeVa7nsuhA8wHaHw?cb=12&w=936&h=980&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Dr. Ahmed Ali',
    specialty: 'Neurologist',
    degree: 'MBBS, FCPS Neurology',
    image: 'https://tse3.mm.bing.net/th/id/OIP.kh4omcWsGJVvUFcrKHFleQHaHw?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Dr. Sara Malik',
    specialty: 'Orthopedic Surgeon',
    degree: 'MBBS, MS Orthopedics',
    image: 'https://tse3.mm.bing.net/th/id/OIP.dD12pfbbQ3kBHxvtDqIblwHaHv?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Dr. Bilal Hassan',
    specialty: 'Ophthalmologist',
    degree: 'MBBS, FCPS Ophthalmology',
    image: 'https://tse2.mm.bing.net/th/id/OIP.PG1cUfCS94n8LqlNicABkgHaHw?cb=12&w=936&h=980&rs=1&pid=ImgDetMain&o=7&rm=30'
  },
  {
    name: 'Dr. Zara Iftikhar',
    specialty: 'Dentist',
    degree: 'BDS, MDS',
    image: 'https://tse3.mm.bing.net/th/id/OIP.9Kp8lmAjTccyZdBHO3_figHaHa?cb=12&w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Dr. Imran Waseem',
    specialty: 'General Physician',
    degree: 'MBBS, MD General Medicine',
    image: 'https://static.vecteezy.com/system/resources/previews/046/680/127/non_2x/an-pakistani-male-doctor-on-isolated-transparent-background-png.png'
  }
]

const timeSlots = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM'
]

const Appointment = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', doctor: '', message: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (location.state?.selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctor: location.state.selectedDoctor.name
      }))
    }
  }, [location.state])

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
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Create WhatsApp message
      const message = `Appointment Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDoctor: ${formData.doctor}\nDate: ${formData.date}\nTime: ${formData.time}${formData.message ? `\nMessage: ${formData.message}` : ''}`
      const whatsappUrl = `https://wa.me/923012345678?text=${encodeURIComponent(message)}`

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      // Reset form
      setFormData({ name: '', email: '', phone: '', date: '', time: '', doctor: '', message: '' })
    }
  }

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#16A34A] to-[#16A34A] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Book an Appointment</h1>

        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-screen bg-[#FFFFFF] py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-xl shadow-lg border border-[#E5E7EB] p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" error={errors.name} />
                <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" error={errors.phone} />
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Select Doctor</label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-[#E5E7EB] rounded-lg bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent ${errors.doctor ? 'border-red-500 focus:ring-red-500' : ''}`}
                  >
                    <option value="">Choose a doctor</option>
                    {doctors.map((doc, idx) => (
                      <option key={idx} value={doc.name}>{doc.name} - {doc.specialty}</option>
                    ))}
                  </select>
                  {errors.doctor && <p className="mt-1 text-sm text-red-600">{errors.doctor}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input label="Preferred Date" type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} error={errors.date} />
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Preferred Time</label>
                  <select name="time" value={formData.time} onChange={handleChange} className={`w-full px-3 py-2 border border-[#E5E7EB] rounded-lg bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent ${errors.time ? 'border-red-500 focus:ring-red-500' : ''}`}>
                    <option value="">Choose a time</option>
                    {timeSlots.map((time, idx) => <option key={idx} value={time}>{time}</option>)}
                  </select>
                  {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} sm:rows={4}
                  placeholder="Describe your symptoms or reason for visit..."
                  className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg bg-white text-[#0F172A] placeholder-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-none text-sm sm:text-base"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" className="bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold rounded-lg w-full text-sm sm:text-base">Book Appointment</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      
    </div>
  )
}

export default Appointment
