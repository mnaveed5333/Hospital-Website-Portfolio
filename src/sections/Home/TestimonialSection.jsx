import React, { useEffect, useState, useRef } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Ayesha Malik',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar1.png',
      rating: 5,
      text:
        'The care I received at HospitalCare was exceptional. The doctors were kind, skilled, and explained everything clearly.'
    },
    {
      name: 'Hamza Khan',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar2.png',
      rating: 5,
      text:
        'Very professional staff and modern facilities. I highly recommend HospitalCare for quality healthcare.'
    },
    {
      name: 'Fatima Ahmed',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar3.png',
      rating: 5,
      text:
        'The team helped me through a difficult time with patience and genuine care. Truly grateful for their support.'
    },
    {
      name: 'Ali Raza',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar4.png',
      rating: 5,
      text:
        'Excellent service and friendly staff. I felt comfortable and confident in their treatment.'
    },
    {
      name: 'Hina Baloch',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar5.png',
      rating: 5,
      text:
        'From appointment to follow-up, everything was smooth. The doctors and nurses were truly caring.'
    },
    {
      name: 'Usman Qureshi',
      role: 'Patient',
      image: 'https://i.ibb.co/2NbdH35/avatar6.png',
      rating: 5,
      text:
        'HospitalCare provides excellent healthcare with modern equipment and a dedicated medical team.'
    }
  ]

  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const timeoutRef = useRef(null)
  const rotateMs = 4000

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length)
    }, rotateMs)
    return () => clearTimeout(timeoutRef.current)
  }, [startIndex, testimonials.length])

  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(startIndex + i) % testimonials.length])
    }
    return result
  }

  return (
    <section className="py-16 bg-[#FFFFFF] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16A34A]">
            What Our Patients Say
          </h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto text-[#475569]">
            Real patient experiences from HospitalCare — compassionate, professional, and trusted.
          </p>
        </div>

        {/* Testimonials */}
        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-700 ease-in-out">
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[300px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <FaQuoteLeft size={28} style={{ color: 'rgba(6,182,212,0.15)' }} />
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <FaStar
                        key={s}
                        size={14}
                        style={{ color: '#16A34A' }}
                        className="mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-base italic text-[#0F172A]/90">{`"${t.text}"`}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#16A34A] object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#0F172A]">{t.name}</div>
                    <div className="text-sm text-[#475569]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default TestimonialSection
