<template>
  <div class="dashboard-page">
    <!-- Decoración de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
      <div class="deco-shape shape-3"></div>
    </div>

    <div class="dashboard-container">
      <!-- Header de bienvenida -->
      <header class="dashboard-welcome">
        <div class="welcome-content">
          <div class="welcome-text">
            <h1>🐾 {{ mainStore.user ? mainStore.user.name : '' }}!</h1>
            <p class="subtitle">{{ t('dashboard.subtitle') }}</p>
          </div>
          <div class="welcome-date">
            <div class="date-card">
              <span class="date-icon">📅</span>
              <div class="date-info">
                <span class="date-day">{{ currentDate.day }}</span>
                <span class="date-month">{{ currentDate.month }}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Grid principal -->
      <div class="dashboard-grid">
        <!-- Columna izquierda: Cards principales -->
        <div class="main-column">
          <!-- Resumen de estadísticas -->
          <section class="stats-overview">
            <div class="stat-card" @click="goToSection('pets')">
              <div class="stat-icon primary">
                <i class="fas fa-paw"></i>
              </div>
              <div class="stat-content">
                <h3>{{ pets.length }}</h3>
                <p>{{ t('dashboard.myPets') }}</p>
              </div>
              <div class="stat-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>

            <div class="stat-card" @click="goToSection('applications')">
              <div class="stat-icon accent">
                <i class="fas fa-heart"></i>
              </div>
              <div class="stat-content">
                <h3>{{ adoptionApplications.length }}</h3>
                <p>{{ t('dashboard.applications') }}</p>
              </div>
              <div class="stat-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>

            <div class="stat-card" @click="goToSection('appointments')">
              <div class="stat-icon secondary">
                <i class="fas fa-calendar-check"></i>
              </div>
              <div class="stat-content">
                <h3>{{ upcomingAppointments.length }}</h3>
                <p>{{ t('dashboard.nextAppointments') }}</p>
              </div>
              <div class="stat-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>

            <div class="stat-card" @click="goToSection('reminders')">
              <div class="stat-icon warning">
                <i class="fas fa-bell"></i>
              </div>
              <div class="stat-content">
                <h3>{{ activeReminders.length }}</h3>
                <p>{{ t('dashboard.reminders') }}</p>
              </div>
              <div class="stat-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </section>

          <!-- Próximas citas -->
          <section class="dashboard-section appointments-section">
            <div class="section-header">
              <h2>
                <i class="fas fa-calendar-alt"></i>
                {{ t('dashboard.upcomingAppointments') }}
              </h2>
              <button class="btn-text" @click="goToAppointments">
                {{ t('dashboard.viewAll') }}
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>

            <div class="appointments-list" v-if="upcomingAppointments.length">
              <div
                v-for="appointment in upcomingAppointments.slice(0, 3)"
                :key="appointment.id"
                class="appointment-card"
              >
                <div class="appointment-date">
                  <span class="date-day">{{ formatDay(appointment.date) }}</span>
                  <span class="date-month">{{ formatMonth(appointment.date) }}</span>
                </div>
                <div class="appointment-details">
                  <div class="appointment-pet">
                    <img :src="appointment.petImage" :alt="appointment.petName" />
                    <div>
                      <h4>{{ appointment.petName }}</h4>
                      <p class="appointment-type">{{ appointment.type }}</p>
                    </div>
                  </div>
                  <p class="appointment-time">
                    <i class="fas fa-clock"></i>
                    {{ formatTime(appointment.date) }}
                  </p>
                </div>
                <div class="appointment-status">
                  <span :class="['status-badge', appointment.status]">
                    {{ t(`status.${appointment.status}`) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="empty-state" v-else>
              <i class="fas fa-calendar-times"></i>
              <p>{{ t('dashboard.noAppointments') }}</p>
              <button class="btn-primary" @click="createAppointment">
                {{ t('dashboard.scheduleAppointment') }}
              </button>
            </div>
          </section>

          <!-- Postulaciones activas -->
          <section class="dashboard-section applications-section">
            <div class="section-header">
              <h2>
                <i class="fas fa-file-alt"></i>
                {{ t('dashboard.adoptionApplications') }}
              </h2>
              <button class="btn-text" @click="goToAdoption">
                {{ t('dashboard.browseMore') }}
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>

            <div class="applications-list" v-if="adoptionApplications.length">
              <div
                v-for="application in adoptionApplications"
                :key="application.id"
                class="application-card"
              >
                <div class="application-image">
                  <img :src="application.petImage" :alt="application.petName" />
                  <span :class="['status-overlay', application.status]">
                    {{ t(`applicationStatus.${application.status}`) }}
                  </span>
                </div>
                <div class="application-info">
                  <h4>{{ application.petName }}</h4>
                  <p class="application-date">
                    <i class="fas fa-calendar"></i>
                    {{ t('dashboard.appliedOn') }} {{ formatDate(application.submittedDate) }}
                  </p>
                  <div class="application-progress">
                    <div class="progress-bar">
                      <div
                        class="progress-fill"
                        :style="{ width: `${application.progress}%` }"
                      ></div>
                    </div>
                    <span class="progress-text">{{ application.progress }}%</span>
                  </div>
                </div>
                <button class="btn-outline-sm" @click="viewApplication(application.id)">
                  {{ t('dashboard.viewDetails') }}
                </button>
              </div>
            </div>

            <div class="empty-state" v-else>
              <i class="fas fa-heart-broken"></i>
              <p>{{ t('dashboard.noApplications') }}</p>
              <button class="btn-primary" @click="goToAdoption">
                {{ t('dashboard.exploreAdoption') }}
              </button>
            </div>
          </section>
        </div>

        <!-- Columna derecha: Sidebar -->
        <aside class="sidebar-column">
          <!-- Acciones rápidas -->
          <section class="quick-actions">
            <h3>{{ t('dashboard.quickActions') }}</h3>
            <div class="actions-grid">
              <button class="action-btn" @click="createAppointment">
                <i class="fas fa-calendar-plus"></i>
                <span>{{ t('dashboard.newAppointment') }}</span>
              </button>
              <button class="action-btn" @click="goToAdoption">
                <i class="fas fa-paw"></i>
                <span>{{ t('dashboard.adopt') }}</span>
              </button>
              <button class="action-btn" @click="addReminder">
                <i class="fas fa-bell-plus"></i>
                <span>{{ t('dashboard.addReminder') }}</span>
              </button>
              <button class="action-btn" @click="contactVet">
                <i class="fas fa-user-md"></i>
                <span>{{ t('dashboard.contactVet') }}</span>
              </button>
            </div>
          </section>

          <!-- Mis mascotas -->
          <section class="my-pets-section">
            <div class="section-header-small">
              <h3>
                <i class="fas fa-paw"></i>
                {{ t('dashboard.myPets') }}
              </h3>
              <button class="btn-icon" @click="goToAllPets">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>

            <div class="pets-list" v-if="pets.length">
              <div
                v-for="pet in pets.slice(0, 4)"
                :key="pet.id"
                class="pet-item"
                @click="goToPet(pet.id)"
              >
                <img :src="pet.image" :alt="pet.name" class="pet-avatar" />
                <div class="pet-info-mini">
                  <h4>{{ pet.name }}</h4>
                  <p>{{ pet.breed }} • {{ pet.age }}</p>
                </div>
                <span :class="['health-indicator', pet.healthStatus]">
                  <i class="fas fa-circle"></i>
                </span>
              </div>
            </div>

            <button class="btn-outline-full" @click="goToAdoption" v-else>
              <i class="fas fa-plus"></i>
              {{ t('dashboard.addFirstPet') }}
            </button>
          </section>

          <!-- Recordatorios activos -->
          <section class="reminders-section">
            <div class="section-header-small">
              <h3>
                <i class="fas fa-bell"></i>
                {{ t('dashboard.activeReminders') }}
              </h3>
            </div>

            <div class="reminders-list" v-if="activeReminders.length">
              <div
                v-for="reminder in activeReminders.slice(0, 3)"
                :key="reminder.id"
                class="reminder-item"
                :class="reminder.priority"
              >
                <div class="reminder-icon">
                  <i :class="`fas fa-${reminder.icon}`"></i>
                </div>
                <div class="reminder-content">
                  <h5>{{ reminder.title }}</h5>
                  <p>{{ reminder.petName }} • {{ formatDate(reminder.dueDate) }}</p>
                </div>
                <button class="btn-icon-sm" @click="completeReminder(reminder.id)">
                  <i class="fas fa-check"></i>
                </button>
              </div>
            </div>

            <div class="empty-state-small" v-else>
              <p>{{ t('dashboard.noReminders') }}</p>
            </div>
          </section>

          <!-- Historial reciente -->
          <section class="activity-section">
            <div class="section-header-small">
              <h3>
                <i class="fas fa-history"></i>
                {{ t('dashboard.recentActivity') }}
              </h3>
            </div>

            <div class="activity-list">
              <div
                v-for="activity in recentActivity.slice(0, 5)"
                :key="activity.id"
                class="activity-item"
              >
                <div :class="['activity-icon', activity.type]">
                  <i :class="`fas fa-${activity.icon}`"></i>
                </div>
                <div class="activity-content">
                  <p>{{ activity.description }}</p>
                  <span class="activity-time">{{ formatRelativeTime(activity.timestamp) }}</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '~/store/main.store'
import { useI18n } from 'vue-i18n'
import { getMockDashboardData } from '~/data/dashboard.data'
import type {
  Pet,
  AdoptionApplication,
  Appointment,
  Reminder,
  Activity,
} from '~/types/dashboard.interface'

definePageMeta({
  layout: 'authenticated',
})

const router = useRouter()
const mainStore = useMainStore()
const { t } = useI18n()

// Estado reactivo
const loading = ref(false)
const pets = ref<Pet[]>([])
const adoptionApplications = ref<AdoptionApplication[]>([])
const appointments = ref<Appointment[]>([])
const reminders = ref<Reminder[]>([])
const activities = ref<Activity[]>([])

// Fecha actual
const currentDate = computed(() => {
  const now = new Date()
  return {
    day: now.getDate(),
    month: now.toLocaleDateString('es-ES', { month: 'short' }),
  }
})

// Citas futuras
const upcomingAppointments = computed(() => {
  const now = new Date()
  return appointments.value
    .filter((appointment) => new Date(appointment.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

// Recordatorios activos
const activeReminders = computed(() => {
  return reminders.value
    .filter((reminder) => !reminder.completed)
    .sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 }
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority]
      }
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    })
})

// Actividad reciente
const recentActivity = computed(() => {
  return activities.value
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 10)
})

