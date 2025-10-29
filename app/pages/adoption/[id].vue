<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPetById, type Pet } from '~/data/pets.db'

const route = useRoute()
const router = useRouter()
const pet = ref<Pet | null>(null)
const loading = ref(true)
const error = ref(false)

onMounted(() => {
  const petId = parseInt(route.params.id as string)
  const foundPet = getPetById(petId)
  
  if (foundPet) {
    pet.value = foundPet
  } else {
    error.value = true
  }
  
  loading.value = false
})

const goBack = () => {
  router.push('/adoption')
}
</script>

<template>
  <div class="pet-detail-page">
    <!-- Loading -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Cargando información...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="error-container">
      <div class="error-card">
        <div class="error-icon">😿</div>
        <h2>Mascota no encontrada</h2>
        <p>Lo sentimos, no pudimos encontrar la mascota que buscas.</p>
        <button @click="goBack" class="btn-primary">
          Volver a Adopción
        </button>
      </div>
    </div>

    <!-- Pet Content -->
    <div v-else-if="pet" class="pet-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <button @click="goBack" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver
        </button>

        <div class="hero-content">
          <!-- Imagen -->
          <div class="hero-image">
            <img :src="pet.image" :alt="pet.name" />
            <div class="status-badge" :class="pet.status.toLowerCase()">
              {{ pet.status }}
            </div>
          </div>

          <!-- Información Principal -->
          <div class="hero-info">
            <h1 class="pet-name">{{ pet.name }}</h1>
            <p class="pet-subtitle">{{ pet.breed }} • {{ pet.age }}</p>
            
            <div class="quick-info">
              <div class="info-chip">
                <span class="icon">📍</span>
                <span>{{ pet.location }}</span>
              </div>
              <div class="info-chip">
                <span class="icon">⚖️</span>
                <span>{{ pet.weight || 'N/A' }}</span>
              </div>
              <div class="info-chip">
                <span class="icon">🎨</span>
                <span>{{ pet.color || 'N/A' }}</span>
              </div>
              <div class="info-chip">
                <span class="icon">{{ pet.gender === 'male' ? '♂️' : '♀️' }}</span>
                <span>{{ pet?.gender }}</span>
              </div>
            </div>

            <button class="btn-adopt">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Adoptar a {{ pet.name }}
            </button>
          </div>

          <!-- Sidebar de Detalles (nuevo en hero) -->
          <div class="hero-sidebar">
            <div class="details-card">
              <h3 class="card-title">Detalles</h3>
              
              <div class="detail-item">
                <span class="label">Tipo</span>
                <span class="value">{{ pet.type }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Tamaño</span>
                <span class="value">{{ pet.size }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Edad</span>
                <span class="value">{{ pet.age }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Género</span>
                <span class="value">{{ pet.gender }}</span>
              </div>

              <hr class="divider">

              <h3 class="card-title">Albergue</h3>
              
              <div class="shelter-info">
                <div class="shelter-icon">🏠</div>
                <div class="shelter-details">
                  <p class="shelter-name">{{ pet.shelter.name }}</p>
                  <p class="shelter-location">{{ pet.shelter.location }}</p>
                  <p v-if="pet.shelter.contact" class="shelter-contact">
                    📞 {{ pet.shelter.contact }}
                  </p>
                  <p class="shelter-date">
                    Desde: {{ pet.shelterDate }}
                  </p>
                </div>
              </div>

              <button class="btn-contact">
                Contactar Albergue
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content - Solo contenido descriptivo -->
      <div class="main-content">
        <div class="content-grid">
          <div class="left-column">
            <!-- Description -->
            <section class="card">
              <h2 class="section-title">Sobre {{ pet.name }}</h2>
              <p class="description-text">{{ pet.description }}</p>
            </section>

            <!-- Story -->
            <section v-if="pet.story" class="card">
              <h2 class="section-title">Su Historia</h2>
              <p class="story-text">{{ pet.story }}</p>
            </section>

            <!-- Traits -->
            <section class="card">
              <h2 class="section-title">Personalidad</h2>
              <div class="traits-grid">
                <div v-for="trait in pet.traits" :key="trait" class="trait-item">
                  <span class="trait-icon">✨</span>
                  <span>{{ trait }}</span>
                </div>
              </div>
            </section>

            <!-- Special Needs -->
            <section v-if="pet.specialNeeds" class="card special-needs">
              <h2 class="section-title">
                <span class="icon-medical">🏥</span>
                Cuidados Especiales
              </h2>
              <ul class="needs-list">
                <li v-for="(need, index) in pet.specialNeeds" :key="index">
                  {{ need }}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>