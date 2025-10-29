<template>
  <div class="appointments-page">
    <!-- Hero Section -->
    <section class="appointments-hero">
      <div class="hero-content">
        <UBadge color="primary" variant="subtle" size="lg" class="hero-badge">
          {{ $t('appointments.badge') }}
        </UBadge>
        <h1 class="hero-title">{{ $t('appointments.title') }}</h1>
        <p class="hero-subtitle">{{ $t('appointments.subtitle') }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="appointments-content">
      <div class="content-container">
        
        <!-- Main Form Area -->
        <div class="appointment-form-section">
          
          <!-- Step 1: Select Pet -->
          <div v-if="currentStep === 1" class="step-container">
            <div class="step-header">
              <div class="step-number">
                <UIcon name="i-heroicons-heart" />
                <span>1</span>
              </div>
              <div>
                <h2>{{ $t('appointments.steps.selectPet.title') }}</h2>
                <p>{{ $t('appointments.steps.selectPet.description') }}</p>
              </div>
            </div>

            <!-- User Pets Grid -->
            <div class="pets-grid">
              <div 
                v-for="pet in userPets" 
                :key="pet.id"
                class="pet-card"
                :class="{ 'selected': selectedPet?.id === pet.id }"
                @click="selectPet(pet)"
              >
                <div class="pet-card-content">
                  <div class="pet-avatar">
                    <img v-if="pet.image" :src="pet.image" :alt="pet.name" />
                    <UIcon v-else :name="getPetIcon(pet.type) || 'i-heroicons-heart'" class="pet-icon" />
                  </div>
                  <div class="pet-info">
                    <h3>{{ pet.name }}</h3>
                    <div class="pet-details">
                      <UBadge :color="getPetTypeColor(pet.type)" variant="soft" size="xs">
                        {{ $t(`appointments.petTypes.${pet.type}`) }}
                      </UBadge>
                      <span class="pet-breed">{{ pet.breed }}</span>
                      <span class="pet-age">{{ pet.age }} {{ $t('appointments.years') }}</span>
                    </div>
                  </div>
                  <div class="pet-select-indicator">
                    <UIcon 
                      :name="selectedPet?.id === pet.id ? 'i-heroicons-check-circle-solid' : 'i-heroicons-circle'" 
                      :class="{ 'selected': selectedPet?.id === pet.id }"
                    />
                  </div>
                </div>
              </div>

              <!-- Add New Pet Card -->
              <div 
                class="pet-card add-new-pet"
                @click="showAddPetModal = true"
              >
                <div class="pet-card-content">
                  <UIcon name="i-heroicons-plus-circle" class="add-icon" />
                  <h3>{{ $t('appointments.steps.selectPet.addNew') }}</h3>
                  <p>{{ $t('appointments.steps.selectPet.addNewDescription') }}</p>
                </div>
              </div>
            </div>

            <div class="step-actions">
              <UButton 
                size="xl" 
                @click="nextStep"
                :disabled="!selectedPet"
                icon="i-heroicons-arrow-right"
                trailing
              >
                {{ $t('common.next') }}
              </UButton>
            </div>
          </div>

          <!-- Step 2: Select Service -->
          <div v-if="currentStep === 2" class="step-container">
            <div class="step-header">
              <div class="step-number">
                <UIcon name="i-heroicons-clipboard-document-check" />
                <span>2</span>
              </div>
              <div>
                <h2>{{ $t('appointments.steps.selectService.title') }}</h2>
                <p>{{ $t('appointments.steps.selectService.description') }}</p>
              </div>
            </div>

            <!-- Selected Pet Summary -->
            <UCard class="selected-pet-summary">
              <div class="summary-content">
                <div class="pet-avatar-small">
                  <img v-if="selectedPet && selectedPet.image" :src="selectedPet.image" :alt="selectedPet?.name || ''" />
                  <UIcon v-else :name="selectedPet ? getPetIcon(selectedPet.type) || 'i-heroicons-heart' : 'i-heroicons-heart'" />
                </div>
                <div>
                  <h4>{{ selectedPet?.name || '' }}</h4>
                  <p v-if="selectedPet">{{ selectedPet.breed }} • {{ selectedPet.age }} {{ $t('appointments.years') }}</p>
                </div>
                <UButton 
                  color="primary" 
                  variant="ghost" 
                  size="sm"
                  @click="currentStep = 1"
                  icon="i-heroicons-pencil"
                >
                  {{ $t('common.edit') }}
                </UButton>
              </div>
            </UCard>

            <!-- Services Grid -->
            <div class="services-grid">
              <div 
                v-for="service in services" 
                :key="service.id"
                class="service-card"
                :class="{ 'selected': selectedService?.id === service.id }"
                @click="selectService(service)"
              >
                <div class="service-icon-wrapper" :style="{ background: service.color + '20' }">
                  <UIcon :name="service.icon" :style="{ color: service.color }" />
                </div>
                <div class="service-content">
                  <h3>{{ $t(`appointments.services.${service.id}.title`) }}</h3>
                  <p>{{ $t(`appointments.services.${service.id}.description`) }}</p>
                  <div class="service-meta">
                    <span class="duration">
                      <UIcon name="i-heroicons-clock" />
                      {{ service.duration }}
                    </span>
                    <span class="price">
                      {{ service.price }}
                    </span>
                  </div>
                </div>
                <div class="service-select-indicator">
                  <UIcon 
                    :name="selectedService?.id === service.id ? 'i-heroicons-check-circle-solid' : 'i-heroicons-circle'" 
                    :class="{ 'selected': selectedService?.id === service.id }"
                  />
                </div>
              </div>
            </div>

            <div class="step-actions">
              <UButton 
                color="primary" 
                variant="ghost"
                size="xl" 
                @click="previousStep"
                icon="i-heroicons-arrow-left"
              >
                {{ $t('common.back') }}
              </UButton>
              <UButton 
                size="xl" 
                @click="nextStep"
                :disabled="!selectedService"
                icon="i-heroicons-arrow-right"
                trailing
              >
                {{ $t('common.next') }}
              </UButton>
            </div>
          </div>

          <!-- Step 3: Schedule & Details -->
          <div v-if="currentStep === 3" class="step-container">
            <div class="step-header">
              <div class="step-number">
                <UIcon name="i-heroicons-calendar-days" />
                <span>3</span>
              </div>
              <div>
                <h2>{{ $t('appointments.steps.schedule.title') }}</h2>
                <p>{{ $t('appointments.steps.schedule.description') }}</p>
              </div>
            </div>
<!-- Schedule Form -->
            <div class="schedule-form-card">
              <form @submit.prevent="submitAppointment" class="schedule-form">
                
                <!-- Summary Row -->
                <div class="summary-row">
                  <div class="summary-item-inline">
                    <span class="label">MASCOTA</span>
                    <span class="value">{{ selectedPet?.name || '' }}</span>
                  </div>
                  <div class="summary-item-inline">
                    <span class="label">SERVICIO</span>
                    <span class="value">{{ selectedService ? $t(`appointments.services.${selectedService.id}.title`) : '' }}</span>
                  </div>
                </div>

                <div class="form-grid">
                  <div class="form-group">
                    <label>{{ $t('appointments.form.fields.veterinarian') }}</label>
                    <Dropdown 
                      v-model="scheduleForm.veterinarian"
                      :options="veterinarians"
                      option-label="label"
                      option-value="value"
                      :placeholder="$t('appointments.form.fields.veterinarian')"
                      class="w-full"
                    />
                  </div>

                  <div class="form-group">
                    <label>{{ $t('appointments.form.fields.date') }} *</label>
                    <Calendar 
                      v-model="scheduleForm.dateObject" 
                      :min-date="minDateObject"
                      date-format="dd/mm/yy"
                      :placeholder="$t('appointments.form.fields.date')"
                      class="w-full"
                      show-icon
                    />
                  </div>

                  <div class="form-group">
                    <label>{{ $t('appointments.form.fields.time') }} *</label>
                    <Dropdown 
                      v-model="scheduleForm.time"
                      :options="availableTimes"
                      option-label="label"
                      option-value="value"
                      :placeholder="$t('appointments.form.fields.time')"
                      class="w-full"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>{{ $t('appointments.form.fields.reason') }} *</label>
                  <Textarea 
                    v-model="scheduleForm.reason" 
                    :placeholder="$t('appointments.form.fields.reasonPlaceholder')"
                    :rows="4"
                    class="w-full"
                  />
                </div>

                <div class="checkbox-group">
                  <Checkbox v-model="scheduleForm.terms" binary />
                  <span>{{ $t('appointments.form.fields.terms') }}</span>
                </div>

                <div class="step-actions">
                  <Button 
                    type="button"
                    :label="$t('common.back')"
                    severity="secondary"
                    @click="previousStep"
                    icon="pi pi-arrow-left"
                  />
                  <Button 
                    type="submit"
                    :label="$t('appointments.form.submit')"
                    :loading="isSubmitting"
                    icon="pi pi-calendar"
                  />
                </div>

              </form>
            </div>
          </div>

        </div>

        <!-- Sidebar -->
        <div class="appointments-sidebar">
          
          <!-- Progress Indicator -->
          <UCard class="info-card progress-card">
            <template #header>
              <div class="card-header">
                <UIcon name="i-heroicons-clipboard-document-check" class="header-icon" />
                <h3>{{ $t('appointments.sidebar.progress') }}</h3>
              </div>
            </template>
            <template #default>
              <div class="progress-steps">
                <div 
                  v-for="(step, index) in progressSteps" 
                  :key="index"
                  class="progress-step"
                  :class="{
                    'active': currentStep === index + 1,
                    'completed': currentStep > index + 1
                  }"
                >
                  <div class="step-indicator">
                    <i 
                      v-if="currentStep > index + 1"
                      class="pi pi-check-circle"
                    />
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                  <div class="step-content">
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </template>
          </UCard>

          <!-- Schedule Info -->
          <UCard class="info-card">
            <template #header>
              <div class="card-header">
                <UIcon name="i-heroicons-clock" class="header-icon" />
                <h3>{{ $t('appointments.sidebar.scheduleTitle') }}</h3>
              </div>
            </template>
            <template #default>
              <div class="schedule-info">
                <div class="schedule-item" v-for="day in schedule" :key="day.day">
                  <span class="day">{{ day.day }}</span>
                  <span class="hours">{{ day.hours }}</span>
                </div>
                <UDivider />
                <div class="alert-box">
                  <UIcon name="i-heroicons-information-circle" />
                  <div>
                    <strong>{{ $t('appointments.sidebar.emergencyTitle') }}</strong>
                    <p>{{ $t('appointments.sidebar.emergencyDescription') }}</p>
                  </div>
                </div>
              </div>
            </template>
          </UCard>

          <!-- Contact Info -->
          <UCard class="info-card">
            <template #header>
              <div class="card-header">
                <UIcon name="i-heroicons-phone" class="header-icon" />
                <h3>{{ $t('appointments.sidebar.contactTitle') }}</h3>
              </div>
            </template>
            <template #default>
              <div class="contact-info">
                <div class="contact-item">
                  <UIcon name="i-heroicons-phone" />
                  <span>+57 312 345 6789</span>
                </div>
                <div class="contact-item">
                  <UIcon name="i-heroicons-envelope" />
                  <span>citas@onelessonperday.com</span>
                </div>
                <div class="contact-item">
                  <UIcon name="i-heroicons-map-pin" />
                  <span>Calle 123 #45-67, Bogotá</span>
                </div>
              </div>
            </template>
          </UCard>

        </div>

      </div>
    </section>

  </div>

  <!-- Add Pet Modal -->
  <Dialog v-model:visible="showAddPetModal" modal :header="$t('appointments.addPet.title')" :style="{ width: '100%', maxWidth: '450px' }">
    <div class="add-pet-form">
      <div class="form-grid-modal">
        <div class="form-group">
          <label>{{ $t('appointments.form.fields.petName') }} *</label>
          <InputText 
            v-model="newPetForm.name" 
            :placeholder="$t('appointments.form.fields.petName')"
            class="w-full"
          />
        </div>

        <div class="form-group">
          <label>{{ $t('appointments.form.fields.petType') }} *</label>
          <Dropdown 
            v-model="newPetForm.type"
            :options="petTypes"
            option-label="label"
            option-value="value"
            :placeholder="$t('appointments.form.fields.petType')"
            class="w-full"
          />
        </div>

        <div class="form-group">
          <label>{{ $t('appointments.form.fields.petBreed') }} *</label>
          <InputText 
            v-model="newPetForm.breed" 
            :placeholder="$t('appointments.form.fields.petBreed')"
            class="w-full"
          />
        </div>

        <div class="form-group">
          <label>{{ $t('appointments.form.fields.petAge') }} *</label>
          <InputNumber 
            v-model="newPetForm.age" 
            :placeholder="$t('appointments.form.fields.petAge')"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <template #footer>
      <div class="modal-actions-row">
        <Button 
          type="button"
          :label="$t('common.cancel')"
          severity="secondary"
          @click="showAddPetModal = false"
        />
        <Button 
          type="button"
          :label="$t('common.save')"
          :loading="isAddingPet"
          @click="addNewPet"
        />
      </div>
    </template>
  </Dialog>

  <!-- Success Modal -->
  <Dialog v-model:visible="showSuccessModal" modal :header="$t('appointments.success.title')" :style="{ width: '100%', maxWidth: '550px' }" :closable="false">
    <div class="modal-content-center">
      <UIcon name="i-heroicons-check-circle" class="success-icon" />
      <p class="success-message">{{ $t('appointments.success.message') }}</p>
      
      <div class="appointment-summary-modal">
        <div class="summary-item-modal">
          <span class="label">{{ $t('appointments.summary.pet') }}:</span>
          <span class="value">{{ selectedPet?.name }}</span>
        </div>
        <div class="summary-item-modal">
          <span class="label">{{ $t('appointments.summary.service') }}:</span>
          <span class="value">{{ selectedService ? $t(`appointments.services.${selectedService.id}.title`) : '' }}</span>
        </div>
        <div class="summary-item-modal">
          <span class="label">{{ $t('appointments.form.fields.date') }}:</span>
          <span class="value">{{ formatDate(scheduleForm.date) }}</span>
        </div>
        <div class="summary-item-modal">
          <span class="label">{{ $t('appointments.form.fields.time') }}:</span>
          <span class="value">{{ scheduleForm.time }}</span>
        </div>
      </div>
      
      <p class="confirmation-note">{{ $t('appointments.success.confirmation') }}</p>
    </div>
    
    <template #footer>
      <Button 
        :label="$t('appointments.success.close')"
        severity="success"
        @click="closeSuccessModal"
        class="w-full"
      />
    </template>
  </Dialog>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'

