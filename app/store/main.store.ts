import { defineStore } from 'pinia'

interface UserData {
  name: string
  email: string
  picture: string
  token?: string
}

export const useMainStore = defineStore('main', {
  state: () => ({
    loading: false,
    locale:
      (typeof window !== 'undefined'
        ? localStorage.getItem('userLocale')
        : null) || 'es',
    user: null as UserData | null
  }),

  actions: {
    // ✅ Control de carga
    setLoading(value: boolean) {
      this.loading = value
    },

    // ✅ Cambiar idioma globalmente
    changeLanguage(lang: 'es' | 'en') {
      const { $i18n } = useNuxtApp()
      this.locale = lang
      $i18n.locale.value = lang

      if (typeof window !== 'undefined') {
        localStorage.setItem('userLocale', lang)
      }
    },

    // ✅ Guardar los datos del usuario (Google o login clásico)
    setUser(userData: UserData) {
      this.user = userData
      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(userData))
      }
    },

    // ✅ Cargar usuario desde localStorage (persistencia)
    loadUser() {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('userData')
        if (saved) {
          this.user = JSON.parse(saved)
        }
      }
    },

    // ✅ Cerrar sesión
    logout() {
      this.user = null
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userData')
      }
    }
  }
})
