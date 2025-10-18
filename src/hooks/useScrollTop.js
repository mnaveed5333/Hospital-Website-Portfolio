import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  // Also provide a manual scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return scrollToTop
}

export default useScrollTop