const { t } = useI18n()

// Steps
const currentStep = ref(1)
const totalSteps = 3

// Selected data
const selectedPet = ref<null | { id: number; name: string; type: string; breed: string; age: number; image: string | null }>(null)
const selectedService = ref<null | { id: string; icon: string; color: string; duration: string; price: string }>(null)

// Modal states
const showAddPetModal = ref(false)
const showSuccessModal = ref(false)
const isSubmitting = ref(false)
const isAddingPet = ref(false)

// User's pets
const userPets = ref([
  {
    id: 1,
    name: 'Luna',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    image: null
  },
  {
    id: 2,
    name: 'Milo',
    type: 'cat',
    breed: 'Siamés',
    age: 2,
    image: null
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'dog',
    breed: 'Pastor Alemán',
    age: 5,
    image: null
  }
])

// Pet types
const petTypes = computed(() => [
  { label: t('appointments.petTypes.dog'), value: 'dog' },
  { label: t('appointments.petTypes.cat'), value: 'cat' },
  { label: t('appointments.petTypes.bird'), value: 'bird' },
  { label: t('appointments.petTypes.rabbit'), value: 'rabbit' },
  { label: t('appointments.petTypes.other'), value: 'other' }
])

// Services
const services = ref([
  {
    id: 'ethology',
    icon: 'i-heroicons-academic-cap',
    color: '#8B5CF6',
    duration: '45 min',
    price: '$80.000'
  },
  {
    id: 'surgery',
    icon: 'i-heroicons-heart',
    color: '#EF4444',
    duration: '2-4 hrs',
    price: '$450.000'
  },
  {
    id: 'consultation',
    icon: 'i-heroicons-clipboard-document-check',
    color: '#2E8B57',
    duration: '30 min',
    price: '$60.000'
  },
  {
    id: 'vaccination',
    icon: 'i-heroicons-beaker',
    color: '#3B82F6',
    duration: '15 min',
    price: '$35.000'
  },
  {
    id: 'diagnostics',
    icon: 'i-heroicons-magnifying-glass',
    color: '#F59E0B',
    duration: '45 min',
    price: '$120.000'
  }
])

