import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AppointmentProvider } from './context/AppointmentContext'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import useScrollTop from './hooks/useScrollTop'

const AppContent = () => {
  useScrollTop() // Scroll to top on route change

  return (
    <div className="min-h-screen bg-white text-primary-text">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppointmentProvider>
        <Router>
          <AppContent />
        </Router>
      </AppointmentProvider>
    </ThemeProvider>
  )
}

export default App