<template>
  <header class="app-header">
    <!-- Formas decorativas de fondo -->
    <div class="background-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="header-content">
      <!-- Columna Izquierda -->
      <div class="text-left">
        <h1 class="hero-title">
          <span class="title-line">{{ t('common.appFirstName') }}</span>
          <span class="title-line">{{ t('common.appSecondName') }}</span>
        </h1>
        <p class="hero-subtitle">
          {{ t('header.heroSubtitle') }}
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/adopcion" class="btn-primary">
            <span>{{ t('common.adoptNow') }}</span>
            <i class="pi pi-arrow-right"></i>
          </NuxtLink>
          <NuxtLink to="/etologia" class="btn-secondary">
            <span>{{ t('common.learnMore') }}</span>
          </NuxtLink>
        </div>
        
        <!-- Stats badges -->
        <div class="stats">
          <div class="stat-item">
             <Transition name="fade" appear>
                       <span  class="stat-number">{{ adopciones }}+</span>
              </Transition>
            <span class="stat-label">{{ t('common.adoption') }}</span>
          </div>
          <div class="stat-item">
              <Transition name="fade" appear>
                      <span class="stat-number">{{satisfaction}}%</span>
              </Transition>
            <span class="stat-label">{{ t('common.satisfaction') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">{{ t('common.support') }}</span>
          </div>
        </div>
      </div>

      <!-- Imagen Central con decoraciones -->
      <div class="header-img">
        <div class="image-decoration decoration-1"></div>
        <div class="image-decoration decoration-2"></div>
        <img src="/home.png" alt="Perro feliz" class="img-header" />
        <div class="floating-badge badge-1">
          <i class="pi pi-heart-fill"></i>
          <span>{{ t('header.unconditionalLove') }}</span>
        </div>
        <div class="floating-badge badge-2">
          <i class="pi pi-shield"></i>
          <span>{{ t('header.certificates') }}</span>
        </div>
      </div>

      <!-- Columna Derecha -->
      <div class="text-right">
        <h2 class="hero-secondary">
          <span class="highlight-line">{{ t('header.adoptPet') }}</span>
          <span class="highlight-line large">{{ t('header.pet') }}</span>
          <span class="divider">{{ t('common.y') }}</span>
          <span class="highlight-line">{{ t('header.changeALife') }}</span>
          <span class="highlight-line large">{{ t('header.aLife') }}</span>
        </h2>
        
        <!-- Características -->
        <div class="features">
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>{{ t('header.simpleProcess') }}</span>
          </div>
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>{{ t('header.noHiddenCosts') }}</span>
          </div>
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>{{ t('header.postAdoptionFollowUp') }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
const { t } = useI18n();
const adopciones = ref(0);
const totalAdoptions = 500;
const duration = 2000;
const satisfaction = ref(0);
const totalSatisfaction = 98;
const satisfactionDuration = 2000;

onMounted(() => {
  let start = 0;
  const increment = totalAdoptions / (duration / 50);
  const counter = setInterval(() => {
    start += increment;
    if (start >= totalAdoptions) {
      adopciones.value = totalAdoptions;
      clearInterval(counter);
    } else {
      adopciones.value = Math.floor(start);
    }
  }, 50);
});
onMounted(() => {
  let start = 0;
  const increment = totalSatisfaction / (satisfactionDuration / 50);
  const counter = setInterval(() => {
    start += increment;
    if (start >= totalSatisfaction) {
      satisfaction.value = totalSatisfaction;
      clearInterval(counter);
    } else {
      satisfaction.value = Math.floor(start);
    }
  }, 50);
});


onMounted(() => {
  const titleLines = document.querySelectorAll('.title-line')
  titleLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('animate-in')
    }, index * 200)
  })
})
</script>