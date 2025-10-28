<template>
  <section class="adoption-section">
    <!-- Decoración de fondo -->
    <div class="background-decoration">
      <div class="deco-shape shape-1"></div>
      <div class="deco-shape shape-2"></div>
      <div class="deco-shape shape-3"></div>
      <div class="heart-pattern"></div>
    </div>

    <div class="adoption-container">
      <!-- Header de sección -->
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

      <!-- Estadísticas rápidas -->
      <div class="stats-banner" ref="statsRef">
        <div class="stat-item">
          <div class="stat-icon">
            <i class="pi pi-heart"></i>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ stats.available }}</span>
            <span class="stat-label">{{ t('adoption.stats.available') }}</span>
          </div>
        </div>
        <div class="stat-item urgent">
          <div class="stat-icon">
            <i class="pi pi-exclamation-triangle"></i>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ stats.urgent }}</span>
            <span class="stat-label">{{ t('adoption.stats.urgent') }}</span>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <i class="pi pi-building"></i>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ shelters.length }}</span>
            <span class="stat-label">{{ t('adoption.stats.shelters') }}</span>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="search-filters" ref="filtersRef">
        <div class="filters-header">
          <h3>
            <i class="pi pi-filter"></i>
            {{ t('adoption.filters.title') }}
          </h3>
          <button 
            class="clear-filters" 
            @click="clearFilters"
            v-if="hasActiveFilters"
          >
            <i class="pi pi-times"></i>
            {{ t('adoption.filters.clear') }}
          </button>
        </div>

        <div class="filters-grid">
          <!-- Tipo de mascota -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.petType') }}</label>
            <select v-model="filters.petType" class="filter-select">
              <option :value="null">{{ t('adoption.filters.all') }}</option>
              <option value="dog">{{ t('adoption.filters.dogs') }}</option>
              <option value="cat">{{ t('adoption.filters.cats') }}</option>
              <option value="other">{{ t('adoption.filters.others') }}</option>
            </select>
          </div>

          <!-- Albergue (NUEVO) -->
          <div class="filter-group">
            <label>
              <i class="pi pi-building"></i>
              {{ t('adoption.filters.shelter') }}
            </label>
            <select v-model="filters.shelterId" class="filter-select">
              <option :value="null">{{ t('adoption.filters.allShelters') }}</option>
              <option 
                v-for="shelter in shelters" 
                :key="shelter.id" 
                :value="shelter.id"
              >
                {{ shelter.name }}
              </option>
            </select>
          </div>

          <!-- Edad -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.age') }}</label>
            <select v-model="filters.age" class="filter-select">
              <option :value="null">{{ t('adoption.filters.allAges') }}</option>
              <option value="puppy">{{ t('adoption.filters.puppy') }}</option>
              <option value="young">{{ t('adoption.filters.young') }}</option>
              <option value="adult">{{ t('adoption.filters.adult') }}</option>
              <option value="senior">{{ t('adoption.filters.senior') }}</option>
            </select>
          </div>

          <!-- Tamaño -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.size') }}</label>
            <select v-model="filters.size" class="filter-select">
              <option :value="null">{{ t('adoption.filters.allSizes') }}</option>
              <option value="small">{{ t('adoption.filters.small') }}</option>
              <option value="medium">{{ t('adoption.filters.medium') }}</option>
              <option value="large">{{ t('adoption.filters.large') }}</option>
            </select>
          </div>

          <!-- Género -->
          <div class="filter-group">
            <label>{{ t('adoption.filters.gender') }}</label>
            <select v-model="filters.gender" class="filter-select">
              <option :value="null">{{ t('adoption.filters.allGenders') }}</option>
              <option value="male">{{ t('adoption.filters.male') }}</option>
              <option value="female">{{ t('adoption.filters.female') }}</option>
            </select>
          </div>

          <!-- Ordenar por (NUEVO) -->
          <div class="filter-group">
            <label>
              <i class="pi pi-sort-alt"></i>
              {{ t('adoption.filters.sortBy') }}
            </label>
            <select v-model="sortOrder" class="filter-select">
              <option value="newest">{{ t('adoption.filters.newest') }}</option>
              <option value="longest">{{ t('adoption.filters.longest') }}</option>
              <option value="shortest">{{ t('adoption.filters.shortest') }}</option>
            </select>
          </div>
        </div>

        <!-- Características -->
        <div class="traits-filter">
          <label>{{ t('adoption.filters.traits') }}</label>
          <div class="traits-chips">
            <button
              v-for="trait in availableTraits"
              :key="trait.value"
              :class="['trait-chip', { active: filters.traits.includes(trait.value) }]"
              @click="toggleTrait(trait.value)"
            >
              <i :class="`pi ${trait.icon}`"></i>
              <span>{{ trait.label }}</span>
            </button>
          </div>
        </div>

        <!-- Stats de búsqueda -->
        <div class="search-stats">
          <div class="results-count">
            {{ t('adoption.filters.showing') }} 
            <strong>{{ filteredPets.length }}</strong> 
            {{ t('adoption.results.found') }}
          </div>
          <div class="view-toggle">
            <button 
              :class="{ active: viewMode === 'grid' }"
              @click="viewMode = 'grid'"
            >
              <i class="pi pi-th-large"></i>
            </button>
            <button 
              :class="{ active: viewMode === 'list' }"
              @click="viewMode = 'list'"
            >
              <i class="pi pi-list"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Grid de mascotas -->
      <div 
        :class="['pets-grid', { 'list-view': viewMode === 'list', 'animate-in': true }]" 
        ref="petsGridRef"
      >
        <div
          v-for="pet in paginatedPets"
          :key="pet.id"
          :class="['pet-card', { 'list-view': viewMode === 'list' }]"
        >
          <!-- Imagen -->
          <div class="pet-image">
            <img :src="pet.image" :alt="pet.name">
            
            <!-- Status badge -->
            <div v-if="pet.badge" :class="['pet-status', pet.badge]">
              <i :class="getBadgeIcon(pet.badge)"></i>
              <span>{{ t(`adoption.badges.${pet.badge}`) }}</span>
            </div>

            <!-- Quick actions -->
            <div class="quick-actions">
              <button class="action-btn favorite" title="Agregar a favoritos">
                <i class="pi pi-heart"></i>
              </button>
              <button class="action-btn share" title="Compartir">
                <i class="pi pi-share-alt"></i>
              </button>
            </div>
          </div>

          <!-- Información -->
          <div class="pet-info">
            <div class="pet-header">
              <div class="pet-name-gender">
                <h4 class="pet-name">{{ pet.name }}</h4>
                <span :class="['pet-gender', pet.gender]">
                  <i :class="`pi pi-${pet.gender === 'male' ? 'mars' : 'venus'}`"></i>
                </span>
              </div>
              <span class="pet-breed">{{ pet.breed }}</span>
            </div>

            <div class="pet-details">
              <span class="detail-item">
                <i class="pi pi-calendar"></i>
                {{ pet.age }}
              </span>
              <span class="detail-item">
                <i class="pi pi-box"></i>
                {{ t(`adoption.sizes.${pet.size}`) }}
              </span>
              <span class="detail-item">
                <i class="pi pi-map-marker"></i>
                {{ pet.location }}
              </span>
            </div>

            <!-- Shelter info (NUEVO) -->
            <div class="pet-shelter-info">
              <div class="shelter-name">
                <i class="pi pi-building"></i>
                <span>{{ pet.shelter.name }}</span>
              </div>
              <div class="shelter-time">
                <i class="pi pi-clock"></i>
                <span>{{ formatTimeInShelter(pet.shelterDate) }}</span>
              </div>
            </div>

            <div class="pet-traits">
              <span 
                v-for="trait in pet.traits.slice(0, 4)" 
                :key="trait"
                class="trait-badge"
              >
                {{ t(`adoption.traits.${trait}`) }}
              </span>
            </div>

            <p class="pet-description">{{ pet.description }}</p>

            <!-- Acciones -->
            <div class="pet-actions">
              <NuxtLink 
                :to="`/adoption/${pet.id}`" 
                :class="['btn-details', pet.status]"
              >
                <i class="pi pi-arrow-right"></i>
                <span>
                  {{ pet.status === 'urgent' 
                    ? t('adoption.actions.urgent') 
                    : pet.status === 'reserved' 
                      ? t('adoption.actions.reserved')
                      : t('adoption.actions.adopt') 
                  }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Sin resultados -->
      <div v-if="filteredPets.length === 0" class="no-results">
        <div class="no-results-icon">
          <i class="pi pi-search"></i>
        </div>
        <h3>{{ t('adoption.noResults.title') }}</h3>
        <p>{{ t('adoption.noResults.description') }}</p>
        <button class="btn-primary" @click="clearFilters">
          <i class="pi pi-refresh"></i>
          {{ t('adoption.noResults.clear') }}
        </button>
      </div>

      <!-- Paginación -->
      <div v-if="totalPages > 1" class="pagination" ref="paginationRef">
        <button 
          class="pagination-btn prev"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <i class="pi pi-chevron-left"></i>
        </button>
        
        <div class="pagination-numbers">
          <button
            v-for="page in visiblePages"
            :key="page"
            :class="['page-btn', { active: currentPage === page }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </div>

        <button 
          class="pagination-btn next"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          <i class="pi pi-chevron-right"></i>
        </button>

        <div class="page-info">
          {{ t('adoption.pagination.page') }} {{ currentPage }} {{ t('adoption.pagination.of') }} {{ totalPages }}
        </div>
      </div>

      <!-- CTA de urgencia -->
      <div v-if="stats.urgent > 0" class="adoption-cta" ref="urgentCtaRef">
        <div class="cta-content">
          <div class="cta-icon">
            <i class="pi pi-exclamation-circle"></i>
          </div>
          <h2>{{ t('adoption.urgentCta.title') }}</h2>
          <p>{{ t('adoption.urgentCta.description', { count: stats.urgent }) }}</p>
          <div class="cta-buttons">
            <button class="btn-primary" @click="showUrgentOnly">
              <i class="pi pi-heart"></i>
              {{ t('adoption.urgentCta.action') }}
            </button>
          </div>
        </div>
        <div class="cta-image">
          <img src="/cat-behavior.jpg" alt="Adopción urgente">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {   getAllPets, 
  getAllShelters,
  filterPets, 
  getPetStatistics,
  sortPetsByTimeInShelter,
  formatTimeInShelter,
  getTimeInShelter,
  type FilterOptions,
  type Pet,
  type Shelter } from '~/data/pets.db'


const { t } = useI18n()

// Refs para animaciones
const sectionHeader = ref(null)
const statsRef = ref(null)
const filtersRef = ref(null)
const petsGridRef = ref(null)
const paginationRef = ref(null)
const urgentCtaRef = ref(null)

// Estados
const viewMode = ref<'grid' | 'list'>('grid')
const currentPage = ref(1)
const itemsPerPage = 12
const sortOrder = ref<'newest' | 'longest' | 'shortest'>('longest')

// Datos
const pets = ref<Pet[]>(getAllPets())
const shelters = ref<Shelter[]>(getAllShelters())
const stats = computed(() => getPetStatistics())

// Filtros
const filters = ref<FilterOptions>({
  petType: null,
  age: null,
  size: null,
  gender: null,
  traits: [],
  status: null,
  shelterId: null
})

// Características disponibles
const availableTraits = computed(() => [
  { value: 'friendly', label: t('adoption.traits.friendly'), icon: 'pi-heart' },
  { value: 'energetic', label: t('adoption.traits.energetic'), icon: 'pi-bolt' },
  { value: 'calm', label: t('adoption.traits.calm'), icon: 'pi-check-circle' },
  { value: 'trained', label: t('adoption.traits.trained'), icon: 'pi-verified' },
  { value: 'goodWithKids', label: t('adoption.traits.goodWithKids'), icon: 'pi-users' },
  { value: 'goodWithPets', label: t('adoption.traits.goodWithPets'), icon: 'pi-star' },
  { value: 'vaccinated', label: t('adoption.traits.vaccinated'), icon: 'pi-shield' },
  { value: 'sterilized', label: t('adoption.traits.sterilized'), icon: 'pi-check' }
])

// Computed
const hasActiveFilters = computed(() => {
  return filters.value.petType !== null ||
         filters.value.age !== null ||
         filters.value.size !== null ||
         filters.value.gender !== null ||
         filters.value.status !== null ||
         filters.value.shelterId !== null ||
         filters.value.traits.length > 0
})

const filteredPets = computed(() => {
  let result = filterPets(filters.value)
  
  // Aplicar ordenamiento por tiempo en albergue
  if (sortOrder.value === 'longest') {
    result = sortPetsByTimeInShelter(result, 'desc')
  } else if (sortOrder.value === 'shortest') {
    result = sortPetsByTimeInShelter(result, 'asc')
  } else {
    // newest - ordenar por shelterDate descendente (más recientes primero)
    result = [...result].sort((a, b) => 
      new Date(b.shelterDate).getTime() - new Date(a.shelterDate).getTime()
    )
  }
  
  return result
})

const totalPages = computed(() => 
  Math.ceil(filteredPets.value.length / itemsPerPage)
)

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
const toggleTrait = (trait: string) => {
  const index = filters.value.traits.indexOf(trait)
  if (index > -1) {
    filters.value.traits.splice(index, 1)
  } else {
    filters.value.traits.push(trait)
  }
  currentPage.value = 1
}

const clearFilters = () => {
  filters.value = {
    petType: null,
    age: null,
    size: null,
    gender: null,
    traits: [],
    status: null,
    shelterId: null
  }
  sortOrder.value = 'longest'
  currentPage.value = 1
}

const showUrgentOnly = () => {
  clearFilters()
  filters.value.status = 'urgent'
  currentPage.value = 1
}

const getBadgeIcon = (badge: string) => {
  const icons: Record<string, string> = {
    featured: 'pi-star-fill',
    urgent: 'pi-exclamation-triangle',
    new: 'pi-sparkles',
    senior: 'pi-heart',
    special: 'pi-certificate'
  }
  return icons[badge] || 'pi-tag'
}

// Watch para resetear página cuando cambian filtros
watch([filters, sortOrder], () => {
  currentPage.value = 1
}, { deep: true })

// Animaciones al montar
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
  if (statsRef.value) observer.observe(statsRef.value)
  if (filtersRef.value) observer.observe(filtersRef.value)
  if (petsGridRef.value) observer.observe(petsGridRef.value)
  if (paginationRef.value) observer.observe(paginationRef.value)
  if (urgentCtaRef.value) observer.observe(urgentCtaRef.value)
})
</script>