// Progress steps
const progressSteps = computed(() => [
  {
    title: t('appointments.steps.selectPet.title'),
    description: t('appointments.steps.selectPet.short')
  },
  {
    title: t('appointments.steps.selectService.title'),
    description: t('appointments.steps.selectService.short')
  },
  {
    title: t('appointments.steps.schedule.title'),
    description: t('appointments.steps.schedule.short')
  }
])

// Schedule form
const scheduleForm = ref({
  veterinarian: '',
  date: '',
  dateObject: null as Date | null,
  time: '',
  reason: '',
  terms: false
})

// New pet form
const newPetForm = ref({
  name: '',
  type: '',
  breed: '',
  age: null as number | null
})

// Veterinarians
const veterinarians = computed(() => [
  { label: t('appointments.form.options.veterinarians.any'), value: 'any' },
  { label: 'Dra. María Rodríguez', value: 'maria' },
  { label: 'Dr. Carlos Martínez', value: 'carlos' },
  { label: 'Dra. Ana Gómez', value: 'ana' },
  { label: 'Dr. Luis Fernández', value: 'luis' }
])

// Available times
const availableTimes = computed(() => [
  { label: '08:00 AM', value: '08:00' },
  { label: '09:00 AM', value: '09:00' },
  { label: '10:00 AM', value: '10:00' },
  { label: '11:00 AM', value: '11:00' },
  { label: '02:00 PM', value: '14:00' },
  { label: '03:00 PM', value: '15:00' },
  { label: '04:00 PM', value: '16:00' },
  { label: '05:00 PM', value: '17:00' }
])

