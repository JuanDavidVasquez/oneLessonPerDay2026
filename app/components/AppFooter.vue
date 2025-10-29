<template>
  <footer class="footer-section">
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <div class="footer-container">
      <!-- Columna 1: Sobre nosotros -->
      <div class="footer-col about">
        <h3 class="footer-title">{{ t('footer.aboutTitle') }}</h3>
        <p class="footer-text">{{ t('footer.aboutText') }}</p>
      </div>

      <!-- Columna 2: Enlaces rápidos -->
      <div class="footer-col links">
        <h3 class="footer-title">{{ t('footer.quickLinksTitle') }}</h3>
        <ul>
          <li><a href="#">{{ t('footer.about') }}</a></li>
          <li><a href="#">{{ t('footer.services') }}</a></li>
          <li><a href="#">{{ t('footer.adoption') }}</a></li>
          <li><a href="#">{{ t('footer.veterinarians') }}</a></li>
          <li><a href="#">{{ t('footer.ethology') }}</a></li>
          <li><a href="#">{{ t('footer.contact') }}</a></li>
        </ul>
      </div>

      <!-- Columna 3: Contacto -->
      <div class="footer-col contact">
        <h3 class="footer-title">{{ t('footer.contactTitle') }}</h3>
        <ul>
          <li><strong>{{ t('footer.phoneLabel') }}:</strong> +57 301 234 5678</li>
          <li><strong>{{ t('footer.emailLabel') }}:</strong> info@veterinaria.com</li>
          <li><strong>{{ t('footer.addressLabel') }}:</strong> Medellín, Colombia</li>
        </ul>
      </div>

      <!-- Columna 4: Redes -->
      <div class="footer-col social">
        <h3 class="footer-title">{{ t('footer.followUsTitle') }}</h3>
        <div class="social-links">
          <a href="#"><i class="pi pi-facebook"></i></a>
          <a href="#"><i class="pi pi-instagram"></i></a>
          <a href="#"><i class="pi pi-twitter"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} {{ t('footer.rightsReserved') }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
