import React from 'react'
import { FaUserMd } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

const DoctorCard = ({ doctor }) => {
  const { name, specialty, degree, image } = doctor
  const navigate = useNavigate()

  const handleAppointmentClick = () => {
    navigate('/appointment', { state: { selectedDoctor: doctor } })
  }

  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden"
    >
      <div className="p-4 sm:p-6 flex flex-col items-center text-center">
        {/* Doctor Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#16A34A] overflow-hidden mb-3 sm:mb-4 shadow-sm">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-[#16A34A] text-3xl sm:text-4xl bg-white">
              <FaUserMd />
            </div>
          )}
        </div>

        {/* Doctor Info */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-1">
          {name}
        </h3>
        <p className="text-[#16A34A] font-medium text-sm sm:text-base mb-1">
          {specialty}
        </p>
        <p className="text-[#475569] text-xs sm:text-sm">
          {degree}
        </p>

        {/* Appointment Button */}
        <div className="mt-3 sm:mt-4">
          <Button
            onClick={handleAppointmentClick}
            size="sm"
            className="bg-[#16A34A] hover:bg-[#15803d] text-white font-medium rounded-lg px-3 sm:px-4 py-2 transition-colors duration-300 text-sm sm:text-base"
          >
            Book Appointment
          </Button>
        </div>

        {/* Accent Line */}
        <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-1 rounded-full bg-[#16A34A]"></div>
      </div>
    </div>
  )
}

export default DoctorCard
