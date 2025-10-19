import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaStethoscope } from 'react-icons/fa';
import ServiceCard from '../../components/cards/ServiceCard';
import Button from '../../components/common/Button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.',
      icon: <FaHeartbeat className="text-[#16A34A]" size={24} />,
      features: ['Heart disease diagnosis', 'Cardiac surgery', 'Heart failure treatment'],
    },
    {
      title: 'Neurology',
      description: 'Advanced neurological care for brain and nervous system disorders.',
      icon: <FaBrain className="text-[#16A34A]" size={24} />,
      features: ['Stroke treatment', 'Epilepsy management', "Parkinson's care"],
    },
    {
      title: 'Orthopedics',
      description: 'Expert orthopedic care for bones, joints, and musculoskeletal conditions.',
      icon: <FaBone className="text-[#16A34A]" size={24} />,
      features: ['Joint replacement', 'Sports medicine', 'Fracture care'],
    },
    {
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures.',
      icon: <FaEye className="text-[#16A34A]" size={24} />,
      features: ['Vision correction', 'Cataract surgery', 'Glaucoma treatment'],
    },
    {
      title: 'Dentistry',
      description: 'Comprehensive dental care for all ages with modern techniques and equipment.',
      icon: <FaTooth className="text-[#16A34A]" size={24} />,
      features: ['General dentistry', 'Cosmetic dentistry', 'Oral surgery'],
    },
    {
      title: 'General Medicine',
      description: 'Primary healthcare services for preventive care and treatment of common illnesses.',
      icon: <FaStethoscope className="text-[#16A34A]" size={24} />,
      features: ['Preventive care', 'Chronic disease management', 'Health screenings'],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
            Our Medical Services
          </h2>
          <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto">
            We provide comprehensive healthcare services with state-of-the-art technology
            and compassionate care for all your medical needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-[#16A34A] hover:bg-[#15803d] text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;