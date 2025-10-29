<template>
  <footer class="footer-section" role="contentinfo" aria-label="Footer del sitio">
    <!-- Elementos decorativos de fondo -->
    <div class="background-elements" aria-hidden="true">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="footer-container">
      <!-- Columna 1: Sobre nosotros -->
      <section class="footer-col about">
        <h3 class="footer-title">{{ t('footer.aboutTitle') }}</h3>
        <p class="footer-text">{{ t('footer.aboutText') }}</p>
        
        <!-- Logo o marca -->
        <div class="footer-brand">
          <span class="brand-icon" aria-hidden="true">🐾</span>
        </div>
      </section>

      <!-- Columna 2: Enlaces rápidos -->
      <nav class="footer-col links" aria-label="Enlaces de navegación principales">
        <h3 class="footer-title">{{ t('footer.quickLinksTitle') }}</h3>
        <ul role="list">
          <li>
            <NuxtLink to="/about" :aria-label="t('footer.about')">
              {{ t('footer.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/veterinarians" :aria-label="t('footer.veterinarians')">
              {{ t('footer.veterinarians') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/adoption" :aria-label="t('footer.adoption')">
              {{ t('footer.adoption') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ethology" :aria-label="t('footer.ethology')">
              {{ t('footer.ethology') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" :aria-label="t('footer.contact')">
              {{ t('footer.contact') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Columna 3: Información de contacto -->
      <section class="footer-col contact">
        <h3 class="footer-title">{{ t('footer.contactTitle') }}</h3>
        <address class="contact-info">
          <div class="contact-item">
            <i class="pi pi-phone" aria-hidden="true"></i>
            <a href="tel:+573012345678" class="contact-link">
              <span class="contact-label">{{ t('footer.phoneLabel') }}:</span>
              <span class="contact-value">+57 301 234 5678</span>
            </a>
          </div>
          
          <div class="contact-item">
            <i class="pi pi-envelope" aria-hidden="true"></i>
            <a href="mailto:info@veterinaria.com" class="contact-link">
              <span class="contact-label">{{ t('footer.emailLabel') }}:</span>
              <span class="contact-value">contact@onelessonperday.com</span>
            </a>
          </div>
          
          <div class="contact-item">
            <i class="pi pi-map-marker" aria-hidden="true"></i>
            <span class="contact-link">
              <span class="contact-label">{{ t('footer.addressLabel') }}:</span>
              <span class="contact-value">Bogotá, Colombia</span>
            </span>
          </div>
        </address>
      </section>

      <!-- Columna 4: Redes sociales -->
      <section class="footer-col social">
        <h3 class="footer-title">{{ t('footer.followUsTitle') }}</h3>
        <div class="social-links" role="list">
          <a 
            href="https://facebook.com/veterinaria" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Visitar nuestra página de Facebook (abre en nueva ventana)"
          >
            <i class="pi pi-facebook" aria-hidden="true"></i>
          </a>
          <a 
            href="https://instagram.com/veterinaria" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Visitar nuestro perfil de Instagram (abre en nueva ventana)"
          >
            <i class="pi pi-instagram" aria-hidden="true"></i>
          </a>
          <a 
            href="https://twitter.com/veterinaria" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            aria-label="Visitar nuestro perfil de Twitter (abre en nueva ventana)"
          >
            <i class="pi pi-twitter" aria-hidden="true"></i>
          </a>
          <a 
            href="https://wa.me/573012345678" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link social-link--whatsapp"
            aria-label="Contactar por WhatsApp (abre en nueva ventana)"
          >
            <i class="pi pi-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
        
        <!-- Newsletter -->
        <div class="newsletter-section">
          <p class="newsletter-text">{{ t('footer.newsletterText') }}</p>
          <form 
            class="newsletter-form" 
            @submit.prevent="handleNewsletter" 
            aria-label="Formulario de suscripción al boletín"
          >
            <label for="newsletter-email" class="visually-hidden">
              {{ t('footer.newsletterLabel') }}
            </label>
            <input 
              id="newsletter-email"
              v-model="newsletterEmail"
              type="email" 
              :placeholder="t('footer.newsletterPlaceholder')"
              required
              aria-required="true"
              class="newsletter-input"
            />
            <button 
              type="submit" 
              class="newsletter-btn"
              :aria-label="t('footer.newsletterSubmit')"
            >
              <i class="pi pi-send" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </section>
    </div>

    <!-- Footer inferior -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">
          © {{ new Date().getFullYear() }} {{ t('footer.companyName') }}. {{ t('footer.rightsReserved') }}
        </p>
        
        <!-- Enlaces legales -->
        <nav class="footer-legal" aria-label="Enlaces legales">
          <NuxtLink to="/privacy" class="legal-link">
            {{ t('footer.privacy') }}
          </NuxtLink>
          <span class="legal-separator" aria-hidden="true">•</span>
          <NuxtLink to="/terms" class="legal-link">
            {{ t('footer.terms') }}
          </NuxtLink>
          <span class="legal-separator" aria-hidden="true">•</span>
          <NuxtLink to="/cookies" class="legal-link">
            {{ t('footer.cookies') }}
          </NuxtLink>
        </nav>
        
        <!-- Certificaciones o insignias -->
        <div class="footer-badges">
          <span class="badge" aria-label="Veterinaria certificada">
            <i class="pi pi-verified" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const newsletterEmail = ref('')

const handleNewsletter = () => {
  if (newsletterEmail.value) {
    // Aquí iría la lógica para suscribirse al newsletter
    console.log('Newsletter subscription:', newsletterEmail.value)
    newsletterEmail.value = ''
    // Mostrar mensaje de éxito (usar toast o notificación)
  }
}
</script>

<style scoped>
/* Clase de utilidad para accesibilidad */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>