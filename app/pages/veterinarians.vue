<template>
  <section class="veterinarians-section">
    <!-- Decoración de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
      <div class="deco-shape shape-3"></div>
      <div class="medical-pattern"></div>
    </div>

    <div class="veterinarians-container">
      <!-- Header de la sección -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-badge">
          <i class="pi pi-heart-fill"></i>
          <span>{{ t('veterinarians.badge') }}</span>
        </div>
        <h1 class="section-title">
          <span class="title-highlight">{{ t('veterinarians.title') }}</span>
          <span class="title-subtitle">{{ t('veterinarians.subtitle') }}</span>
        </h1>
        <p class="section-intro">
          {{ t('veterinarians.introduction') }}
        </p>
      </div>

      <!-- Servicios Veterinarios -->
      <div class="services-section" ref="servicesSection">
        <h2 class="services-title">{{ t('veterinarians.services.title') }}</h2>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <i :class="`pi ${service.icon}`"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <ul>
                <li v-for="(feature, idx) in service.features" :key="idx">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Equipo Veterinario -->
      <div class="team-section" ref="teamSection">
        <h2 class="team-title">{{ t('veterinarians.team.title') }}</h2>
        <p class="team-subtitle">{{ t('veterinarians.team.subtitle') }}</p>
        <div class="team-grid">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image-wrapper">
              <img :src="member.image" :alt="member.name" class="member-image">
              <div class="member-social">
                <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
                  <i class="pi pi-linkedin"></i>
                </a>
                <a v-if="member.twitter" :href="member.twitter" target="_blank">
                  <i class="pi pi-twitter"></i>
                </a>
                <a v-if="member.email" :href="`mailto:${member.email}`">
                  <i class="pi pi-envelope"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-description">{{ member.description }}</p>
              <div class="member-specialties">
                <span 
                  class="specialty-tag" 
                  v-for="(specialty, idx) in member.specialties" 
                  :key="idx"
                >
                  {{ specialty }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horarios y Contacto -->
      <div class="schedule-contact" ref="scheduleContact">
        <!-- Horarios -->
        <div class="schedule-card">
          <div class="card-header">
            <div class="header-icon">
              <i class="pi pi-clock"></i>
            </div>
            <div class="header-content">
              <h3>{{ t('veterinarians.schedule.title') }}</h3>
              <p>{{ t('veterinarians.schedule.subtitle') }}</p>
            </div>
          </div>
          <div class="schedule-list">
            <div 
              class="schedule-item" 
              v-for="(day, index) in schedule" 
              :key="index"
              :class="{ closed: day.closed }"
            >
              <span class="day">{{ day.day }}</span>
              <span class="time">{{ day.time }}</span>
            </div>
          </div>
          <div class="emergency-note">
            <i class="pi pi-exclamation-triangle"></i>
            <p>{{ t('veterinarians.schedule.emergency') }}</p>
          </div>
        </div>

        <!-- Contacto -->
        <div class="contact-card">
          <div class="card-header">
            <div class="header-icon">
              <i class="pi pi-phone"></i>
            </div>
            <div class="header-content">
              <h3>{{ t('veterinarians.contact.title') }}</h3>
              <p>{{ t('veterinarians.contact.subtitle') }}</p>
            </div>
          </div>
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <i class="pi pi-phone"></i>
              </div>
              <div class="method-info">
                <p class="method-label">{{ t('veterinarians.contact.phone') }}</p>
                <p class="method-value">+57 (601) 234-5678</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">
                <i class="pi pi-whatsapp"></i>
              </div>
              <div class="method-info">
                <p class="method-label">{{ t('veterinarians.contact.whatsapp') }}</p>
                <p class="method-value">+57 312 345 6789</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">
                <i class="pi pi-envelope"></i>
              </div>
              <div class="method-info">
                <p class="method-label">{{ t('veterinarians.contact.email') }}</p>
                <p class="method-value">veterinaria@huellas.com</p>
              </div>
            </div>
            <div class="contact-method">
            <div class="method-icon">
                <i class="pi pi-map-marker"></i>
              </div>
              <div class="method-info">
                <p class="method-label">{{ t('veterinarians.contact.address') }}</p>
                <p class="method-value">Calle 123 #45-67, Bogotá</p>
              </div>
            </div>
          </div>
          <div class="contact-form-link">
            <NuxtLink to="/contact" class="btn-contact">
              <i class="pi pi-send"></i>
              <span>{{ t('veterinarians.contact.sendMessage') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section" ref="ctaSection">
        <div class="cta-icon">
          <i class="pi pi-calendar"></i>
        </div>
        <h2 class="cta-title">{{ t('veterinarians.cta.title') }}</h2>
        <p class="cta-description">{{ t('veterinarians.cta.description') }}</p>
        <div class="cta-buttons">
          <NuxtLink to="/appointments" class="btn-primary">
            <i class="pi pi-calendar-plus"></i>
            <span>{{ t('veterinarians.cta.bookAppointment') }}</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            <i class="pi pi-phone"></i>
            <span>{{ t('veterinarians.cta.callUs') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const { t } = useI18n()

// Refs para animaciones
const sectionHeader = ref(null)
const servicesSection = ref(null)
const teamSection = ref(null)
const scheduleContact = ref(null)
const ctaSection = ref(null)

// Servicios veterinarios
const services = computed(() => [
  {
    icon: 'pi-heart',
    title: t('veterinarians.services.consultation.title'),
    description: t('veterinarians.services.consultation.description'),
    features: [
      t('veterinarians.services.consultation.feature1'),
      t('veterinarians.services.consultation.feature2'),
      t('veterinarians.services.consultation.feature3'),
      t('veterinarians.services.consultation.feature4')
    ]
  },
  {
    icon: 'pi-shield',
    title: t('veterinarians.services.vaccines.title'),
    description: t('veterinarians.services.vaccines.description'),
    features: [
      t('veterinarians.services.vaccines.feature1'),
      t('veterinarians.services.vaccines.feature2'),
      t('veterinarians.services.vaccines.feature3'),
      t('veterinarians.services.vaccines.feature4')
    ]
  },
  {
    icon: 'pi-star',
    title: t('veterinarians.services.surgery.title'),
    description: t('veterinarians.services.surgery.description'),
    features: [
      t('veterinarians.services.surgery.feature1'),
      t('veterinarians.services.surgery.feature2'),
      t('veterinarians.services.surgery.feature3'),
      t('veterinarians.services.surgery.feature4')
    ]
  },
  {
    icon: 'pi-eye',
    title: t('veterinarians.services.diagnostics.title'),
    description: t('veterinarians.services.diagnostics.description'),
    features: [
      t('veterinarians.services.diagnostics.feature1'),
      t('veterinarians.services.diagnostics.feature2'),
      t('veterinarians.services.diagnostics.feature3'),
      t('veterinarians.services.diagnostics.feature4')
    ]
  },
  {
    icon: 'pi-inbox',
    title: t('veterinarians.services.hospitalization.title'),
    description: t('veterinarians.services.hospitalization.description'),
    features: [
      t('veterinarians.services.hospitalization.feature1'),
      t('veterinarians.services.hospitalization.feature2'),
      t('veterinarians.services.hospitalization.feature3'),
      t('veterinarians.services.hospitalization.feature4')
    ]
  },
  {
    icon: 'pi-sun',
    title: t('veterinarians.services.grooming.title'),
    description: t('veterinarians.services.grooming.description'),
    features: [
      t('veterinarians.services.grooming.feature1'),
      t('veterinarians.services.grooming.feature2'),
      t('veterinarians.services.grooming.feature3'),
      t('veterinarians.services.grooming.feature4')
    ]
  }
])

// Equipo veterinario
const teamMembers = computed(() => [
  {
    name: 'Dra. María González',
    role: t('veterinarians.team.member1.role'),
    description: t('veterinarians.team.member1.description'),
    image: 'https://st4.depositphotos.com/1043073/24997/i/1600/depositphotos_249978000-stock-photo-female-doctor-showing-blank-area.jpg',
    specialties: [
      t('veterinarians.team.member1.specialty1'),
      t('veterinarians.team.member1.specialty2'),
      t('veterinarians.team.member1.specialty3')
    ],
    linkedin: '#',
    twitter: '#',
    email: 'maria.gonzalez@huellas.com'
  },
  {
    name: 'Dr. Carlos Ramírez',
    role: t('veterinarians.team.member2.role'),
    description: t('veterinarians.team.member2.description'),
    image: '/vet-2.jpg',
    specialties: [
      t('veterinarians.team.member2.specialty1'),
      t('veterinarians.team.member2.specialty2'),
      t('veterinarians.team.member2.specialty3')
    ],
    linkedin: '#',
    twitter: '#',
    email: 'carlos.ramirez@huellas.com'
  },
  {
    name: 'Dra. Ana Martínez',
    role: t('veterinarians.team.member3.role'),
    description: t('veterinarians.team.member3.description'),
    image: '/vet-3.jpg',
    specialties: [
      t('veterinarians.team.member3.specialty1'),
      t('veterinarians.team.member3.specialty2'),
      t('veterinarians.team.member3.specialty3')
    ],
    linkedin: '#',
    twitter: '#',
    email: 'ana.martinez@huellas.com'
  },
  {
    name: 'Dr. Luis Hernández',
    role: t('veterinarians.team.member4.role'),
    description: t('veterinarians.team.member4.description'),
    image: '/vet-4.jpg',
    specialties: [
      t('veterinarians.team.member4.specialty1'),
      t('veterinarians.team.member4.specialty2'),
      t('veterinarians.team.member4.specialty3')
    ],
    linkedin: '#',
    twitter: '#',
    email: 'luis.hernandez@huellas.com'
  }
])

// Horarios
const schedule = computed(() => [
  {
    day: t('veterinarians.schedule.monday'),
    time: '8:00 AM - 6:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.tuesday'),
    time: '8:00 AM - 6:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.wednesday'),
    time: '8:00 AM - 6:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.thursday'),
    time: '8:00 AM - 6:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.friday'),
    time: '8:00 AM - 6:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.saturday'),
    time: '9:00 AM - 2:00 PM',
    closed: false
  },
  {
    day: t('veterinarians.schedule.sunday'),
    time: t('veterinarians.schedule.closed'),
    closed: true
  }
])

// Intersection Observer para animaciones
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observar elementos
  if (sectionHeader.value) observer.observe(sectionHeader.value)
  if (servicesSection.value) observer.observe(servicesSection.value)
  if (teamSection.value) observer.observe(teamSection.value)
  if (scheduleContact.value) observer.observe(scheduleContact.value)
  if (ctaSection.value) observer.observe(ctaSection.value)
})
</script>