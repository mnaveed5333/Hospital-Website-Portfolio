import React from 'react'
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaStethoscope } from 'react-icons/fa'
import ServiceCard from '../components/cards/ServiceCard'

const Services = () => {
  const services = [
    {
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.',
      icon: <FaHeartbeat className="text-[#16A34A]" />,
      features: ['Heart disease diagnosis', 'Cardiac surgery', 'Heart failure treatment', 'Preventive cardiology']
    },
    {
      title: 'Neurology',
      description: 'Advanced neurological care for brain and nervous system disorders.',
      icon: <FaBrain className="text-[#16A34A]" />,
      features: ['Stroke treatment', 'Epilepsy management', "Parkinson's care", 'Headache treatment']
    },
    {
      title: 'Orthopedics',
      description: 'Expert orthopedic care for bones, joints, and musculoskeletal conditions.',
      icon: <FaBone className="text-[#16A34A]" />,
      features: ['Joint replacement', 'Sports medicine', 'Fracture care', 'Arthritis treatment']
    },
    {
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures.',
      icon: <FaEye className="text-[#16A34A]" />,
      features: ['Vision correction', 'Cataract surgery', 'Glaucoma treatment', 'Retinal care']
    },
    {
      title: 'Dentistry',
      description: 'Comprehensive dental care for all ages with modern techniques and equipment.',
      icon: <FaTooth className="text-[#16A34A]" />,
      features: ['General dentistry', 'Cosmetic dentistry', 'Oral surgery', 'Dental implants']
    },
    {
      title: 'General Medicine',
      description: 'Primary healthcare services for preventive care and treatment of common illnesses.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Preventive care', 'Chronic disease management', 'Health screenings', 'Vaccinations']
    },
    {
      title: 'Dermatology',
      description: 'Comprehensive skin care services including diagnosis and treatment of skin conditions.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Acne treatment', 'Skin cancer screening', 'Cosmetic dermatology', 'Allergy testing']
    },
    {
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Well-child visits', 'Vaccinations', 'Developmental screenings', 'Pediatric emergencies']
    },
    {
      title: 'Gynecology',
      description: 'Comprehensive women\'s health services including reproductive and gynecological care.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Prenatal care', 'Pap smears', 'Family planning', 'Menopause management']
    },
    {
      title: 'Urology',
      description: 'Specialized care for urinary tract and male reproductive system disorders.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Kidney stone treatment', 'Prostate care', 'Urinary incontinence', 'Vasectomy']
    },
    {
      title: 'Psychiatry',
      description: 'Mental health services for diagnosis and treatment of psychiatric disorders.',
      icon: <FaBrain className="text-[#16A34A]" />,
      features: ['Depression treatment', 'Anxiety management', 'Therapy sessions', 'Medication management']
    },
    {
      title: 'Radiology',
      description: 'Advanced imaging services for accurate diagnosis and treatment planning.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['MRI scans', 'CT scans', 'X-rays', 'Ultrasound']
    },
    {
      title: 'Emergency Medicine',
      description: '24/7 emergency care for critical medical situations requiring immediate attention.',
      icon: <FaHeartbeat className="text-[#16A34A]" />,
      features: ['Trauma care', 'Critical care', 'Emergency surgery', 'Life support']
    },
    {
      title: 'Oncology',
      description: 'Comprehensive cancer care including diagnosis, treatment, and supportive care.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Chemotherapy', 'Radiation therapy', 'Cancer screening', 'Palliative care']
    },
    {
      title: 'Endocrinology',
      description: 'Specialized care for hormonal disorders and metabolic conditions.',
      icon: <FaStethoscope className="text-[#16A34A]" />,
      features: ['Diabetes management', 'Thyroid disorders', 'Hormone therapy', 'Metabolic disorders']
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#16A34A] to-[#16A34A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Emergency Services</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              24/7 emergency care available for critical situations requiring immediate medical attention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaHeartbeat, title: 'Heart Attack', desc: 'Immediate cardiac care' },
              { icon: FaBrain, title: 'Stroke', desc: 'Rapid neurological intervention' },
              { icon: FaBone, title: 'Trauma', desc: 'Emergency orthopedic care' },
              { icon: FaStethoscope, title: 'Critical Care', desc: 'Intensive care unit' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm border border-[#E5E7EB] text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#16A34A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className=" text-[#F8FAFC]" size={24} />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{title}</h3>
                <p className="text-sm text-[#475569]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
