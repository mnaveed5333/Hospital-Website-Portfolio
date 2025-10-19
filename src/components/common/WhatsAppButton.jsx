import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/923405542097'
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#16A34A] hover:bg-[#15803d] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  )
}

export default WhatsAppButton