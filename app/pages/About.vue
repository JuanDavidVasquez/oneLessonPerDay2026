<template>
  <section class="about-section">
    <!-- Formas decorativas de fondo -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="about-container">
      <!-- Título de la sección -->
      <div class="section-header" ref="sectionHeader">
        <span class="section-tag">{{ t('about.tag') }}</span>
        <h2 class="section-title">
          <span class="title-accent">{{ t('about.titleAccent') }}</span>
          <span class="title-main">{{ t('about.titleMain') }}</span>
        </h2>
        <p class="section-description">
          {{ t('about.description') }}
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="about-content">
        <!-- Columna izquierda - Imagen y estadísticas -->
        <div class="content-left" ref="contentLeft">
          <div class="image-wrapper">
            <div class="image-background"></div>
            <img src="/about-pets.jpg" alt="Mascotas felices" class="main-image">

            <!-- Badge flotante -->
            <div class="experience-badge">
              <div class="badge-icon">
                <i class="pi pi-star-fill"></i>
              </div>
              <div class="badge-content">
                <span class="badge-number">10+</span>
                <span class="badge-text">{{ t('about.yearsExperience') }}</span>
              </div>
            </div>
          </div>

          <!-- Estadísticas rápidas -->
          <div class="quick-stats">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="pi pi-heart-fill"></i>
              </div>
              <div class="stat-info">
                <Transition name="fade" appear>
                  <span class="stat-value">{{ counter }}+</span>
                </Transition>
                <span class="stat-label">{{ t('about.rescuedPets') }}</span>

              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="pi pi-users"></i>
              </div>
              <div class="stat-info">
                <Transition name="fade" appear>
                  <span class="stat-value">{{ counterF }}+</span>
                </Transition>
                <span class="stat-label">{{ t('about.happyFamilies') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Información -->
        <div class="content-right" ref="contentRight">
          <!-- Misión -->
          <div class="info-block mission-block">
            <div class="block-icon">
              <i class="pi pi-compass"></i>
            </div>
            <div class="block-content">
              <h3 class="block-title">{{ t('about.missionTitle') }}</h3>
              <p class="block-text">
                {{ t('about.missionText') }}
              </p>
            </div>
          </div>

          <!-- Visión -->
          <div class="info-block vision-block">
            <div class="block-icon">
              <i class="pi pi-eye"></i>
            </div>
            <div class="block-content">
              <h3 class="block-title">{{ t('about.visionTitle') }}</h3>
              <p class="block-text">
                {{ t('about.visionText') }}
              </p>
            </div>
          </div>

          <!-- Valores -->
          <div class="values-section">
            <h3 class="values-title">{{ t('about.valuesTitle') }}</h3>
            <div class="values-grid">
              <div class="value-item" v-for="(value, index) in values" :key="index">
                <i :class="`pi ${value.icon}`"></i>
                <span>{{ value.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Proceso de adopción -->
      <div class="adoption-process" ref="adoptionProcess">
        <h3 class="process-title">{{ t('about.processTitle') }}</h3>
        <div class="process-steps">
          <div class="process-step" v-for="(step, index) in adoptionSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <i :class="`pi ${step.icon}`"></i>
            </div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-connector" v-if="index < adoptionSteps.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { t } = useI18n()
const counter = ref(0)
const counterF = ref(0)
const target = 2500
const duration = 100
const targetF = 1800
const durationF = 100

const sectionHeader = ref(null)
const contentLeft = ref(null)
const contentRight = ref(null)
const adoptionProcess = ref(null)

// Datos para los valores
const values = computed(() => [
  { icon: 'pi-heart', text: t('about.value1') },
  { icon: 'pi-shield', text: t('about.value2') },
  { icon: 'pi-sparkles', text: t('about.value3') },
  { icon: 'pi-users', text: t('about.value4') }
])

// Datos para el proceso de adopción
const adoptionSteps = computed(() => [
  {
    icon: 'pi-search',
    title: t('about.step1Title'),
    description: t('about.step1Description')
  },
  {
    icon: 'pi-file-edit',
    title: t('about.step2Title'),
    description: t('about.step2Description')
  },
  {
    icon: 'pi-home',
    title: t('about.step3Title'),
    description: t('about.step3Description')
  },
  {
    icon: 'pi-check-circle',
    title: t('about.step4Title'),
    description: t('about.step4Description')
  }
])

onMounted(() => {
  let start = 0
  const stepTime = Math.abs(Math.floor(duration / target))
  const timer = setInterval(() => {
    start += 1
    counter.value = start
    if (start >= target) clearInterval(timer)
  }, stepTime)
})
onMounted(() => {
  let startF = 0
  const stepTimeF = Math.abs(Math.floor(durationF / targetF))
  const timerF = setInterval(() => {
    startF += 1
    counterF.value = startF
    if (startF >= targetF) clearInterval(timerF)
  }, stepTimeF)
})

// Intersection Observer para animaciones al scroll
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
  if (contentLeft.value) observer.observe(contentLeft.value)
  if (contentRight.value) observer.observe(contentRight.value)
  if (adoptionProcess.value) observer.observe(adoptionProcess.value)
})
</script>
