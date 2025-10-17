<template>
  <section class="adoption-section">
    <!-- Elementos decorativos de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
      <div class="deco-shape shape-3"></div>
      <div class="heart-pattern"></div>
    </div>

    <div class="adoption-container">
      <!-- Header de la sección -->
      <div class="section-header" ref="sectionHeader">
        <div class="header-badge">
          <i class="pi pi-heart"></i>
          <span>{{ t('adoption.badge') }}</span>
        </div>
        <h1 class="section-title">
          <span class="title-highlight">{{ t('adoption.title') }}</span>
          <span class="title-subtitle">{{ t('adoption.subtitle') }}</span>
        </h1>
        <p class="section-intro">
          {{ t('adoption.introduction') }}
        </p>
      </div>

      <!-- Filtros de búsqueda -->
      <div class="search-filters" ref="filtersSection">
        <div class="filters-header">
          <h3>
            <i class="pi pi-filter"></i>
            {{ t('adoption.filters.title') }}
          </h3>
          <button class="clear-filters" @click="clearFilters">
            {{ t('adoption.filters.clearAll') }}
          </button>
        </div>

        <div class="filters-grid">
          <!-- Tipo de mascota -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.petType') }}</label>
            <Dropdown 
              v-model="filters.petType" 
              :options="petTypes" 
              :placeholder="t('adoption.filters.allTypes')"
              optionLabel="label"
              optionValue="value"
            />
          </div>

          <!-- Edad -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.age') }}</label>
            <Dropdown 
              v-model="filters.age" 
              :options="ageRanges" 
              :placeholder="t('adoption.filters.allAges')"
              optionLabel="label"
              optionValue="value"
            />
          </div>

          <!-- Tamaño -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.size') }}</label>
            <Dropdown 
              v-model="filters.size" 
              :options="sizes" 
              :placeholder="t('adoption.filters.allSizes')"
              optionLabel="label"
              optionValue="value"
            />
          </div>

          <!-- Género -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.gender') }}</label>
            <Dropdown 
              v-model="filters.gender" 
              :options="genders" 
              :placeholder="t('adoption.filters.allGenders')"
              optionLabel="label"
              optionValue="value"
            />
          </div>

          <!-- Características especiales -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.traits') }}</label>
            <MultiSelect 
              v-model="filters.traits" 
              :options="traits" 
              :placeholder="t('adoption.filters.selectTraits')"
              optionLabel="label"
              optionValue="value"
              display="chip"
            />
          </div>
        </div>

        <div class="search-stats">
          <div class="results-count">
            {{ t('adoption.filters.showing') }} <strong>{{ filteredPets.length }}</strong> {{ t('adoption.filters.results') }}
          </div>
          <div class="view-toggle">
            <button 
              :class="{ active: viewMode === 'grid' }" 
              @click="viewMode = 'grid'"
              :title="t('adoption.view.grid')"
            >
              <i class="pi pi-th-large"></i>
            </button>
            <button 
              :class="{ active: viewMode === 'list' }" 
              @click="viewMode = 'list'"
              :title="t('adoption.view.list')"
            >
              <i class="pi pi-list"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Grid de mascotas -->
      <div 
        class="pets-grid" 
        :class="{ 'list-view': viewMode === 'list', 'animate-in': true }" 
        ref="petsGrid"
      >
        <div 
          v-for="pet in paginatedPets" 
          :key="pet.id" 
          class="pet-card"
          :class="{ 'list-view': viewMode === 'list' }"
        >
          <div class="pet-image">
            <img :src="pet.image" :alt="pet.name">
            
            <!-- Status badge -->
            <div class="pet-status" :class="pet.status">
              <i :class="`pi pi-${getStatusIcon(pet.status)}`"></i>
              <span>{{ t(`adoption.status.${pet.status}`) }}</span>
            </div>

            <!-- Special badge -->
            <div v-if="pet.badge" class="pet-badge">
              {{ t(`adoption.badges.${pet.badge}`) }}
            </div>

            <!-- Quick actions -->
            <div class="quick-actions">
              <button 
                class="favorite" 
                :class="{ active: isFavorite(pet.id) }"
                @click="toggleFavorite(pet.id)"
                :title="t('adoption.actions.favorite')"
              >
                <i class="pi pi-heart-fill"></i>
              </button>
              <button 
                @click="sharePet(pet)"
                :title="t('adoption.actions.share')"
              >
                <i class="pi pi-share-alt"></i>
              </button>
            </div>
          </div>

          <div class="pet-info">
            <div class="pet-main-info">
              <div class="pet-header">
                <div class="pet-name-age">
                  <h3>{{ pet.name }}</h3>
                  <div class="pet-age">
                    <i class="pi pi-calendar"></i>
                    <span>{{ pet.age }}</span>
                  </div>
                </div>
                <div class="pet-gender" :class="pet.gender">
                  <i :class="`pi pi-${pet.gender === 'male' ? 'mars' : 'venus'}`"></i>
                </div>
              </div>

              <div class="pet-breed">
                <i class="pi pi-tag"></i>
                <span>{{ pet.breed }}</span>
              </div>

              <p class="pet-description">{{ pet.description }}</p>

              <div class="pet-traits">
                <div v-for="trait in pet.traits" :key="trait" class="trait">
                  <i class="pi pi-check"></i>
                  <span>{{ t(`adoption.traits.${trait}`) }}</span>
                </div>
              </div>
            </div>

            <div class="pet-actions">
              <button class="btn-adopt" @click="openAdoptionForm(pet)">
                <i class="pi pi-heart"></i>
                <span>{{ t('adoption.actions.adopt') }}</span>
              </button>
              <button class="btn-details" @click="viewPetDetails(pet)">
                <i class="pi pi-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginación -->
      <div class="pagination" v-if="totalPages > 1">
        <button @click="goToPage(1)" :disabled="currentPage === 1">
          <i class="pi pi-angle-double-left"></i>
        </button>
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
          <i class="pi pi-angle-left"></i>
        </button>
        
        <button 
          v-for="page in visiblePages" 
          :key="page"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
          <i class="pi pi-angle-right"></i>
        </button>
        <button @click="goToPage(totalPages)" :disabled="currentPage === totalPages">
          <i class="pi pi-angle-double-right"></i>
        </button>

        <span class="page-info">
          {{ t('adoption.pagination.page') }} {{ currentPage }} {{ t('adoption.pagination.of') }} {{ totalPages }}
        </span>
      </div>

      <!-- Call to Action -->
      <div class="adoption-cta" ref="ctaSection">
        <div class="cta-content">
          <div class="cta-icon">
            <i class="pi pi-question-circle"></i>
          </div>
          <h2>{{ t('adoption.cta.title') }}</h2>
          <p>{{ t('adoption.cta.description') }}</p>
          <div class="cta-buttons">
            <NuxtLink to="/contacto" class="btn-primary">
              <i class="pi pi-phone"></i>
              <span>{{ t('adoption.cta.contact') }}</span>
            </NuxtLink>
            <NuxtLink to="/faq" class="btn-secondary">
              <i class="pi pi-info-circle"></i>
              <span>{{ t('adoption.cta.faq') }}</span>
            </NuxtLink>
          </div>
        </div>
        <div class="cta-image">
          <img src="/adoption-cta.jpg" alt="Adopción feliz">
          <div class="image-badge">
            <div class="badge-icon">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="badge-text">
              <span class="badge-number">100%</span>
              <span class="badge-label">{{ t('adoption.cta.satisfaction') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import { 
  getAllPets, 
  filterPets, 
  type Pet, 
  type FilterOptions 
} from '~/data/pets.db'

const { t } = useI18n()

// Refs para animaciones
const sectionHeader = ref(null)
const filtersSection = ref(null)
const petsGrid = ref(null)
const ctaSection = ref(null)

// Estado de filtros
const filters = ref<FilterOptions>({
  petType: null,
  age: null,
  size: null,
  gender: null,
  traits: []
})

// Vista y paginación
const viewMode = ref('grid')
const currentPage = ref(1)
const itemsPerPage = 12
const favorites = ref<number[]>([])

// Cargar todas las mascotas desde la base de datos
const allPets = ref<Pet[]>(getAllPets())

// Opciones de filtros
const petTypes = computed(() => [
  { label: t('adoption.types.all'), value: null },
  { label: t('adoption.types.dog'), value: 'dog' },
  { label: t('adoption.types.cat'), value: 'cat' },
  { label: t('adoption.types.other'), value: 'other' }
])

const ageRanges = computed(() => [
  { label: t('adoption.ages.all'), value: null },
  { label: t('adoption.ages.puppy'), value: 'puppy' },
  { label: t('adoption.ages.young'), value: 'young' },
  { label: t('adoption.ages.adult'), value: 'adult' },
  { label: t('adoption.ages.senior'), value: 'senior' }
])

const sizes = computed(() => [
  { label: t('adoption.sizes.all'), value: null },
  { label: t('adoption.sizes.small'), value: 'small' },
  { label: t('adoption.sizes.medium'), value: 'medium' },
  { label: t('adoption.sizes.large'), value: 'large' }
])

const genders = computed(() => [
  { label: t('adoption.genders.all'), value: null },
  { label: t('adoption.genders.male'), value: 'male' },
  { label: t('adoption.genders.female'), value: 'female' }
])

const traits = computed(() => [
  { label: t('adoption.traits.friendly'), value: 'friendly' },
  { label: t('adoption.traits.energetic'), value: 'energetic' },
  { label: t('adoption.traits.calm'), value: 'calm' },
  { label: t('adoption.traits.trained'), value: 'trained' },
  { label: t('adoption.traits.goodWithKids'), value: 'goodWithKids' },
  { label: t('adoption.traits.goodWithPets'), value: 'goodWithPets' },
  { label: t('adoption.traits.vaccinated'), value: 'vaccinated' },
  { label: t('adoption.traits.sterilized'), value: 'sterilized' }
])

// Computed properties
const filteredPets = computed(() => {
  return filterPets(filters.value)
})

const totalPages = computed(() => Math.ceil(filteredPets.value.length / itemsPerPage))

const paginatedPets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPets.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Métodos
const clearFilters = () => {
  filters.value = {
    petType: null,
    age: null,
    size: null,
    gender: null,
    traits: []
  }
  currentPage.value = 1
}

const goToPage = (page: number) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getStatusIcon = (status: 'available' | 'reserved' | 'urgent' | 'adopted') => {
  const icons = {
    available: 'check-circle',
    reserved: 'clock',
    urgent: 'exclamation-triangle',
    adopted: 'heart'
  }
  return icons[status] || 'circle'
}

const isFavorite = (petId: number) => {
  return favorites.value.includes(petId)
}

const toggleFavorite = (petId: number) => {
  const index = favorites.value.indexOf(petId)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(petId)
  }
}

const sharePet = (pet: any) => {
  if (navigator.share) {
    navigator.share({
      title: `Adopta a ${pet.name}`,
      text: pet.description,
      url: window.location.href
    })
  } else {
    // Fallback: copiar al portapapeles
    navigator.clipboard.writeText(window.location.href)
    alert(t('adoption.actions.linkCopied'))
  }
}

const openAdoptionForm = (pet: any) => {
  // Aquí iría la lógica para abrir un formulario de adopción
  console.log('Abrir formulario de adopción para:', pet.name)
  // Podrías usar un modal o navegar a otra página
}

const viewPetDetails = (pet: any) => {
  // Aquí iría la lógica para ver detalles completos
  console.log('Ver detalles de:', pet.name)
  // Podrías navegar a una página de detalles
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

  if (sectionHeader.value) observer.observe(sectionHeader.value)
  if (filtersSection.value) observer.observe(filtersSection.value)
  if (petsGrid.value) observer.observe(petsGrid.value)
  if (ctaSection.value) observer.observe(ctaSection.value)
})
</script>