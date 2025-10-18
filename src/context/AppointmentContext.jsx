import React, { createContext, useContext, useState, useEffect } from 'react'

const AppointmentContext = createContext()

export const useAppointment = () => {
  const context = useContext(AppointmentContext)
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider')
  }
  return context
}

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)

  // Load appointments from localStorage on mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments')
    if (savedAppointments) {
      try {
        setAppointments(JSON.parse(savedAppointments))
      } catch (error) {
        console.error('Error loading appointments:', error)
      }
    }
  }, [])

  // Save appointments to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  const addAppointment = async (appointmentData) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newAppointment = {
        id: Date.now().toString(),
        ...appointmentData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }

      setAppointments(prev => [...prev, newAppointment])
      return { success: true, appointment: newAppointment }
    } catch (error) {
      console.error('Error booking appointment:', error)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const updateAppointment = (id, updates) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === id
          ? { ...appointment, ...updates }
          : appointment
      )
    )
  }

  const cancelAppointment = (id) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === id
          ? { ...appointment, status: 'cancelled' }
          : appointment
      )
    )
  }

  const getAppointmentsByStatus = (status) => {
    return appointments.filter(appointment => appointment.status === status)
  }

  const getUpcomingAppointments = () => {
    const now = new Date()
    return appointments
      .filter(appointment => {
        const appointmentDate = new Date(`${appointment.date}T${appointment.time}`)
        return appointmentDate > now && appointment.status === 'confirmed'
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`)
        const dateB = new Date(`${b.date}T${b.time}`)
        return dateA - dateB
      })
  }

  const value = {
    appointments,
    loading,
    addAppointment,
    updateAppointment,
    cancelAppointment,
    getAppointmentsByStatus,
    getUpcomingAppointments
  }

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentContext