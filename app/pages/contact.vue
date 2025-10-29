<template>
  <section class="contact-section">
    <!-- Formas decorativas de fondo -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="contact-container">
      <!-- Título de la sección -->
      <div class="section-header" ref="sectionHeader">
        <span class="section-tag">{{ t('contact.tag') }}</span>
        <h2 class="section-title">
          <span class="title-accent">{{ t('contact.titleAccent') }}</span>
          <span class="title-main">{{ t('contact.titleMain') }}</span>
        </h2>
        <p class="section-description">
          {{ t('contact.description') }}
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="contact-content">
        <!-- Columna izquierda - Información de contacto -->
        <div class="contact-info" ref="contactInfo">
          <!-- Tarjeta de información -->
          <div class="info-card">
            <h3 class="info-title">{{ t('contact.infoTitle') }}</h3>
            <p class="info-description">{{ t('contact.infoDescription') }}</p>

            <!-- Métodos de contacto -->
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="pi pi-phone"></i>
                </div>
                <div class="method-content">
                  <span class="method-label">{{ t('contact.phoneLabel') }}</span>
                  <a href="tel:+573001234567" class="method-value">+57 300 123 4567</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <div class="method-content">
                  <span class="method-label">{{ t('contact.emailLabel') }}</span>
                  <a href="mailto:contacto@onelessonperday.com" class="method-value">contacto@onelessonperday.com</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="pi pi-map-marker"></i>
                </div>
                <div class="method-content">
                  <span class="method-label">{{ t('contact.locationLabel') }}</span>
                  <span class="method-value">Bogotá, Colombia</span>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="pi pi-clock"></i>
                </div>
                <div class="method-content">
                  <span class="method-label">{{ t('contact.scheduleLabel') }}</span>
                  <span class="method-value">{{ t('contact.scheduleValue') }}</span>
                </div>
              </div>
            </div>

            <!-- Redes sociales -->
            <div class="social-section">
              <h4 class="social-title">{{ t('contact.socialTitle') }}</h4>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <i class="pi pi-facebook"></i>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <i class="pi pi-instagram"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i class="pi pi-twitter"></i>
                </a>
                <a href="#" class="social-link" aria-label="WhatsApp">
                  <i class="pi pi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tarjeta de emergencias -->
          <div class="emergency-card">
            <div class="emergency-icon">
              <i class="pi pi-exclamation-circle"></i>
            </div>
            <div class="emergency-content">
              <h4 class="emergency-title">{{ t('contact.emergencyTitle') }}</h4>
              <p class="emergency-text">{{ t('contact.emergencyText') }}</p>
              <a href="tel:+573009999999" class="emergency-phone">
                <i class="pi pi-phone"></i>
                <span>+57 300 999 9999</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Formulario -->
        <div class="contact-form-wrapper" ref="contactForm">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <h3 class="form-title">{{ t('contact.formTitle') }}</h3>

            <div class="form-group">
              <label for="name" class="form-label">
                {{ t('contact.nameLabel') }}
                <span class="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="form-input"
                :placeholder="t('contact.namePlaceholder')"
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email" class="form-label">
                  {{ t('contact.emailLabel') }}
                  <span class="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="form-input"
                  :placeholder="t('contact.emailPlaceholder')"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">
                  {{ t('contact.phoneLabel') }}
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="form-input"
                  :placeholder="t('contact.phonePlaceholder')"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">
                {{ t('contact.subjectLabel') }}
                <span class="required">*</span>
              </label>
              <select
                id="subject"
                v-model="formData.subject"
                class="form-select"
                required
              >
                <option value="">{{ t('contact.subjectPlaceholder') }}</option>
                <option value="adoption">{{ t('contact.subjectAdoption') }}</option>
                <option value="veterinary">{{ t('contact.subjectVeterinary') }}</option>
                <option value="volunteer">{{ t('contact.subjectVolunteer') }}</option>
                <option value="donation">{{ t('contact.subjectDonation') }}</option>
                <option value="other">{{ t('contact.subjectOther') }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">
                {{ t('contact.messageLabel') }}
                <span class="required">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                class="form-textarea"
                :placeholder="t('contact.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                <i class="pi pi-send" v-if="!isSubmitting"></i>
                <i class="pi pi-spin pi-spinner" v-else></i>
                <span>{{ isSubmitting ? t('contact.sending') : t('contact.sendButton') }}</span>
              </button>
            </div>

            <p class="form-note">
              <i class="pi pi-info-circle"></i>
              {{ t('contact.formNote') }}
            </p>
          </form>
        </div>
      </div>

      <!-- Preguntas frecuentes -->
      <div class="faq-section" ref="faqSection">
        <h3 class="faq-title">{{ t('contact.faqTitle') }}</h3>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-icon">
              <i :class="`pi ${faq.icon}`"></i>
            </div>
            <h4 class="faq-question">{{ faq.question }}</h4>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const { t } = useI18n()
const { setSeo } = useSeo();

setSeo({
  title: 'Contacto - Escríbenos',
  description: 'Contáctanos para adopción, consultas veterinarias o información sobre nuestros servicios. Estamos en Bogotá, Colombia.',
  keywords: [
    'contacto onelessonperday',
    'veterinaria bogotá contacto',
    'adopción contacto',
    'whatsapp veterinaria'
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto',
    description: 'Contáctanos para más información'
  }
});

// Referencias para animaciones
const sectionHeader = ref(null)
const contactInfo = ref(null)
const contactForm = ref(null)
const faqSection = ref(null)

// Estado del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Preguntas frecuentes
const faqs = computed(() => [
  {
    icon: 'pi-clock',
    question: t('contact.faq1Question'),
    answer: t('contact.faq1Answer')
  },
  {
    icon: 'pi-file',
    question: t('contact.faq2Question'),
    answer: t('contact.faq2Answer')
  },
  {
    icon: 'pi-map-marker',
    question: t('contact.faq3Question'),
    answer: t('contact.faq3Answer')
  },
  {
    icon: 'pi-heart',
    question: t('contact.faq4Question'),
    answer: t('contact.faq4Answer')
  }
])

// Manejar envío del formulario
const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simular envío (aquí irías a tu API)
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Mostrar mensaje de éxito (podrías usar un toast/notificación)
  alert(t('contact.successMessage'))
}

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
  if (contactInfo.value) observer.observe(contactInfo.value)
  if (contactForm.value) observer.observe(contactForm.value)
  if (faqSection.value) observer.observe(faqSection.value)
})
</script>