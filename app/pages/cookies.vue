<template>
  <section class="cookies-section">
    <!-- Formas decorativas de fondo -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="cookies-container">
      <!-- Título de la sección -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-icon">
          <i class="pi pi-cookie"></i>
        </div>
        <h1 class="section-title">
          <span class="title-emoji">🍪</span>
          <span class="title-main">{{ t('cookies.title') }}</span>
        </h1>
        <p class="last-updated">{{ t('cookies.lastUpdated') }}</p>
      </div>

      <!-- Introducción -->
      <div class="cookies-intro" ref="cookiesIntro">
        <p class="intro-text">{{ t('cookies.intro') }}</p>
      </div>

      <!-- Contenido de la política -->
      <div class="cookies-content" ref="cookiesContent">
        
        <!-- 1. ¿Qué son las cookies? -->
        <div class="cookie-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-question-circle"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section1.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section1.text1') }}</p>
            <p>{{ t('cookies.section1.text2') }}</p>
          </div>
        </div>

        <!-- 2. Tipos de cookies -->
        <div class="cookie-block highlight-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-list"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section2.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section2.intro') }}</p>
            
            <!-- Tabla de cookies -->
            <div class="cookies-table">
              <!-- Cookie esencial -->
              <div class="cookie-type-card essential">
                <div class="cookie-type-header">
                  <div class="cookie-type-icon">
                    <i class="pi pi-shield"></i>
                  </div>
                  <h3>{{ t('cookies.section2.essential.title') }}</h3>
                  <span class="cookie-badge required">{{ t('cookies.section2.required') }}</span>
                </div>
                <p class="cookie-description">{{ t('cookies.section2.essential.description') }}</p>
                <div class="cookie-examples">
                  <strong>{{ t('cookies.section2.examples') }}</strong>
                  <ul>
                    <li>{{ t('cookies.section2.essential.example1') }}</li>
                    <li>{{ t('cookies.section2.essential.example2') }}</li>
                    <li>{{ t('cookies.section2.essential.example3') }}</li>
                  </ul>
                </div>
              </div>

              <!-- Cookies de análisis -->
              <div class="cookie-type-card analytics">
                <div class="cookie-type-header">
                  <div class="cookie-type-icon">
                    <i class="pi pi-chart-line"></i>
                  </div>
                  <h3>{{ t('cookies.section2.analytics.title') }}</h3>
                  <span class="cookie-badge optional">{{ t('cookies.section2.optional') }}</span>
                </div>
                <p class="cookie-description">{{ t('cookies.section2.analytics.description') }}</p>
                <div class="cookie-examples">
                  <strong>{{ t('cookies.section2.examples') }}</strong>
                  <ul>
                    <li>{{ t('cookies.section2.analytics.example1') }}</li>
                    <li>{{ t('cookies.section2.analytics.example2') }}</li>
                    <li>{{ t('cookies.section2.analytics.example3') }}</li>
                  </ul>
                </div>
                <div class="cookie-duration">
                  <i class="pi pi-clock"></i>
                  <span>{{ t('cookies.section2.analytics.duration') }}</span>
                </div>
              </div>

              <!-- Cookies de personalización -->
              <div class="cookie-type-card personalization">
                <div class="cookie-type-header">
                  <div class="cookie-type-icon">
                    <i class="pi pi-user"></i>
                  </div>
                  <h3>{{ t('cookies.section2.personalization.title') }}</h3>
                  <span class="cookie-badge optional">{{ t('cookies.section2.optional') }}</span>
                </div>
                <p class="cookie-description">{{ t('cookies.section2.personalization.description') }}</p>
                <div class="cookie-examples">
                  <strong>{{ t('cookies.section2.examples') }}</strong>
                  <ul>
                    <li>{{ t('cookies.section2.personalization.example1') }}</li>
                    <li>{{ t('cookies.section2.personalization.example2') }}</li>
                    <li>{{ t('cookies.section2.personalization.example3') }}</li>
                  </ul>
                </div>
                <div class="cookie-duration">
                  <i class="pi pi-clock"></i>
                  <span>{{ t('cookies.section2.personalization.duration') }}</span>
                </div>
              </div>

              <!-- Cookies de terceros -->
              <div class="cookie-type-card thirdparty">
                <div class="cookie-type-header">
                  <div class="cookie-type-icon">
                    <i class="pi pi-external-link"></i>
                  </div>
                  <h3>{{ t('cookies.section2.thirdparty.title') }}</h3>
                  <span class="cookie-badge optional">{{ t('cookies.section2.optional') }}</span>
                </div>
                <p class="cookie-description">{{ t('cookies.section2.thirdparty.description') }}</p>
                <div class="cookie-examples">
                  <strong>{{ t('cookies.section2.providers') }}</strong>
                  <ul>
                    <li>{{ t('cookies.section2.thirdparty.provider1') }}</li>
                    <li>{{ t('cookies.section2.thirdparty.provider2') }}</li>
                    <li>{{ t('cookies.section2.thirdparty.provider3') }}</li>
                    <li>{{ t('cookies.section2.thirdparty.provider4') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Finalidad de las cookies -->
        <div class="cookie-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-bullseye"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section3.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section3.intro') }}</p>
            <ul class="cookie-list">
              <li>{{ t('cookies.section3.purpose1') }}</li>
              <li>{{ t('cookies.section3.purpose2') }}</li>
              <li>{{ t('cookies.section3.purpose3') }}</li>
              <li>{{ t('cookies.section3.purpose4') }}</li>
              <li>{{ t('cookies.section3.purpose5') }}</li>
            </ul>
          </div>
        </div>

        <!-- 4. Consentimiento -->
        <div class="cookie-block consent-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-check-square"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section4.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section4.text1') }}</p>
            <p>{{ t('cookies.section4.text2') }}</p>
            <div class="info-note">
              <i class="pi pi-info-circle"></i>
              <span>{{ t('cookies.section4.note') }}</span>
            </div>
          </div>
        </div>

        <!-- 5. Cómo gestionar cookies -->
        <div class="cookie-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-cog"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section5.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section5.intro') }}</p>
            
            <!-- Guías por navegador -->
            <div class="browser-guides">
              <h3>{{ t('cookies.section5.browsersTitle') }}</h3>
              <div class="browser-grid">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="browser-card">
                  <i class="pi pi-globe"></i>
                  <span>Google Chrome</span>
                </a>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener" class="browser-card">
                  <i class="pi pi-globe"></i>
                  <span>Mozilla Firefox</span>
                </a>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener" class="browser-card">
                  <i class="pi pi-globe"></i>
                  <span>Safari</span>
                </a>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" class="browser-card">
                  <i class="pi pi-globe"></i>
                  <span>Microsoft Edge</span>
                </a>
              </div>
            </div>

            <div class="warning-note">
              <i class="pi pi-exclamation-triangle"></i>
              <span>{{ t('cookies.section5.warning') }}</span>
            </div>
          </div>
        </div>

        <!-- 6. Cookies específicas utilizadas -->
        <div class="cookie-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-table"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section6.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section6.intro') }}</p>
            
            <div class="cookies-detail-table">
              <div class="table-header">
                <div>{{ t('cookies.section6.tableName') }}</div>
                <div>{{ t('cookies.section6.tableProvider') }}</div>
                <div>{{ t('cookies.section6.tablePurpose') }}</div>
                <div>{{ t('cookies.section6.tableDuration') }}</div>
              </div>
              
              <div class="table-row">
                <div class="cell"><code>session_id</code></div>
                <div class="cell">One Lesson Per Day</div>
                <div class="cell">{{ t('cookies.section6.cookie1Purpose') }}</div>
                <div class="cell">{{ t('cookies.section6.cookie1Duration') }}</div>
              </div>
              
              <div class="table-row">
                <div class="cell"><code>lang_preference</code></div>
                <div class="cell">One Lesson Per Day</div>
                <div class="cell">{{ t('cookies.section6.cookie2Purpose') }}</div>
                <div class="cell">{{ t('cookies.section6.cookie2Duration') }}</div>
              </div>
              
              <div class="table-row">
                <div class="cell"><code>_ga</code></div>
                <div class="cell">Google Analytics</div>
                <div class="cell">{{ t('cookies.section6.cookie3Purpose') }}</div>
                <div class="cell">{{ t('cookies.section6.cookie3Duration') }}</div>
              </div>
              
              <div class="table-row">
                <div class="cell"><code>_gid</code></div>
                <div class="cell">Google Analytics</div>
                <div class="cell">{{ t('cookies.section6.cookie4Purpose') }}</div>
                <div class="cell">{{ t('cookies.section6.cookie4Duration') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 7. Actualizaciones -->
        <div class="cookie-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-refresh"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section7.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section7.text') }}</p>
          </div>
        </div>

        <!-- 8. Contacto -->
        <div class="cookie-block contact-block">
          <div class="block-header">
            <div class="block-icon">
              <i class="pi pi-envelope"></i>
            </div>
            <h2 class="block-title">{{ t('cookies.section8.title') }}</h2>
          </div>
          <div class="block-content">
            <p>{{ t('cookies.section8.intro') }}</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="pi pi-envelope"></i>
                <a href="mailto:privacidad@onelessonperday.com">privacidad@onelessonperday.com</a>
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
      <div class="cookies-cta" ref="cookiesCta">
        <div class="cta-icon">
          <i class="pi pi-shield-check"></i>
        </div>
        <h3 class="cta-title">{{ t('cookies.cta.title') }}</h3>
        <p class="cta-text">{{ t('cookies.cta.text') }}</p>
        <div class="cta-buttons">
          <NuxtLink to="/" class="btn-primary">
            <i class="pi pi-home"></i>
            <span>{{ t('cookies.cta.homeButton') }}</span>
          </NuxtLink>
          <NuxtLink to="/privacy" class="btn-secondary">
            <i class="pi pi-shield"></i>
            <span>{{ t('cookies.cta.privacyButton') }}</span>
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
  title: 'Política de Cookies - One Lesson Per Day',
  meta: [
    {
      name: 'description',
      content: 'Conoce cómo One Lesson Per Day utiliza cookies para mejorar tu experiencia de navegación. Información sobre tipos de cookies, gestión y configuración.'
    },
    {
      name: 'keywords',
      content: 'política de cookies, cookies, privacidad, One Lesson Per Day, gestión de cookies, Google Analytics, consentimiento cookies'
    },
    {
      property: 'og:title',
      content: 'Política de Cookies - One Lesson Per Day'
    },
    {
      property: 'og:description',
      content: 'Información transparente sobre el uso de cookies en nuestro sitio web y cómo gestionarlas.'
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
      href: 'https://onelessonperday.com/politica-de-cookies'
    }
  ]
})

const { t } = useI18n()

const sectionHeader = ref(null)
const cookiesIntro = ref(null)
const cookiesContent = ref(null)
const cookiesCta = ref(null)

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
  if (cookiesIntro.value) observer.observe(cookiesIntro.value)
  if (cookiesContent.value) observer.observe(cookiesContent.value)
  if (cookiesCta.value) observer.observe(cookiesCta.value)
})
</script>