export interface Pet {
  id: number
  name: string
  breed: string
  age: string
  image: string
  healthStatus: 'healthy' | 'warning' | 'critical'
  species: 'dog' | 'cat' | 'other'
  gender: 'male' | 'female'
  vaccinated: boolean
  sterilized: boolean
}

export interface AdoptionApplication {
  id: number
  petId: number
  petName: string
  petImage: string
  submittedDate: string
  status: 'pending' | 'approved' | 'rejected' | 'review' | 'interview' | 'homeVisit'
  progress: number
  nextStep?: string
  notes?: string
}

export interface Appointment {
  id: number
  petId: number
  petName: string
  petImage: string
  date: string
  type: string
  veterinarianName?: string
  veterinarianId?: number
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
  reason?: string
  location?: string
  notes?: string
}

export interface Reminder {
  id: number
  petId: number
  petName: string
  title: string
  description?: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  icon: string
  type: 'vaccine' | 'medication' | 'checkup' | 'grooming' | 'custom'
  completed: boolean
  recurring?: boolean
  frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

export interface Activity {
  id: number
  description: string
  timestamp: string
  type: 'appointment' | 'adoption' | 'reminder' | 'pet' | 'health'
  icon: string
  petId?: number
  relatedId?: number
  metadata?: Record<string, any>
}

export interface DashboardStats {
  totalPets: number
  activeApplications: number
  upcomingAppointments: number
  activeReminders: number
  completedAppointments: number
  totalAdoptions: number
}

export interface User {
  id: number
  name: string
  email: string
  phone?: string
  avatar?: string
  picture?: string // Para compatibilidad con Google OAuth
  role: 'user' | 'veterinarian' | 'admin'
  preferences?: UserPreferences
}

export interface UserPreferences {
  language: 'es' | 'en'
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  theme: 'light' | 'dark' | 'auto'
}

// Respuestas de la API
export interface DashboardData {
  user: User
  stats: DashboardStats
  pets: Pet[]
  adoptionApplications: AdoptionApplication[]
  upcomingAppointments: Appointment[]
  activeReminders: Reminder[]
  recentActivity: Activity[]
}

// Filtros y búsqueda
export interface AppointmentFilters {
  status?: Appointment['status']
  petId?: number
  dateFrom?: string
  dateTo?: string
}

export interface ApplicationFilters {
  status?: AdoptionApplication['status']
  dateFrom?: string
  dateTo?: string
}

export interface ReminderFilters {
  priority?: Reminder['priority']
  type?: Reminder['type']
  completed?: boolean
  petId?: number
}