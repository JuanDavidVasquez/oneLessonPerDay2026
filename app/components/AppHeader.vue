<template>
  <header class="app-header">
    <!-- Formas decorativas de fondo -->
    <div class="background-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Desktop Navigation -->
    <UtilsMenu />

    <div class="header-content">
      <!-- Columna Izquierda -->
      <div class="text-left">
        <h1 class="hero-title">
          <span class="title-line">One Lesson</span>
          <span class="title-line">Per Day</span>
        </h1>
        <p class="hero-subtitle">
          Aprende sobre el cuidado responsable de mascotas mientras 
          encuentras a tu compañero perfecto
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/adopcion" class="btn-primary">
            <span>Adoptar ahora</span>
            <i class="pi pi-arrow-right"></i>
          </NuxtLink>
          <NuxtLink to="/etologia" class="btn-secondary">
            <span>Conoce más</span>
          </NuxtLink>
        </div>
        
        <!-- Stats badges -->
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Adopciones</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">Satisfacción</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Soporte</span>
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
          <span>Amor incondicional</span>
        </div>
        <div class="floating-badge badge-2">
          <i class="pi pi-shield"></i>
          <span>Certificados</span>
        </div>
      </div>

      <!-- Columna Derecha -->
      <div class="text-right">
        <h2 class="hero-secondary">
          <span class="highlight-line">Adopta una</span>
          <span class="highlight-line large">mascota</span>
          <span class="divider">y</span>
          <span class="highlight-line">cambia</span>
          <span class="highlight-line large">una vida</span>
        </h2>
        
        <!-- Características -->
        <div class="features">
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>Proceso simple</span>
          </div>
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>Sin costo oculto</span>
          </div>
          <div class="feature-item">
            <i class="pi pi-check-circle"></i>
            <span>Seguimiento post-adopción</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <span>Desliza</span>
      <i class="pi pi-arrow-down"></i>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Animación de entrada para las líneas de título
  const titleLines = document.querySelectorAll('.title-line')
  titleLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('animate-in')
    }, index * 200)
  })
})
</script>