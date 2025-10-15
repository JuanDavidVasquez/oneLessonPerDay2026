import Aura from '@primeuix/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: false
        }
      }
    }
  },
  colorMode: {
    preference: 'system', // 'light', 'dark' o 'system'
    fallback: 'light',
    classSuffix: '',
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/assets/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    'animate.css',
    '@/assets/scss/main.scss',
    'primeicons/primeicons.css',
  ],
  experimental: {
    payloadExtraction: false
  },
  $production: {
    routeRules: {
      '/**': { isr: true },
    },
  },
  $development: {
    //
  },
  $env: {
    staging: {
      //
    },
  },
  runtimeConfig: {
    public: {
      secret: process.env.SECRET_KEY,
      API_BASE_URL: process.env.API_URL,
      SHORT_NAME: process.env.SHORT_NAME,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/utils/_variables.scss" as *;',
        },
      },
    },
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  vue: {
    propsDestructure: true,
  },
})