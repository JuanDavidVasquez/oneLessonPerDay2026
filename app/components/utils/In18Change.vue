<template>
  <div class="i18n-switcher">
    <label for="language-select" class="label">
      <i class="pi pi-globe" style="margin-right: 0.4rem"></i>
      {{ t('common.language') || 'Idioma' }}
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
          <img :src="getFlag(slotProps.value)" alt="flag" class="flag-icon" />
          <span>{{ getName(slotProps.value) }}</span>
        </div>
        <span v-else>{{ t('common.selectLanguage') || 'Seleccionar idioma' }}</span>
      </template>

      <!-- Opciones del menú -->
      <template #option="slotProps">
        <div class="lang-option">
          <img :src="slotProps.option.flag" alt="flag" class="flag-icon" />
          <span>{{ slotProps.option.name }}</span>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Dropdown from 'primevue/dropdown'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '~/store/main.store'

// 📦 Store de Pinia
const mainStore = useMainStore()
const { locale, t } = useI18n() // 🌍 Acceso al i18n global

const selectedLang = ref<'es' | 'en'>(mainStore.locale as 'es' | 'en')

const languages = [
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'en', name: 'English', flag: '/flags/en.svg' }
]

// 🚀 Cambio manual desde el Dropdown
const handleChange = () => {
  console.log('🔄 Cambiando idioma a:', selectedLang.value)
  mainStore.changeLanguage(selectedLang.value)
  locale.value = selectedLang.value // Actualiza i18n global
}

// 🏁 Sincronizar store → componente + i18n
watch(
  () => mainStore.locale,
  (newLocale) => {
    if (!newLocale) return
    console.log('🌍 Store cambió a:', newLocale)
    selectedLang.value = newLocale as 'es' | 'en'
    locale.value = newLocale as 'es' | 'en'
  },
  { immediate: true }
)

onMounted(() => {
  selectedLang.value = mainStore.locale as 'es' | 'en'
  locale.value = mainStore.locale as 'es' | 'en' // Inicializa i18n con valor del store
  console.log('🎬 I18nSwitcher montado, idioma inicial:', mainStore.locale)
})

// Utils para mostrar idioma y bandera
const getFlag = (code: string) =>
  languages.find((l) => l.code === code)?.flag || ''
const getName = (code: string) =>
  languages.find((l) => l.code === code)?.name || ''
</script>