<style lang="scss">

/* Estilos adicionales para los nuevos elementos */
.stats-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-6;
  margin-bottom: $spacing-12;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-item {
    background: var(--color-surface);
    padding: $spacing-6;
    border-radius: $radius-2xl;
    display: flex;
    align-items: center;
    gap: $spacing-4;
    box-shadow: var(--shadow-sm);
    transition: all $transition-base;

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    &.urgent {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
      border: 1px solid rgba(239, 68, 68, 0.2);

      .stat-icon {
        background: linear-gradient(135deg, #EF4444, #DC2626);
      }

      .stat-number {
        color: #DC2626;
      }
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      border-radius: $radius-xl;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      i {
        color: white;
        font-size: $font-size-xl;
      }
    }

    .stat-content {
      display: flex;
      flex-direction: column;

      .stat-number {
        font-size: $font-size-3xl;
        font-weight: $font-weight-bold;
        color: var(--color-primary);
        line-height: 1;
      }

      .stat-label {
        font-size: $font-size-sm;
        color: var(--color-text-secondary);
        margin-top: $spacing-1;
      }
    }
  }
}

.traits-filter {
  margin-top: $spacing-6;

  label {
    display: block;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: $spacing-3;
  }

  .traits-chips {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-2;

    .trait-chip {
      display: inline-flex;
      align-items: center;
      gap: $spacing-2;
      padding: $spacing-2 $spacing-4;
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: $radius-full;
      font-size: $font-size-sm;
      cursor: pointer;
      transition: all $transition-base;

      i {
        font-size: $font-size-xs;
      }

      &:hover {
        border-color: var(--color-primary);
        background: var(--color-primary-50);
      }

      &.active {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
      }
    }
  }
}

.pet-shelter-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  margin: $spacing-4 0;
  padding: $spacing-3;
  background: var(--color-bg-secondary);
  border-radius: $radius-lg;
  border-left: 3px solid var(--color-primary);

  .shelter-name,
  .shelter-time {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $font-size-sm;
    color: var(--color-text-secondary);

    i {
      color: var(--color-primary);
      font-size: $font-size-xs;
    }

    span {
      font-weight: $font-weight-medium;
    }
  }

  .shelter-time {
    i {
      color: var(--color-accent);
    }
  }
}

.no-results {
  text-align: center;
  padding: $spacing-16;
  
  .no-results-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto $spacing-6;
    background: var(--color-bg-secondary);
    border-radius: $radius-full;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: $font-size-3xl;
      color: var(--color-text-tertiary);
    }
  }

  h3 {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: var(--color-heading);
    margin-bottom: $spacing-4;
  }

  p {
    font-size: $font-size-base;
    color: var(--color-text-secondary);
    margin-bottom: $spacing-6;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: $spacing-2;
  }
}

@media (max-width: 768px) {
  .stats-banner {
    grid-template-columns: 1fr;
  }

  .pet-shelter-info {
    font-size: $font-size-xs;
  }
}
</style>