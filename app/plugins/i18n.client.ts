import { useMainStore } from "~/store/main.store"

export default defineNuxtPlugin((nuxtApp) => {
  const mainStore = useMainStore()
  const i18n = nuxtApp.$i18n as { locale: { value: string } }

  if (mainStore.locale) {
    i18n.locale.value = mainStore.locale
  }
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('userLocale') as 'es' | 'en' | null
    
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      if (mainStore.locale !== savedLocale) {
        mainStore.locale = savedLocale
      }
      
      i18n.locale.value = savedLocale
    }
  }
})