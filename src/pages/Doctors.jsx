import React from 'react'
import DoctorCard from '../components/cards/DoctorCard'

const Doctors = () => {
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

  const specialties = [
    ['Cardiology', 'Heart & vascular care'],
    ['Neurology', 'Brain & nervous system'],
    ['Orthopedics', 'Bones & joints'],
    ['Ophthalmology', 'Eye care'],
    ['Dentistry', 'Dental health'],
    ['General Medicine', 'Primary care'],
    ['Pediatrics', "Children's health"],
    ['Dermatology', 'Skin care']
  ]

  return (
    <div className="min-h-screen bg-[#FFFFFF]">

      {/* 🩺 Hero Section */}
      <section className="bg-gradient-to-r from-[#16A34A] to-[#16A34A] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Meet Our Doctors</h1>

        </div>
      </section>

      {/* 👨‍⚕️ Doctors Grid */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 🏥 Specialties Section */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3 sm:mb-4">Medical Specialties</h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
            We offer comprehensive care across multiple medical specialties to meet all your healthcare needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {specialties.map(([title, desc], idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#E5E7EB] hover:shadow-md hover:border-[#16A34A] transition-all duration-300"
              >
                <h3 className="font-semibold text-[#0F172A] mb-1 sm:mb-2 text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-[#475569]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctors
