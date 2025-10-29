export const useSeo = () => {
  const route = useRoute();
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const setSeo = (options: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string[];
    schema?: any;
    noIndex?: boolean;
    author?: string;
  }) => {
    const {
      title = 'One Lesson Per Day',
      description = 'Adopción responsable de mascotas, servicios veterinarios profesionales y educación en etología animal en Bogotá, Colombia.',
      image = `${config.public.SITE_URL}/og-image.jpg`,
      url = `${config.public.SITE_URL}${route.fullPath}`,
      type = 'website',
      keywords = [
        'adopción mascotas bogotá',
        'veterinaria bogotá',
        'etología animal',
        'adopción responsable',
        'servicios veterinarios',
        'cuidado mascotas'
      ],
      schema = null,
      noIndex = false,
      author = 'One Lesson Per Day'
    } = options;

    // Título con branding
    const fullTitle = title === 'One Lesson Per Day' 
      ? 'One Lesson Per Day | Adopción, Veterinaria y Etología en Bogotá'
      : `${title} | One Lesson Per Day`;

    // Asegurar imagen absoluta
    const fullImage = image.startsWith('http') 
      ? image 
      : `${config.public.SITE_URL}${image}`;

    // Meta tags completos
    useHead({
      title: fullTitle,
      htmlAttrs: {
        lang: locale.value === 'es' ? 'es-CO' : 'en-US',
      },
      meta: [
        // Básicos
        { name: 'description', content: description },
        { name: 'keywords', content: keywords.join(', ') },
        { name: 'author', content: author },
        { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
        
        // SEO Local (Bogotá, Colombia)
        { name: 'geo.region', content: 'CO-DC' },
        { name: 'geo.placename', content: 'Bogotá' },
        { name: 'geo.position', content: '4.7110;-74.0721' },
        
        // Open Graph
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:image', content: fullImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: title },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:locale', content: locale.value === 'es' ? 'es_CO' : 'en_US' },
        { property: 'og:site_name', content: 'One Lesson Per Day' },
        
        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: fullImage },
        { name: 'twitter:site', content: '@onelessonperday' },
        
        // Mobile
        { name: 'theme-color', content: '#10b981' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'canonical', href: url },
        // Hreflang para multiidioma
        { 
          rel: 'alternate', 
          hreflang: 'es-CO', 
          href: url.replace('/en', '').replace(/\/en\//, '/') 
        },
        { 
          rel: 'alternate', 
          hreflang: 'en', 
          href: url.includes('/en') ? url : url.replace(config.public.SITE_URL, `${config.public.SITE_URL}/en`) 
        },
        { rel: 'alternate', hreflang: 'x-default', href: url },
      ],
      script: schema ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema),
        },
      ] : [],
    });

    // useSeoMeta adicional
    useSeoMeta({
      title: fullTitle,
      ogTitle: fullTitle,
      description,
      ogDescription: description,
      ogImage: fullImage,
      twitterCard: 'summary_large_image',
      twitterTitle: fullTitle,
      twitterDescription: description,
      twitterImage: fullImage,
    });
  };

  return {
    setSeo,
  };
};