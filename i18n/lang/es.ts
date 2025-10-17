import { et } from "@nuxt/ui/runtime/locale/index.js";

export default {
  // Common
  common: {
    appFirstName: "One Lesson",
    appSecondName: "Per Day",
    appName: "One Lesson Per Day",
    welcome: "Bienvenido",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    delete: "Eliminar",
    edit: "Editar",
    create: "Crear",
    search: "Buscar",
    filter: "Filtrar",
    actions: "Acciones",
    close: "Cerrar",
    confirm: "Confirmar",
    back: "Volver",
    next: "Siguiente",
    previous: "Anterior",
    yes: "Sí",
    no: "No",
    y: "y",
    n: "n",
    adoptNow: "Adoptar ahora",
    learnMore: "Conoce más",
    adopt: "Adoptar",
    foster: "Acoger",
    donate: "Donar",
    adoption: "Adopción",
    fosterCare: "Acogida",
    petCare: "Cuidado de Mascotas",
    satisfaction: "Satisfacción",
    testimonials: "Testimonios",
    contactUs: "Contáctanos",
    support: "Soporte",
    faq: "Preguntas Frecuentes",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    followUs: "Síguenos",
    language: "Idioma",
  },

  // Navigation
  nav: {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    products: "Productos",
    services: "Servicios",
    dashboard: "Panel de Control",
    profile: "Perfil",
    settings: "Configuración",
    logout: "Cerrar Sesión",
    login: "Iniciar Sesión",
    veterinarians: "Médicos",
    ethology: "Etología",
    adoption: "Adopción",
  },

  // Forms
  form: {
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    firstName: "Nombre",
    lastName: "Apellido",
    phone: "Teléfono",
    address: "Dirección",
    city: "Ciudad",
    country: "País",
    postalCode: "Código Postal",
    required: "Este campo es obligatorio",
    invalidEmail: "Email inválido",
    passwordMismatch: "Las contraseñas no coinciden",
    minLength: "Mínimo {min} caracteres",
    maxLength: "Máximo {max} caracteres",
  },

  // Messages
  messages: {
    welcome: "Bienvenido a {app}",
    thankYou: "Gracias por tu mensaje",
    errorOccurred: "Ha ocurrido un error",
    tryAgain: "Por favor, inténtalo de nuevo",
    noData: "No hay datos disponibles",
    noResults: "No se encontraron resultados",
    sessionExpired: "Tu sesión ha expirado",
    unauthorized: "No autorizado",
    notFound: "No encontrado",
  },

  // Date & Time
  datetime: {
    today: "Hoy",
    yesterday: "Ayer",
    tomorrow: "Mañana",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    date: "Fecha",
    time: "Hora",
  },

  header: {
    heroSubtitle:
      " Aprende sobre el cuidado responsable de mascotas mientras encuentras a tu compañero perfecto",
    adoptPet: "Adopta una",
    pet: "mascota",
    changeALife: "cambia una vida",
    unconditionalLove: "Amor incondicional",
    certificates: "Certificados",
    aLife: "una vida",
    makeDifference: "Haz la diferencia hoy",
    joinUs:
      "Únete a nosotros en nuestra misión de encontrar hogares amorosos para mascotas necesitadas.",
    simpleProcess: "Proceso simple",
    noHiddenCosts: "Sin costo oculto",
    postAdoptionFollowUp: "Seguimiento post-adopción",
    scrollHint: "Desliza",
  },
  ethology: {
    badge: "Comportamiento Animal",
    title: "Etología",
    subtitle: "Comprendiendo el lenguaje de nuestras mascotas",
    introduction:
      "La etología es el estudio del comportamiento animal. Conocer cómo piensan, sienten y actúan nuestros compañeros nos ayuda a mejorar su bienestar y fortalecer el vínculo que tenemos con ellos.",

    tabs: {
      dogs: "Comportamiento Canino",
      cats: "Comportamiento Felino",
      general: "Consejos Generales",
    },

    // 🐶 Sección de perros
    dogs: {
      title: "Comportamiento Canino",
      description:
        "Los perros son animales sociales con una comunicación rica y compleja. Entender sus señales nos permite guiarlos adecuadamente y crear una convivencia sana y respetuosa.",

      barking: {
        title: "Ladridos",
        subtitle: "Tips para manejar los ladridos",
        description:
          "El ladrido es una de las principales formas de comunicación canina. Puede expresar alerta, emoción, ansiedad o búsqueda de atención.",
        tip1: "Evita regañarlo por ladrar; identifica la causa del comportamiento.",
        tip2: "Proporciónale suficiente ejercicio y estimulación mental.",
        tip3: "Usa comandos de calma consistentes y refuerza el silencio con premios.",
      },

      marking: {
        title: "Marcaje territorial",
        subtitle: "Tips para manejar el marcaje territorial",
        description:
          "El marcaje es una conducta natural en los perros para comunicar límites o presencia a otros animales.",
        tip1: "Si marca dentro de casa, limpia con productos enzimáticos para eliminar olores.",
        tip2: "Mantén rutinas de paseo regulares para reducir la necesidad de marcar.",
      },

      anxiety: {
        title: "Ansiedad por separación",
        subtitle: "Tips para manejar la ansiedad por separación",
        description:
          "Algunos perros sufren estrés cuando se quedan solos, lo que puede reflejarse en aullidos, destrozos o micciones inapropiadas.",
        tip1: "Aumenta progresivamente los tiempos de separación.",
        tip2: "Deja juguetes interactivos para mantenerlo ocupado.",
        tip3: "Evita despedidas o saludos excesivamente emocionales.",
      },

      calmingSignals: "Señales de calma",
      signals: {
        yawn: "Bostezo",
        yawnMeaning: "Indica incomodidad o intenta calmar una situación tensa.",
        lick: "Lamerse el hocico",
        lickMeaning: "Muestra nerviosismo o intenta tranquilizar al entorno.",
        turn: "Girar la cabeza o el cuerpo",
        turnMeaning: "Una forma de evitar confrontaciones o reducir tensión.",
        sniff: "Olfatear el suelo",
        sniffMeaning:
          "Señal de calma ante estímulos nuevos o situaciones de estrés.",
      },
    },

    // 🐱 Sección de gatos
    cats: {
      title: "Comportamiento Felino",
      description:
        "Los gatos son animales independientes y territoriales, pero también expresan afecto y confianza a través de su lenguaje corporal y hábitos cotidianos.",

      scratching: {
        title: "Rascado",
        subtitle: "Tips para manejar el rascado",
        description:
          "Rascar es una conducta natural que ayuda a los gatos a mantener sus uñas, estirarse y marcar territorio.",
        tip1: "Coloca rascadores verticales y horizontales en diferentes zonas.",
        tip2: "No lo regañes; redirige el comportamiento a los rascadores.",
      },

      nocturnal: {
        title: "Actividad nocturna",
        subtitle: "Tips para manejar la actividad nocturna",
        description:
          "Los gatos son crepusculares, lo que significa que están más activos al amanecer y al anochecer.",
        tip1: "Juega con tu gato antes de dormir para reducir su energía nocturna.",
        tip2: "Evita alimentarlo justo antes de acostarte.",
        tip3: "Ofrece rutinas estables para que se adapte a tus horarios.",
      },

      hiding: {
        title: "Esconderse",
        subtitle: "Tips para manejar el escondite",
        description:
          "Es una conducta natural cuando el gato se siente inseguro o necesita un momento de descanso.",
        tip1: "Proporciónale lugares seguros donde pueda refugiarse sin ser molestado.",
        tip2: "No lo fuerces a salir; déjalo hacerlo a su ritmo.",
      },

      bodyLanguage: "Lenguaje corporal felino",
      body: {
        eyes: "Ojos",
        eyesDesc:
          "Los ojos entrecerrados indican relajación; una mirada fija puede ser una advertencia.",
        tail: "Cola",
        tailDesc:
          "Una cola erguida muestra confianza; una cola inflada o baja refleja miedo o defensa.",
        ears: "Orejas",
        earsDesc:
          "Orejas hacia adelante denotan interés; hacia atrás, incomodidad o enfado.",
        posture: "Postura corporal",
        postureDesc:
          "Un cuerpo relajado indica calma, mientras que uno encorvado o rígido muestra alerta.",
      },
    },

    // 🌿 Consejos generales
    generalTips: {
      title: "Consejos Generales de Convivencia",
      description:
        "Tener una mascota implica responsabilidad y comprensión. Estos consejos te ayudarán a crear un ambiente armónico para tu amigo peludo.",

      homePreparation: "Preparación del hogar",
      socialization: "Socialización",
      healthWellbeing: "Salud y bienestar",
    },

    tips: {
      home: {
        safe: "Haz tu hogar seguro",
        safeDesc:
          "Retira objetos peligrosos y asegura zonas donde tu mascota no deba acceder.",
        space: "Crea su propio espacio",
        spaceDesc:
          "Proporciónale una cama o zona tranquila donde pueda descansar y sentirse protegido.",
        supplies: "Prepara sus suministros",
        suppliesDesc:
          "Ten listos comederos, juguetes, cepillos y su alimento adecuado.",
      },
      social: {
        gradual: "Socialización gradual",
        gradualDesc:
          "Introduce a tu mascota poco a poco a nuevas personas o animales.",
        positive: "Refuerzo positivo",
        positiveDesc:
          "Premia las conductas deseadas en lugar de castigar las indeseadas.",
        routine: "Rutina constante",
        routineDesc:
          "Mantén horarios estables de comida, paseo y descanso para su equilibrio emocional.",
      },
      health: {
        checkups: "Revisiones veterinarias",
        checkupsDesc:
          "Lleva a tu mascota al veterinario periódicamente para prevenir enfermedades.",
        nutrition: "Buena alimentación",
        nutritionDesc:
          "Proporciónale una dieta equilibrada adaptada a su edad y tamaño.",
        exercise: "Ejercicio regular",
        exerciseDesc:
          "Dedica tiempo al juego y la actividad física para mantenerlo sano y feliz.",
      },
    },

    // ❓ Preguntas frecuentes
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Por qué mi perro destruye cosas cuando se queda solo?",
      a1: "Probablemente sufra ansiedad por separación. Empieza con ausencias cortas y deja juguetes o recompensas para distraerlo.",
      q2: "¿Qué hago si mi gato no usa el arenero?",
      a2: "Verifica la limpieza, ubicación y tipo de arena. A veces el problema se debe a estrés o cambios en el entorno.",
      q3: "¿Es bueno dormir con mi mascota?",
      a3: "Depende de la preferencia personal y de las normas del hogar, pero siempre asegúrate de mantener la higiene y el control de parásitos.",
      q4: "¿Cuánto ejercicio necesita un perro al día?",
      a4: "Varía según la raza y edad, pero en promedio entre 30 minutos y 2 horas de actividad diaria.",
    },

    // 📘 Recursos adicionales
    resources: {
      title: "Recursos y Material Educativo",
      guides: "Guías descargables",
      guidesDesc:
        "Accede a documentos con información detallada sobre entrenamiento, comunicación y bienestar animal.",
      downloadGuides: "Descargar guías",
      videos: "Videos educativos",
      videosDesc:
        "Explora material audiovisual sobre conducta animal y técnicas de adiestramiento positivo.",
      watchVideos: "Ver videos",
      experts: "Consulta con expertos",
      expertsDesc:
        "Habla con profesionales en comportamiento animal para resolver tus dudas de manera personalizada.",
      scheduleConsult: "Agendar consulta",
    },

    // ❤️ Sección final CTA
    cta: {
      title: "Crea un vínculo más profundo con tu mascota",
      description:
        "Cada pequeño gesto cuenta. Comprender su comportamiento es el primer paso hacia una convivencia feliz y equilibrada.",
      adoptButton: "Adoptar una mascota",
      contactButton: "Contactar a un experto",
    },
  },


  about: {
    tag: "SOBRE NOSOTROS",
    titleAccent: "Conoce nuestra",
    titleMain: "Historia y Misión",
    description:
      "Somos una organización dedicada a cambiar la vida de mascotas abandonadas, conectándolas con familias amorosas.",

    yearsExperience: "Años de experiencia",
    rescuedPets: "Mascotas rescatadas",
    happyFamilies: "Familias felices",

    missionTitle: "Nuestra Misión",
    missionText:
      "Rescatar, rehabilitar y encontrar hogares amorosos para cada mascota que lo necesite, promoviendo la adopción responsable.",

    visionTitle: "Nuestra Visión",
    visionText:
      "Ser la organización líder en adopción de mascotas, creando una sociedad donde ningún animal esté sin hogar.",

    valuesTitle: "Nuestros Valores",
    value1: "Amor incondicional",
    value2: "Responsabilidad",
    value3: "Transparencia",
    value4: "Compromiso social",

    ctaText: "¿Quieres ser parte del cambio?",
    becomeVolunteer: "Ser voluntario",
    donate: "Donar ahora",

    processTitle: "Proceso de Adopción Simple y Seguro",
    step1Title: "Explora",
    step1Description: "Busca entre nuestras mascotas disponibles",
    step2Title: "Aplica",
    step2Description: "Completa el formulario de adopción",
    step3Title: "Conoce",
    step3Description: "Visita y conoce a tu nueva mascota",
    step4Title: "Adopta",
    step4Description: "Lleva a casa a tu nuevo mejor amigo",
  },
};
