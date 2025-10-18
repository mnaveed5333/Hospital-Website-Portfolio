// Hospital Information
export const HOSPITAL_INFO = {
  name: 'HospitalCare',
  address: '123 Medical Center Drive, Healthcare City, HC 12345',
  phone: '(555) 123-4567',
  emergencyPhone: '(555) 911-0000',
  email: 'info@hospitalcare.com',
  appointmentEmail: 'appointments@hospitalcare.com'
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Contact', path: '/contact' }
]

// Services Data
export const SERVICES = [
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.',
    icon: 'FaHeartbeat',
    features: ['Heart disease diagnosis', 'Cardiac surgery', 'Heart failure treatment', 'Preventive cardiology']
  },
  {
    id: 'neurology',
    title: 'Neurology',
    description: 'Advanced neurological care for brain and nervous system disorders.',
    icon: 'FaBrain',
    features: ['Stroke treatment', 'Epilepsy management', 'Parkinson\'s care', 'Headache treatment']
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    description: 'Expert orthopedic care for bones, joints, and musculoskeletal conditions.',
    icon: 'FaBone',
    features: ['Joint replacement', 'Sports medicine', 'Fracture care', 'Arthritis treatment']
  },
  {
    id: 'ophthalmology',
    title: 'Ophthalmology',
    description: 'Complete eye care services from routine exams to complex surgical procedures.',
    icon: 'FaEye',
    features: ['Vision correction', 'Cataract surgery', 'Glaucoma treatment', 'Retinal care']
  },
  {
    id: 'dentistry',
    title: 'Dentistry',
    description: 'Comprehensive dental care for all ages with modern techniques and equipment.',
    icon: 'FaTooth',
    features: ['General dentistry', 'Cosmetic dentistry', 'Oral surgery', 'Dental implants']
  },
  {
    id: 'general-medicine',
    title: 'General Medicine',
    description: 'Primary healthcare services for preventive care and treatment of common illnesses.',
    icon: 'FaStethoscope',
    features: ['Preventive care', 'Chronic disease management', 'Health screenings', 'Vaccinations']
  }
]

// Doctors Data
export const DOCTORS = [
  {
    id: 'ayesha-khan',
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.9,
    available: true,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    bio: 'Dr. Ayesha Khan specializes in interventional cardiology with over 15 years of experience in treating complex heart conditions.'
  },
  {
    id: 'ahmed-ali',
    name: 'Dr. Ahmed Ali',
    specialty: 'Neurologist',
    experience: 12,
    rating: 4.8,
    available: true,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    bio: 'Dr. Ahmed Ali is a board-certified neurologist with expertise in movement disorders and neurodegenerative diseases.'
  },
  {
    id: 'sara-malik',
    name: 'Dr. Sara Malik',
    specialty: 'Orthopedic Surgeon',
    experience: 18,
    rating: 4.9,
    available: false,
    image: 'https://images.unsplash.com/photo-1606813907291-1f4b9d6c62d8',
    bio: 'Dr. Sara Malik is a fellowship-trained orthopedic surgeon specializing in joint replacement and sports medicine.'
  },
  {
    id: 'bilal-hassan',
    name: 'Dr. Bilal Hassan',
    specialty: 'Ophthalmologist',
    experience: 10,
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
    bio: 'Dr. Bilal Hassan provides comprehensive eye care with a special interest in cataract surgery and refractive procedures.'
  },
  {
    id: 'zara-iftikhar',
    name: 'Dr. Zara Iftikhar',
    specialty: 'Dentist',
    experience: 8,
    rating: 4.8,
    available: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54f86c4d5c1',
    bio: 'Dr. Zara Iftikhar offers comprehensive dental care with a focus on preventive dentistry and cosmetic procedures.'
  },
  {
    id: 'imran-waseem',
    name: 'Dr. Imran Waseem',
    specialty: 'General Physician',
    experience: 20,
    rating: 4.9,
    available: true,
    image: 'https://images.unsplash.com/photo-1622253699372-5c1b8d3c5f8b',
    bio: 'Dr. Imran Waseem provides comprehensive primary care with a patient-centered approach to healthcare.'
  }
]


// Time Slots for Appointments
export const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
]

// Appointment Statuses
export const APPOINTMENT_STATUSES = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed'
}

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#', icon: 'FaFacebook' },
  { name: 'Twitter', url: '#', icon: 'FaTwitter' },
  { name: 'Instagram', url: '#', icon: 'FaInstagram' },
  { name: 'LinkedIn', url: '#', icon: 'FaLinkedin' }
]

// Footer Links
export const FOOTER_LINKS = {
  services: [
    { name: 'Emergency Care', path: '/services' },
    { name: 'Cardiology', path: '/services' },
    { name: 'Neurology', path: '/services' },
    { name: 'Orthopedics', path: '/services' }
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ],
  support: [
    { name: 'Help Center', path: '/help' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Insurance', path: '/insurance' }
  ]
}