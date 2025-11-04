import Aura from "@primeuix/themes/aura";

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
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          { code: "es", language: "es-CO", file: "es.ts", name: "Español" }, // ✅ Cambiado a es-CO
          { code: "en", language: "en-US", file: "en.ts", name: "English" },
        ],
        defaultLocale: "es",
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
      },
    ],
  ],

  site: {
    url: 'https://onelessonperday.com',
    name: 'One Lesson Per Day',
  },

  sitemap: <Partial<import('@nuxtjs/sitemap').ModuleOptions>>{
    hostname: 'https://onelessonperday.com',
    gzip: true,
    exclude: [
      '/admin/**',
      '/private/**',
    ],
    // ✅ Agregar rutas dinámicas si las tienes
    urls: [
      {
        loc: '/',
        lastmod: new Date(),
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/about',
        lastmod: new Date(),
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/veterinarians',
        lastmod: new Date(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/ethology',
        lastmod: new Date(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: '/adoption',
        lastmod: new Date(),
        changefreq: 'daily',
        priority: 0.9
      },
      {
        loc: '/contact',
        lastmod: new Date(),
        changefreq: 'monthly',
        priority: 0.7
      },
    ]
  },

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
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/contact',
        '/veterinarians',
        '/ethology', // ✅ Agregado
        '/adoption', // ✅ Agregado
        '/appointments',
      ]
    }
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "/assets/",
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: 'es-CO', // ✅ Específico para Colombia
      },
      titleTemplate: '%s | One Lesson Per Day', // ✅ Cambiado "-" por "|"
      title: 'One Lesson Per Day',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google', content: 'notranslate' },
        {
          id: 'description',
          name: 'description',
          content: 'Adopción responsable de mascotas, servicios veterinarios 24/7 y educación en etología animal en Bogotá. Encuentra tu compañero perfecto.',
        },
        { name: 'keywords', content: 'adopción mascotas bogotá, veterinaria bogotá, etología animal, adopción perros, adopción gatos, servicios veterinarios' }, // ✅ Agregado
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'One Lesson Per Day' },
        { name: 'theme-color', content: '#10b981' }, // ✅ Color verde veterinario
        
        // ✅ SEO Local (importante para negocios locales)
        { name: 'geo.region', content: 'CO-DC' },
        { name: 'geo.placename', content: 'Bogotá' },
        { name: 'geo.position', content: '4.7110;-74.0721' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'One Lesson Per Day' },
        { property: 'og:locale', content: 'es_CO' }, // ✅ Agregado
        { property: 'og:title', content: 'One Lesson Per Day | Adopción y Veterinaria en Bogotá' },
        { property: 'og:description', content: 'Adopción responsable de mascotas y servicios veterinarios profesionales en Bogotá. Educación en etología y cuidado animal.' },
        { property: 'og:image', content: 'https://onelessonperday.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' }, // ✅ Agregado
        { property: 'og:image:height', content: '630' }, // ✅ Agregado
        { property: 'og:image:alt', content: 'One Lesson Per Day - Adopción y Veterinaria' }, // ✅ Agregado
        { property: 'og:url', content: 'https://onelessonperday.com' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'One Lesson Per Day | Adopción y Veterinaria' },
        { name: 'twitter:description', content: 'Adopción responsable de mascotas y servicios veterinarios en Bogotá.' },
        { name: 'twitter:image', content: 'https://onelessonperday.com/og-image.jpg' },
        // { name: 'twitter:site', content: '@onelessonperday' }, // ✅ Descomentar si tienes Twitter
        
        // ✅ Mobile Web App
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://onelessonperday.com' },
        // ✅ Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // ✅ Manifest para PWA (opcional)
        { rel: 'manifest', href: '/manifest.json' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VeterinaryCare',
            name: 'One Lesson Per Day',
            description: 'Clínica veterinaria especializada en adopción responsable, servicios veterinarios 24/7 y educación en etología animal.',
            url: 'https://onelessonperday.com',
            logo: 'https://onelessonperday.com/logo.png',
            image: 'https://onelessonperday.com/og-image.jpg',
            telephone: '+57-312-345-6789', // ✅ Agregado (cambiar por tu número real)
            email: 'contacto@onelessonperday.com', // ✅ Agregado
            priceRange: '$$', // ✅ Agregado
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Calle 123 #45-67', // ✅ Agregado (cambiar por dirección real)
              addressLocality: 'Bogotá',
              addressRegion: 'Bogotá D.C.',
              postalCode: '110111', // ✅ Agregado (cambiar por código real)
              addressCountry: 'CO'
            },
            geo: { // ✅ Agregado para SEO local
              '@type': 'GeoCoordinates',
              latitude: '4.7110',
              longitude: '-74.0721'
            },
            openingHoursSpecification: [ // ✅ Agregado
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00'
              }
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+57-312-345-6789', // ✅ Agregado
              contactType: 'Customer Service',
              email: 'contacto@onelessonperday.com', // ✅ Agregado
              availableLanguage: ['Spanish', 'English']
            },
            sameAs: [ // ✅ Agregado (redes sociales)
              // 'https://facebook.com/onelessonperday',
              // 'https://instagram.com/onelessonperday',
              // 'https://twitter.com/onelessonperday'
            ]
          })
        }
      ]
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
      imageDomains: ['lh3.googleusercontent.com'],
      secret: process.env.SECRET_KEY,
      API_BASE_URL: process.env.API_URL,
      SHORT_NAME: process.env.SHORT_NAME,
      SITE_URL: process.env.SITE_URL || 'https://onelessonperday.com',
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