// Cargar datos del usuario
onMounted(async () => {
  if (!mainStore.user) {
    router.push('/login')
    return
  }

  loading.value = true
  try {
    // TODO: Reemplazar con llamada real a la API
    // const data = await $fetch(`/api/dashboard/${mainStore.user.id}`)
    
    // Por ahora usar datos mock
    const data = await getMockDashboardData(mainStore.user.id)
    
    pets.value = data.pets
    adoptionApplications.value = data.adoptionApplications
    appointments.value = data.upcomingAppointments
    reminders.value = data.activeReminders
    activities.value = data.recentActivity
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  } finally {
    loading.value = false
  }
})

// Métodos de navegación
const goToSection = (section: string) => {
  router.push(`/${section}`)
}

const goToPet = (id: number) => {
  router.push(`/pets/${id}`)
}

const goToAdoption = () => {
  router.push('/adoption')
}

const goToAppointments = () => {
  router.push('/appointments')
}

const goToAllPets = () => {
  router.push('/pets')
}

const createAppointment = () => {
  router.push('/appointments/new')
}

const viewApplication = (id: number) => {
  router.push(`/adoption/applications/${id}`)
}

const addReminder = () => {
  // TODO: Abrir modal de agregar recordatorio
  console.log('Agregar recordatorio')
}

const contactVet = () => {
  router.push('/veterinarians')
}

const completeReminder = async (id: number) => {
  // TODO: Marcar recordatorio como completado
  const reminderIndex = reminders.value.findIndex((r) => r.id === id)
  if (reminderIndex !== -1) {
    reminders.value[reminderIndex].completed = true
  }
}

// Métodos de formato
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const formatDay = (date: string) => {
  return new Date(date).getDate()
}

const formatMonth = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', { month: 'short' })
}

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const formatRelativeTime = (timestamp: string) => {
  const now = new Date()
  const time = new Date(timestamp)
  const diffMs = now.getTime() - time.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffHours < 1) return 'Hace unos minutos'
  if (diffHours < 24) return `Hace ${diffHours} horas`
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `Hace ${diffDays} días`
  return formatDate(timestamp)
}
</script>
