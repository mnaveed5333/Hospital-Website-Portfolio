import React, { useEffect, useState, useRef } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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
  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3)
  const timeoutRef = useRef(null)
  const containerRef = useRef(null)
  const rotateMs = 5000

  const { contextSafe } = useGSAP()

  // ✅ Animation function
  const animateTestimonials = contextSafe(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }
    )
  })

  // ✅ Auto slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext()
    }, rotateMs)
    return () => clearTimeout(timeoutRef.current)
  }, [startIndex])

  // ✅ Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    animateTestimonials()
  }, [startIndex, visibleCount])

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : (prev - 1) % testimonials.length
    )
  }

  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(startIndex + i) % testimonials.length])
    }
    return result
  }

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16A34A]">
            What Our Patients Say
          </h2>
          <p className="mt-2 text-base sm:text-lg max-w-2xl mx-auto text-[#475569]">
            Real patient experiences from HospitalCare — compassionate, professional, and trusted.
          </p>
        </div>

        {/* Testimonials */}
        <div className="overflow-hidden relative">
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out"
          >
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[280px] sm:min-w-[300px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-4 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-2 sm:mb-3">
                    <FaQuoteLeft size={24} style={{ color: 'rgba(6,182,212,0.15)' }} />
                  </div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <FaStar
                        key={s}
                        size={14}
                        style={{ color: '#16A34A' }}
                        className="mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base italic text-[#0F172A]/90">{`"${t.text}"`}</p>
                </div>
                <div className="mt-4 sm:mt-6 flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-[#16A34A] object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#0F172A] text-sm sm:text-base">
                      {t.name}
                    </div>
                    <div className="text-xs sm:text-sm text-[#475569]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#16A34A] text-white p-2 rounded-full shadow-md hover:bg-[#15803d] transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#16A34A] text-white p-2 rounded-full shadow-md hover:bg-[#15803d] transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
