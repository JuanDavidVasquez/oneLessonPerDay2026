import Aura from "@primeuix/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          { code: "es", language: "es-ES", file: "es.ts", name: "Español" },
          { code: "en", language: "en-US", file: "en.ts", name: "English" },
        ],
        defaultLocale: "es",
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
      },
    ],
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark",
          cssLayer: false,
        },
      },
    },
  },
  colorMode: {
    preference: "system", // 'light', 'dark' o 'system'
    fallback: "light",
    classSuffix: "",
  },
  app: {
    baseURL: "/",
    buildAssetsDir: "/assets/",
    pageTransition: { name: "page", mode: "out-in", },
     head: {
      titleTemplate: '%s - One Lesson Per Day',
      title: 'One Lesson Per Day',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google', content: 'notranslate' },
        {
          id: 'description',
          name: 'description',
          content: 'One Lesson Per Day - Learn something new every day with our bite-sized lessons designed to fit into your busy schedule.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ["animate.css", "@/assets/scss/main.scss", "primeicons/primeicons.css"],
  experimental: {
    payloadExtraction: false,
  },
  $production: {
    routeRules: {
      "/**": { isr: true },
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
          additionalData: `
            @use "sass:math";
            @use "~/assets/scss/abstracts/_variables" as *;
          `,
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
  pinia: {
    storesDirs: ['./stores', './app/stores'],
  },
});
