<template>
  <section class="terms-section">
    <!-- Formas decorativas de fondo -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="terms-container">
      <!-- Título de la sección -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-icon">
          <i class="pi pi-file-check"></i>
        </div>
        <h1 class="section-title">
          <span class="title-emoji">📋</span>
          <span class="title-main">{{ t('terms.title') }}</span>
        </h1>
        <p class="last-updated">{{ t('terms.lastUpdated') }}</p>
      </div>

      <!-- Introducción -->
      <div class="terms-intro" ref="termsIntro">
        <p class="intro-text">{{ t('terms.intro') }}</p>
      </div>

      <!-- Contenido de los términos -->
      <div class="terms-content" ref="termsContent">
        
        <!-- 1. Aceptación de términos -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-check-circle"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section1.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section1.text') }}</p>
          </div>
        </div>

        <!-- 2. Definiciones -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-book"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section2.title') }}</h2>
          </div>
          <div class="block-content">
            <ul class="terms-list">
              <li>
                <strong>{{ t('terms.section2.def1Title') }}</strong> {{ t('terms.section2.def1Text') }}
              </li>
              <li>
                <strong>{{ t('terms.section2.def2Title') }}</strong> {{ t('terms.section2.def2Text') }}
              </li>
              <li>
                <strong>{{ t('terms.section2.def3Title') }}</strong> {{ t('terms.section2.def3Text') }}
              </li>
              <li>
                <strong>{{ t('terms.section2.def4Title') }}</strong> {{ t('terms.section2.def4Text') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- 3. Servicios ofrecidos -->
        <div class="terms-block highlight-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-gift"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section3.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section3.intro') }}</p>
            <ul class="terms-list services-list">
              <li>{{ t('terms.section3.service1') }}</li>
              <li>{{ t('terms.section3.service2') }}</li>
              <li>{{ t('terms.section3.service3') }}</li>
              <li>{{ t('terms.section3.service4') }}</li>
            </ul>
            <p class="info-note">{{ t('terms.section3.note') }}</p>
          </div>
        </div>

        <!-- 4. Uso del sitio web -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-desktop"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section4.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section4.intro') }}</p>
            <ul class="terms-list prohibited-list">
              <li>{{ t('terms.section4.prohibited1') }}</li>
              <li>{{ t('terms.section4.prohibited2') }}</li>
              <li>{{ t('terms.section4.prohibited3') }}</li>
              <li>{{ t('terms.section4.prohibited4') }}</li>
              <li>{{ t('terms.section4.prohibited5') }}</li>
            </ul>
          </div>
        </div>

        <!-- 5. Proceso de adopción -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-heart"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section5.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section5.intro') }}</p>
            <ol class="terms-ordered-list">
              <li>{{ t('terms.section5.step1') }}</li>
              <li>{{ t('terms.section5.step2') }}</li>
              <li>{{ t('terms.section5.step3') }}</li>
              <li>{{ t('terms.section5.step4') }}</li>
              <li>{{ t('terms.section5.step5') }}</li>
            </ol>
            <p class="warning-note">{{ t('terms.section5.warning') }}</p>
          </div>
        </div>

        <!-- 6. Servicios veterinarios -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-shield"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section6.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section6.text1') }}</p>
            <p>{{ t('terms.section6.text2') }}</p>
            <p class="info-note">{{ t('terms.section6.note') }}</p>
          </div>
        </div>

        <!-- 7. Pagos y facturación -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-credit-card"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section7.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section7.intro') }}</p>
            <ul class="terms-list">
              <li>{{ t('terms.section7.item1') }}</li>
              <li>{{ t('terms.section7.item2') }}</li>
              <li>{{ t('terms.section7.item3') }}</li>
              <li>{{ t('terms.section7.item4') }}</li>
            </ul>
          </div>
        </div>

        <!-- 8. Cancelaciones y reembolsos -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-refresh"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section8.title') }}</h2>
          </div>
          <div class="block-content">
            <p><strong>{{ t('terms.section8.adoptionTitle') }}</strong></p>
            <p>{{ t('terms.section8.adoptionText') }}</p>
            <p><strong>{{ t('terms.section8.appointmentTitle') }}</strong></p>
            <p>{{ t('terms.section8.appointmentText') }}</p>
          </div>
        </div>

        <!-- 9. Propiedad intelectual -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-copyright"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section9.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section9.text') }}</p>
          </div>
        </div>

        <!-- 10. Limitación de responsabilidad -->
        <div class="terms-block warning-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-exclamation-triangle"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section10.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section10.text1') }}</p>
            <p>{{ t('terms.section10.text2') }}</p>
          </div>
        </div>

        <!-- 11. Indemnización -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-balance-scale"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section11.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section11.text') }}</p>
          </div>
        </div>

        <!-- 12. Modificaciones -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-pencil"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section12.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section12.text') }}</p>
          </div>
        </div>

        <!-- 13. Ley aplicable -->
        <div class="terms-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-map"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section13.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section13.text') }}</p>
          </div>
        </div>

        <!-- 14. Contacto -->
        <div class="terms-block contact-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-envelope"></i>
            </div>
            <h2 class="block-title">{{ t('terms.section14.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('terms.section14.intro') }}</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="pi pi-envelope"></i>
                <a href="mailto:legal@onelessonperday.com">legal@onelessonperday.com</a>
              </div>
              <div class="contact-item">
                <i class="pi pi-phone"></i>
                <a href="tel:+573123456789">+57 312 345 6789</a>
              </div>
              <div class="contact-item">
                <i class="pi pi-map-marker"></i>
                <span>Bogotá, Colombia</span>
              </div>
              <div class="contact-item">
                <i class="pi pi-globe"></i>
                <a href="https://onelessonperday.com" target="_blank" rel="noopener">onelessonperday.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="terms-cta" ref="termsCta">
        <div class="cta-icon">
          <i class="pi pi-check-circle"></i>
        </div>
        <h3 class="cta-title">{{ t('terms.cta.title') }}</h3>
        <p class="cta-text">{{ t('terms.cta.text') }}</p>
        <div class="cta-buttons">
          <NuxtLink to="/" class="btn-primary">
            <i class="pi pi-home"></i>
            <span>{{ t('terms.cta.homeButton') }}</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            <i class="pi pi-comments"></i>
            <span>{{ t('terms.cta.contactButton') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// SEO Meta Tags
useHead({
  title: 'Términos y Condiciones - One Lesson Per Day',
  meta: [
    {
      name: 'description',
      content: 'Términos y condiciones de uso de One Lesson Per Day. Conoce las reglas y políticas para el uso de nuestros servicios de adopción, veterinaria y etología animal.'
    },
    {
      name: 'keywords',
      content: 'términos y condiciones, políticas de uso, One Lesson Per Day, adopción mascotas, servicios veterinarios, términos legales'
    },
    {
      property: 'og:title',
      content: 'Términos y Condiciones - One Lesson Per Day'
    },
    {
      property: 'og:description',
      content: 'Lee nuestros términos y condiciones de servicio. Información clara sobre el uso de nuestra plataforma y servicios.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://onelessonperday.com/terminos-y-condiciones'
    }
  ]
})

const { t } = useI18n()

const sectionHeader = ref(null)
const termsIntro = ref(null)
const termsContent = ref(null)
const termsCta = ref(null)

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
  if (termsIntro.value) observer.observe(termsIntro.value)
  if (termsContent.value) observer.observe(termsContent.value)
  if (termsCta.value) observer.observe(termsCta.value)
})
</script>