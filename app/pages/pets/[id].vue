<template>
  <div class="pet-detail-page">
    <!-- Decoración de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loader"></div>
      <p>Cargando información...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <i class="fas fa-exclamation-circle"></i>
      <h2>Error al cargar la mascota</h2>
      <p>{{ error }}</p>
      <button class="btn-primary" @click="router.push('/dashboard')">
        Volver al Dashboard
      </button>
    </div>

    <!-- Pet Content -->
    <div v-else-if="pet" class="pet-detail-container">
      <!-- Header con botón de regreso -->
      <div class="page-header">
        <button class="btn-back" @click="router.back()">
          <i class="fas fa-arrow-left"></i>
          {{ t('common.back') }}
        </button>
        <div class="header-actions">
          <button class="btn-icon" @click="editPet">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-icon" @click="sharePet">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      </div>

      <!-- Grid principal -->
      <div class="pet-detail-grid">
        <!-- Columna izquierda: Imagen y info básica -->
        <div class="pet-main-info">
          <!-- Imagen principal -->
          <div class="pet-image-card">
            <img :src="pet.image" :alt="pet.name" class="pet-main-image" />
            <div class="image-overlay">
              <span :class="['health-badge', pet.healthStatus]">
                <i class="fas fa-heartbeat"></i>
                {{ t(`healthStatus.${pet.healthStatus}`) }}
              </span>
            </div>
          </div>

          <!-- Card de información básica -->
          <div class="pet-basic-card">
            <div class="pet-header">
              <div class="pet-name-section">
                <h1>{{ pet.name }}</h1>
                <span class="pet-species">
                  <i :class="`fas fa-${pet.species === 'dog' ? 'dog' : 'cat'}`"></i>
                  {{ pet.breed }}
                </span>
              </div>
              <div class="pet-gender">
                <i :class="`fas fa-${pet.gender === 'male' ? 'mars' : 'venus'}`"></i>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="pet-stats-grid">
              <div class="stat-item">
                <i class="fas fa-birthday-cake"></i>
                <div>
                  <span class="stat-label">{{ t('pet.age') }}</span>
                  <span class="stat-value">{{ pet.age }}</span>
                </div>
              </div>
              <div class="stat-item">
                <i class="fas fa-syringe"></i>
                <div>
                  <span class="stat-label">{{ t('pet.vaccinated') }}</span>
                  <span :class="['stat-value', pet.vaccinated ? 'success' : 'warning']">
                    {{ pet.vaccinated ? t('common.yes') : t('common.no') }}
                  </span>
                </div>
              </div>
              <div class="stat-item">
                <i class="fas fa-cut"></i>
                <div>
                  <span class="stat-label">{{ t('pet.sterilized') }}</span>
                  <span :class="['stat-value', pet.sterilized ? 'success' : 'warning']">
                    {{ pet.sterilized ? t('common.yes') : t('common.no') }}
                  </span>
                </div>
              </div>
              <div class="stat-item">
                <i class="fas fa-weight"></i>
                <div>
                  <span class="stat-label">{{ t('pet.weight') }}</span>
                  <span class="stat-value">{{ pet.weight || 'N/A' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Acciones rápidas -->
          <div class="quick-actions-card">
            <button class="action-button primary" @click="scheduleAppointment">
              <i class="fas fa-calendar-plus"></i>
              <span>{{ t('pet.scheduleAppointment') }}</span>
            </button>
            <button class="action-button secondary" @click="addReminder">
              <i class="fas fa-bell-plus"></i>
              <span>{{ t('pet.addReminder') }}</span>
            </button>
            <button class="action-button accent" @click="viewMedicalHistory">
              <i class="fas fa-file-medical"></i>
              <span>{{ t('pet.medicalHistory') }}</span>
            </button>
          </div>
        </div>

        <!-- Columna derecha: Detalles y timeline -->
        <div class="pet-details-column">
          <!-- Próximas citas -->
          <section class="detail-card">
            <div class="card-header">
              <h3>
                <i class="fas fa-calendar-alt"></i>
                {{ t('pet.upcomingAppointments') }}
              </h3>
              <button class="btn-text-sm" @click="viewAllAppointments">
                {{ t('common.viewAll') }}
              </button>
            </div>
            <div class="card-content">
              <div v-if="upcomingAppointments.length" class="appointments-list-mini">
                <div
                  v-for="appointment in upcomingAppointments.slice(0, 3)"
                  :key="appointment.id"
                  class="appointment-mini"
                >
                  <div class="appointment-date-mini">
                    <span class="day">{{ formatDay(appointment.date) }}</span>
                    <span class="month">{{ formatMonth(appointment.date) }}</span>
                  </div>
                  <div class="appointment-info-mini">
                    <h4>{{ appointment.type }}</h4>
                    <p>{{ appointment.veterinarianName }}</p>
                    <span class="time">
                      <i class="fas fa-clock"></i>
                      {{ formatTime(appointment.date) }}
                    </span>
                  </div>
                  <span :class="['status-mini', appointment.status]">
                    {{ t(`status.${appointment.status}`) }}
                  </span>
                </div>
              </div>
              <div v-else class="empty-state-mini">
                <i class="fas fa-calendar-times"></i>
                <p>{{ t('pet.noAppointments') }}</p>
              </div>
            </div>
          </section>

          <!-- Recordatorios activos -->
          <section class="detail-card">
            <div class="card-header">
              <h3>
                <i class="fas fa-bell"></i>
                {{ t('pet.activeReminders') }}
              </h3>
              <button class="btn-text-sm" @click="manageReminders">
                {{ t('common.manage') }}
              </button>
            </div>
            <div class="card-content">
              <div v-if="activeReminders.length" class="reminders-list-mini">
                <div
                  v-for="reminder in activeReminders.slice(0, 4)"
                  :key="reminder.id"
                  :class="['reminder-mini', reminder.priority]"
                >
                  <div class="reminder-icon-mini">
                    <i :class="`fas fa-${reminder.icon}`"></i>
                  </div>
                  <div class="reminder-info-mini">
                    <h5>{{ reminder.title }}</h5>
                    <p>{{ formatDate(reminder.dueDate) }}</p>
                  </div>
                  <button class="btn-check" @click="completeReminder(reminder.id)">
                    <i class="fas fa-check"></i>
                  </button>
                </div>
              </div>
              <div v-else class="empty-state-mini">
                <i class="fas fa-bell-slash"></i>
                <p>{{ t('pet.noReminders') }}</p>
              </div>
            </div>
          </section>

          <!-- Historial médico reciente -->
          <section class="detail-card">
            <div class="card-header">
              <h3>
                <i class="fas fa-notes-medical"></i>
                {{ t('pet.recentMedicalHistory') }}
              </h3>
            </div>
            <div class="card-content">
              <div class="medical-timeline">
                <div
                  v-for="record in medicalHistory.slice(0, 5)"
                  :key="record.id"
                  class="timeline-item"
                >
                  <div :class="['timeline-marker', record.type]">
                    <i :class="`fas fa-${record.icon}`"></i>
                  </div>
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <h4>{{ record.title }}</h4>
                      <span class="timeline-date">{{ formatDate(record.date) }}</span>
                    </div>
                    <p>{{ record.description }}</p>
                    <span v-if="record.veterinarian" class="veterinarian-tag">
                      <i class="fas fa-user-md"></i>
                      {{ record.veterinarian }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Notas adicionales -->
          <section class="detail-card">
            <div class="card-header">
              <h3>
                <i class="fas fa-sticky-note"></i>
                {{ t('pet.notes') }}
              </h3>
              <button class="btn-text-sm" @click="editNotes">
                {{ t('common.edit') }}
              </button>
            </div>
            <div class="card-content">
              <div class="notes-section">
                <p v-if="pet.notes">{{ pet.notes }}</p>
                <p v-else class="empty-notes">{{ t('pet.noNotes') }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Appointment, Pet, Reminder } from '~/interfaces/dashboard.interface'

definePageMeta({
  layout: 'authenticated',
})

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// Estado
const loading = ref(true)
const error = ref<string | null>(null)
const pet = ref<Pet | null>(null)
const upcomingAppointments = ref<Appointment[]>([])
const activeReminders = ref<Reminder[]>([])
const medicalHistory = ref<any[]>([])

// Cargar datos de la mascota
onMounted(async () => {
  const petId = Number(route.params.id)
  
  try {
    // TODO: Reemplazar con llamada real a la API
    // const data = await $fetch(`/api/pets/${petId}`)
    
    // Datos mock temporales
    await loadMockPetData(petId)
  } catch (err) {
    error.value = 'No se pudo cargar la información de la mascota'
    console.error(err)
  } finally {
    loading.value = false
  }
})

const loadMockPetData = async (petId: number) => {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Mock data
  pet.value = {
    id: petId,
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '3 años',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800',
    healthStatus: 'healthy',
    species: 'dog',
    gender: 'female',
    vaccinated: true,
    sterilized: true,
    weight: 28,
    notes: 'Le encanta jugar en el parque y es muy sociable con otros perros. Tiene alergia leve al pollo.',
  }
  
  upcomingAppointments.value = [
    {
      id: 1,
      petId,
      petName: 'Luna',
      petImage: pet.value?.image || '',
      date: '2025-11-05T10:00:00',
      type: 'Chequeo general',
      veterinarianName: 'Dr. Carlos Méndez',
      status: 'confirmed',
    },
    {
      id: 2,
      petId,
      petName: 'Luna',
      petImage: pet.value?.image || '',
      date: '2025-11-20T15:30:00',
      type: 'Vacunación',
      veterinarianName: 'Dra. Ana Rodríguez',
      status: 'pending',
    },
  ]
  
  activeReminders.value = [
    {
      id: 1,
      petId,
      petName: 'Luna',
      title: 'Vacuna anual',
      dueDate: '2025-11-10',
      priority: 'high',
      icon: 'syringe',
      type: 'vaccine',
      completed: false,
    },
    {
      id: 2,
      petId,
      petName: 'Luna',
      title: 'Control de peso',
      dueDate: '2025-11-15',
      priority: 'medium',
      icon: 'weight',
      type: 'checkup',
      completed: false,
    },
  ]
  
  medicalHistory.value = [
    {
      id: 1,
      title: 'Chequeo general',
      description: 'Revisión completa. Todo en orden. Peso estable.',
      date: '2025-10-15',
      type: 'checkup',
      icon: 'stethoscope',
      veterinarian: 'Dr. Carlos Méndez',
    },
    {
      id: 2,
      title: 'Vacuna antirrábica',
      description: 'Aplicación de refuerzo anual de vacuna antirrábica.',
      date: '2025-09-10',
      type: 'vaccine',
      icon: 'syringe',
      veterinarian: 'Dra. Ana Rodríguez',
    },
    {
      id: 3,
      title: 'Limpieza dental',
      description: 'Procedimiento de limpieza dental completo bajo sedación.',
      date: '2025-08-05',
      type: 'procedure',
      icon: 'tooth',
      veterinarian: 'Dr. Carlos Méndez',
    },
  ]
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

// Acciones
const editPet = () => {
  router.push(`/pets/${pet.value?.id}/edit`)
}

const sharePet = () => {
  // TODO: Implementar compartir
  console.log('Compartir mascota')
}

const scheduleAppointment = () => {
  router.push(`/appointments/new?petId=${pet.value?.id}`)
}

const addReminder = () => {
  // TODO: Abrir modal
  console.log('Agregar recordatorio')
}

const viewMedicalHistory = () => {
  router.push(`/pets/${pet.value?.id}/medical-history`)
}

const viewAllAppointments = () => {
  router.push(`/appointments?petId=${pet.value?.id}`)
}

const manageReminders = () => {
  router.push(`/reminders?petId=${pet.value?.id}`)
}

const completeReminder = (id: number) => {
  const index = activeReminders.value.findIndex(r => r.id === id)
  if (index !== -1) {
    activeReminders.value.splice(index, 1)
  }
}

const editNotes = () => {
  // TODO: Abrir modal de edición
  console.log('Editar notas')
}
</script>