// Schedule
const schedule = computed(() => [
  { day: t('veterinarians.schedule.monday'), hours: '8:00 AM - 6:00 PM' },
  { day: t('veterinarians.schedule.tuesday'), hours: '8:00 AM - 6:00 PM' },
  { day: t('veterinarians.schedule.wednesday'), hours: '8:00 AM - 6:00 PM' },
  { day: t('veterinarians.schedule.thursday'), hours: '8:00 AM - 6:00 PM' },
  { day: t('veterinarians.schedule.friday'), hours: '8:00 AM - 6:00 PM' },
  { day: t('veterinarians.schedule.saturday'), hours: '9:00 AM - 2:00 PM' },
  { day: t('veterinarians.schedule.sunday'), hours: t('veterinarians.schedule.closed') }
])

// Minimum date (today)
const minDate = computed(() => {
  return new Date()
})

// Methods
const selectPet = (pet: any) => {
  selectedPet.value = pet
}

const selectService = (service: any) => {
  selectedService.value = service
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const getPetIcon = (type: string) => {
  const icons: Record<string, string> = {
    dog: 'i-heroicons-heart',
    cat: 'i-heroicons-heart',
    bird: 'i-heroicons-sparkles',
    rabbit: 'i-heroicons-star',
    other: 'i-heroicons-heart'
  }
  return icons[type] || icons.other
}

const getPetTypeColor = (type: string): "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined => {
  const colors: Record<string, "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral"> = {
    dog: 'primary',
    cat: 'secondary',
    bird: 'info',
    rabbit: 'success',
    other: 'neutral'
  }
  return colors[type] || 'neutral'
}

const addNewPet = async () => {
  isAddingPet.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newPet = {
    id: userPets.value.length + 1,
    name: newPetForm.value.name,
    type: newPetForm.value.type,
    breed: newPetForm.value.breed,
    age: parseInt(String(newPetForm.value.age || '0')),
    image: null
  }
  
  userPets.value.push(newPet)
  selectedPet.value = newPet
  
  isAddingPet.value = false
  showAddPetModal.value = false
  
  newPetForm.value = {
    name: '',
    type: '',
    breed: '',
    age: null
  }
}

const submitAppointment = async () => {
  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  showSuccessModal.value = true
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  currentStep.value = 1
  selectedPet.value = null
  selectedService.value = null
  scheduleForm.value = {
    veterinarian: '',
    date: '',
    dateObject: null,
    time: '',
    reason: '',
    terms: false
  }
}

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>