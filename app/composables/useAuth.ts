export const useAuth = () => {
  const user = useState('user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (credentials: { email: string; password: string }) => {
    try {
      // Llamada a tu API
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: credentials
      })
      
      user.value = response.user
      // Guardar token si usas uno
      localStorage.setItem('token', response.token)
      
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('token')
    navigateTo('/login')
  }

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      user.value = null
      return false
    }

    try {
      // Verificar token con tu API
      const response = await $fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      user.value = response.user
      return true
    } catch (error) {
      user.value = null
      localStorage.removeItem('token')
      return false
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth
  }
}

export const useAuthUser = () => {
  const { user } = useAuth()
  return user
}