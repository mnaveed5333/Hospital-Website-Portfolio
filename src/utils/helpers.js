// Date and Time Helpers
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatTime = (timeString) => {
  // Convert 24-hour format to 12-hour format if needed
  const [hours, minutes] = timeString.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

// Form Validation Helpers
export const validateRequired = (value) => {
  return value && value.trim() !== '' ? '' : 'This field is required'
}

export const validateEmail = (email) => {
  return isValidEmail(email) ? '' : 'Please enter a valid email address'
}

export const validatePhone = (phone) => {
  return isValidPhone(phone) ? '' : 'Please enter a valid phone number'
}

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength
    ? ''
    : `Must be at least ${minLength} characters long`
}

export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength
    ? ''
    : `Must be no more than ${maxLength} characters long`
}

// Appointment Helpers
export const isAppointmentInPast = (date, time) => {
  const appointmentDateTime = new Date(`${date}T${time}`)
  const now = new Date()
  return appointmentDateTime < now
}

export const getAvailableTimeSlots = (date, bookedSlots = []) => {
  const TIME_SLOTS = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]

  if (!date) return TIME_SLOTS

  const today = new Date().toISOString().split('T')[0]
  const isToday = date === today

  return TIME_SLOTS.filter(slot => {
    if (isToday) {
      const now = new Date()
      const slotTime = new Date(`${date}T${slot}`)
      // Don't show past time slots for today
      if (slotTime <= now) return false
    }

    // Filter out booked slots
    return !bookedSlots.includes(slot)
  })
}

// String Helpers
export const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const slugify = (string) => {
  return string
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Array Helpers
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key]
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {})
}

export const sortBy = (array, key, order = 'asc') => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1
    return 0
  })
}

// Local Storage Helpers
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error getting ${key} from localStorage:`, error)
    return defaultValue
  }
}

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting ${key} to localStorage:`, error)
  }
}

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error)
  }
}

// URL Helpers
export const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

export const setQueryParam = (param, value) => {
  const url = new URL(window.location)
  url.searchParams.set(param, value)
  window.history.pushState({}, '', url)
}

// Debounce Helper
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Generate Unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}