<template>
  <div class="i18n-switcher">
    <label for="language-select" class="label">
      <i class="pi pi-globe" style="margin-right: 0.4rem"></i>
      {{ $t('common.language') || 'Idioma' }}
    </label>

    <Dropdown
      id="language-select"
      v-model="selectedLang"
      :options="languages"
      optionLabel="name"
      optionValue="code"
      @change="handleChange"
      class="lang-dropdown"
      panelClass="lang-dropdown-panel"
    >
      <!-- Valor actual -->
      <template #value="slotProps">
        <div v-if="slotProps.value" class="lang-option">
          <img
            :src="getFlag(slotProps.value)"
            alt="flag"
            class="flag-icon"
          />
          <span>{{ getName(slotProps.value) }}</span>
        </div>
        <span v-else>{{ $t('common.selectLanguage') || 'Seleccionar idioma' }}</span>
      </template>

      <!-- Opciones del menú -->
      <template #option="slotProps">
        <div class="lang-option">
          <img
            :src="slotProps.option.flag"
            alt="flag"
            class="flag-icon"
          />
          <span>{{ slotProps.option.name }}</span>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Dropdown from 'primevue/dropdown'
import { useMainStore } from '~/store/main.store'

const mainStore = useMainStore()
const selectedLang = ref<'es' | 'en'>(mainStore.locale as 'es' | 'en')

// Bandera SVG desde /public/flags/
const languages = [
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'en', name: 'English', flag: '/flags/en.svg' }
]

const handleChange = () => {
  mainStore.changeLanguage(selectedLang.value)
}

const getFlag = (code: string) =>
  languages.find(l => l.code === code)?.flag || ''
const getName = (code: string) =>
  languages.find(l => l.code === code)?.name || ''

onMounted(() => {
  selectedLang.value = mainStore.locale as 'es' | 'en'
})
</script>
