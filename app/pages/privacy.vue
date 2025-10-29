<template>
  <section class="privacy-section">
    <!-- Formas decorativas de fondo -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="privacy-container">
      <!-- Título de la sección -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-icon">
          <i class="pi pi-shield-check"></i>
        </div>
        <h1 class="section-title">
          <span class="title-emoji">🐾</span>
          <span class="title-main">{{ t('privacy.title') }}</span>
        </h1>
        <p class="last-updated">{{ t('privacy.lastUpdated') }}</p>
      </div>

      <!-- Introducción -->
      <div class="privacy-intro" ref="privacyIntro">
        <p class="intro-text">{{ t('privacy.intro') }}</p>
      </div>

      <!-- Contenido de la política -->
      <div class="privacy-content" ref="privacyContent">
        
        <!-- 1. Información que recopilamos -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-database"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section1.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section1.intro') }}</p>
            <ul class="policy-list">
              <li>
                <strong>{{ t('privacy.section1.item1Title') }}</strong> {{ t('privacy.section1.item1Text') }}
              </li>
              <li>
                <strong>{{ t('privacy.section1.item2Title') }}</strong> {{ t('privacy.section1.item2Text') }}
              </li>
              <li>
                <strong>{{ t('privacy.section1.item3Title') }}</strong> {{ t('privacy.section1.item3Text') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- 2. Finalidad del tratamiento -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-bullseye"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section2.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section2.intro') }}</p>
            <ol class="policy-ordered-list">
              <li>{{ t('privacy.section2.item1') }}</li>
              <li>{{ t('privacy.section2.item2') }}</li>
              <li>{{ t('privacy.section2.item3') }}</li>
              <li>{{ t('privacy.section2.item4') }}</li>
              <li>{{ t('privacy.section2.item5') }}</li>
            </ol>
          </div>
        </div>

        <!-- 3. Uso de cookies -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-cookie"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section3.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section3.intro') }}</p>
            <ul class="policy-list">
              <li>{{ t('privacy.section3.item1') }}</li>
              <li>{{ t('privacy.section3.item2') }}</li>
              <li>{{ t('privacy.section3.item3') }}</li>
            </ul>
            <p class="info-note">{{ t('privacy.section3.note') }}</p>
          </div>
        </div>

        <!-- 4. Seguridad -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-lock"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section4.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section4.text') }}</p>
          </div>
        </div>

        <!-- 5. Derechos del titular -->
        <div class="policy-block highlight-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-verified"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section5.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section5.intro') }}</p>
            <ul class="policy-list rights-list">
              <li>{{ t('privacy.section5.right1') }}</li>
              <li>{{ t('privacy.section5.right2') }}</li>
              <li>{{ t('privacy.section5.right3') }}</li>
              <li>{{ t('privacy.section5.right4') }}</li>
            </ul>
            <div class="contact-info">
              <p>{{ t('privacy.section5.contact') }}</p>
              <a href="mailto:privacidad@onelessonperday.com" class="email-link">
                <i class="pi pi-envelope"></i>
                privacidad@onelessonperday.com
              </a>
            </div>
          </div>
        </div>

        <!-- 6. Transferencia y divulgación -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-share-alt"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section6.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section6.intro') }}</p>
            <ul class="policy-list">
              <li>{{ t('privacy.section6.item1') }}</li>
              <li>{{ t('privacy.section6.item2') }}</li>
              <li>{{ t('privacy.section6.item3') }}</li>
            </ul>
          </div>
        </div>

        <!-- 7. Enlaces externos -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-external-link"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section7.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section7.text') }}</p>
          </div>
        </div>

        <!-- 8. Conservación de datos -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-clock"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section8.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section8.text') }}</p>
          </div>
        </div>

        <!-- 9. Cambios a esta política -->
        <div class="policy-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-refresh"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section9.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section9.text') }}</p>
          </div>
        </div>

        <!-- 10. Contacto -->
        <div class="policy-block contact-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-phone"></i>
            </div>
            <h2 class="block-title">{{ t('privacy.section10.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('privacy.section10.intro') }}</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="pi pi-envelope"></i>
                <a href="mailto:privacidad@onelessonperday.com">privacidad@onelessonperday.com</a>
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
      <div class="privacy-cta" ref="privacyCta">
        <div class="cta-icon">
          <i class="pi pi-heart-fill"></i>
        </div>
        <h3 class="cta-title">{{ t('privacy.cta.title') }}</h3>
        <p class="cta-text">{{ t('privacy.cta.text') }}</p>
        <NuxtLink to="/" class="btn-primary">
          <i class="pi pi-home"></i>
          <span>{{ t('privacy.cta.button') }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// SEO Meta Tags
useHead({
  title: 'Política de Privacidad - One Lesson Per Day',
  meta: [
    {
      name: 'description',
      content: 'Conoce cómo One Lesson Per Day protege tu privacidad y maneja tus datos personales. Política de privacidad conforme a la Ley 1581 de 2012 de Colombia.'
    },
    {
      name: 'keywords',
      content: 'política de privacidad, protección de datos, privacidad, One Lesson Per Day, datos personales, GDPR Colombia, Ley 1581 de 2012'
    },
    {
      property: 'og:title',
      content: 'Política de Privacidad - One Lesson Per Day'
    },
    {
      property: 'og:description',
      content: 'Valoramos y respetamos la privacidad de nuestros usuarios. Conoce cómo protegemos tus datos personales.'
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
      href: 'https://onelessonperday.com/politica-de-privacidad'
    }
  ]
})

const { t } = useI18n()

const sectionHeader = ref(null)
const privacyIntro = ref(null)
const privacyContent = ref(null)
const privacyCta = ref(null)

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
  if (privacyIntro.value) observer.observe(privacyIntro.value)
  if (privacyContent.value) observer.observe(privacyContent.value)
  if (privacyCta.value) observer.observe(privacyCta.value)
})
</script>