import React from 'react'

const ServiceCard = ({ service }) => {
  const { title, description, icon, features } = service

  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden p-4 sm:p-6 flex flex-col transition-all duration-300"
    >
      {/* Icon & Title */}
      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#16A34A]/20 to-[#06B6D4]/20 rounded-xl flex items-center justify-center text-xl sm:text-2xl">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-[#475569] mb-3 sm:mb-4 flex-1 text-sm sm:text-base">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-1 sm:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-1"></div>
              <span className="text-xs sm:text-sm text-[#475569]">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
