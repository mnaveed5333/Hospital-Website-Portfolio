import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  const { title, description, icon, features } = service

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-[#FFFFFF] rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden p-6 flex flex-col transition-all duration-300"
    >
      {/* Icon & Title */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-[#16A34A]/20 to-[#06B6D4]/20 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-[#475569] mb-4 flex-1">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-1"></div>
              <span className="text-sm text-[#475569]">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default ServiceCard
