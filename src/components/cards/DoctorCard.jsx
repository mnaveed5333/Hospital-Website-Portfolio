import React from 'react'
import { motion } from 'framer-motion'
import { FaUserMd } from 'react-icons/fa'

const DoctorCard = ({ doctor }) => {
  const { name, specialty, degree, image } = doctor

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="group bg-[#FFFFFF] rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-[#16A34A]"
    >
      <div className="p-6 flex flex-col items-center text-center transition-colors duration-300">
        {/* Doctor Image */}
        <div className="w-24 h-24 rounded-full border-4 border-[#16A34A] overflow-hidden mb-4 shadow-sm group-hover:border-white transition-colors duration-300">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-[#16A34A] text-4xl bg-white group-hover:text-[#16A34A] transition-colors duration-300">
              <FaUserMd />
            </div>
          )}
        </div>

        {/* Doctor Info */}
        <h3 className="text-xl font-semibold text-[#0F172A] mb-1 group-hover:text-white transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[#16A34A] font-medium text-base mb-1 group-hover:text-[#06B6D4] transition-colors duration-300">
          {specialty}
        </p>
        <p className="text-[#475569] text-sm group-hover:text-[#F8FAFC] transition-colors duration-300">
          {degree}
        </p>

        {/* Accent Line */}
        <div className="mt-4 w-12 h-1 rounded-full bg-[#06B6D4] transition-colors duration-300 group-hover:bg-white"></div>
      </div>
    </motion.div>
  )
}

export default DoctorCard
