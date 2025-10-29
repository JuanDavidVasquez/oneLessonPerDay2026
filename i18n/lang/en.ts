import { et } from "@nuxt/ui/runtime/locale/index.js";

export default {
  // Common
  common: {
    appFirstName: "One Lesson",
    appSecondName: "Per Day",
    appName: "One Lesson Per Day",
    content:'One Lesson Per Day – Veterinary clinic focused on adoptions, behavior, and animal well-being. Learning from every life to care better.',
    welcome: "Welcome",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    search: "Search",
    filter: "Filter",
    actions: "Actions",
    close: "Close",
    confirm: "Confirm",
    back: "Back",
    next: "Next",
    previous: "Previous",
    yes: "Yes",
    no: "No",
    y: "y",
    n: "n",
    adoptNow: "Adopt Now",
    learnMore: "Learn More",
    adopt: "Adopt",
    foster: "Foster",
    donate: "Donate",
    adoption: "Adoption",
    fosterCare: "Foster Care",
    petCare: "Pet Care",
    satisfaction: "Satisfaction",
    testimonials: "Testimonials",
    contactUs: "Contact Us",
    support: "Support",
    faq: "Frequently Asked Questions",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    followUs: "Follow Us",
    language: "Language",
  },

  // Navigation
  nav: {
    home: "Home",
    about: "About",
    contact: "Contact",
    products: "Products",
    services: "Services",
    dashboard: "Dashboard",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    login: "Login",
    veterinarians: "Veterinarians",
    ethology: "Ethology",
    adoption: "Adoption",
  },

  // Forms
  form: {
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    address: "Address",
    city: "City",
    country: "Country",
    postalCode: "Postal Code",
    required: "This field is required",
    invalidEmail: "Invalid email",
    passwordMismatch: "Passwords do not match",
    minLength: "Minimum {min} characters",
    maxLength: "Maximum {max} characters",
  },

  // Messages
  messages: {
    welcome: "Welcome to {app}",
    thankYou: "Thank you for your message",
    errorOccurred: "An error occurred",
    tryAgain: "Please try again",
    noData: "No data available",
    noResults: "No results found",
    sessionExpired: "Your session has expired",
    unauthorized: "Unauthorized",
    notFound: "Not Found",
  },

  // Date & Time
  datetime: {
    today: "Today",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    date: "Date",
    time: "Time",
  },

  header: {
    heroSubtitle:
      "Learn about responsible pet care while finding your perfect companion",
    adoptPet: "Adopt a",
    pet: "pet",
    changeALife: "change a life",
    unconditionalLove: "Unconditional Love",
    certificates: "Certificates",
    aLife: "a life",
    makeDifference: "Make a Difference Today",
    joinUs:
      "Join us in our mission to find loving homes for pets in need.",
    simpleProcess: "Simple Process",
    noHiddenCosts: "No Hidden Costs",
    postAdoptionFollowUp: "Post-Adoption Follow-Up",
    scrollHint: "Scroll",
  },
  footer:{
    aboutTitle: "About Us",
    aboutText: "We are dedicated to changing the lives of abandoned pets by connecting them with loving families.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    followUsTitle: "Follow Us",
    rightsReserved: "All rights reserved.",
    rights: "All rights reserved.",
    about: "About",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    services: "Services",
    adoption: "Adoption",
    veterinarians: "Veterinarians",
    ethology: "Ethology",
    contact: "Contact",
  },
  ethology: {
    badge: "Animal Behavior",
    title: "Ethology",
    subtitle: "Understanding the language of our pets",
    introduction:
      "Ethology is the study of animal behavior. Knowing how our companions think, feel, and act helps us improve their well-being and strengthen the bond we have with them.",

    tabs: {
      dogs: "Canine Behavior",
      cats: "Feline Behavior",
      general: "General Tips",
    },

    // 🐶 Dogs section
    dogs: {
      title: "Canine Behavior",
      description:
        "Dogs are social animals with rich and complex communication. Understanding their signals allows us to guide them properly and create a healthy and respectful coexistence.",

      barking: {
        title: "Barking",
        subtitle: "Tips for managing barking",
        description:
          "Barking is one of the main forms of canine communication. It can express alertness, excitement, anxiety, or attention-seeking.",
        tip1: "Avoid scolding for barking; identify the cause of the behavior.",
        tip2: "Provide sufficient exercise and mental stimulation.",
        tip3: "Use consistent calm commands and reinforce silence with rewards.",
      },

      marking: {
        title: "Territorial Marking",
        subtitle: "Tips for managing territorial marking",
        description:
          "Marking is a natural behavior in dogs to communicate boundaries or presence to other animals.",
        tip1: "If marking indoors, clean with enzymatic products to eliminate odors.",
        tip2: "Maintain regular walking routines to reduce the need to mark.",
      },

      anxiety: {
        title: "Separation Anxiety",
        subtitle: "Tips for managing separation anxiety",
        description:
          "Some dogs experience stress when left alone, which can be reflected in howling, destruction, or inappropriate urination.",
        tip1: "Gradually increase separation times.",
        tip2: "Leave interactive toys to keep them occupied.",
        tip3: "Avoid overly emotional goodbyes or greetings.",
      },

      calmingSignals: "Calming Signals",
      signals: {
        yawn: "Yawning",
        yawnMeaning: "Indicates discomfort or attempts to calm a tense situation.",
        lick: "Licking the snout",
        lickMeaning: "Shows nervousness or attempts to reassure the environment.",
        turn: "Turning the head or body",
        turnMeaning: "A way to avoid confrontation or reduce tension.",
        sniff: "Sniffing the ground",
        sniffMeaning:
          "Calming signal in response to new stimuli or stressful situations.",
      },
    },

    // 🐱 Cats section
    cats: {
      title: "Feline Behavior",
      description:
        "Cats are independent and territorial animals, but they also express affection and trust through their body language and daily habits.",

      scratching: {
        title: "Scratching",
        subtitle: "Tips for managing scratching",
        description:
          "Scratching is a natural behavior that helps cats maintain their claws, stretch, and mark territory.",
        tip1: "Place vertical and horizontal scratching posts in different areas.",
        tip2: "Don't scold them; redirect the behavior to scratching posts.",
      },

      nocturnal: {
        title: "Nocturnal Activity",
        subtitle: "Tips for managing nocturnal activity",
        description:
          "Cats are crepuscular, which means they are most active at dawn and dusk.",
        tip1: "Play with your cat before bedtime to reduce their nighttime energy.",
        tip2: "Avoid feeding them right before going to bed.",
        tip3: "Offer stable routines so they adapt to your schedule.",
      },

      hiding: {
        title: "Hiding",
        subtitle: "Tips for managing hiding",
        description:
          "It's a natural behavior when the cat feels insecure or needs a moment of rest.",
        tip1: "Provide safe places where they can take refuge without being disturbed.",
        tip2: "Don't force them to come out; let them do it at their own pace.",
      },

      bodyLanguage: "Feline Body Language",
      body: {
        eyes: "Eyes",
        eyesDesc:
          "Half-closed eyes indicate relaxation; a fixed stare can be a warning.",
        tail: "Tail",
        tailDesc:
          "An upright tail shows confidence; a puffed or low tail reflects fear or defense.",
        ears: "Ears",
        earsDesc:
          "Forward ears denote interest; backward ones indicate discomfort or anger.",
        posture: "Body Posture",
        postureDesc:
          "A relaxed body indicates calmness, while a hunched or rigid one shows alertness.",
      },
    },

    // 🌿 General tips
    generalTips: {
      title: "General Coexistence Tips",
      description:
        "Having a pet involves responsibility and understanding. These tips will help you create a harmonious environment for your furry friend.",

      homePreparation: "Home Preparation",
      socialization: "Socialization",
      healthWellbeing: "Health and Well-being",
    },

    tips: {
      home: {
        safe: "Make Your Home Safe",
        safeDesc:
          "Remove dangerous objects and secure areas where your pet should not access.",
        space: "Create Their Own Space",
        spaceDesc:
          "Provide them with a bed or quiet area where they can rest and feel protected.",
        supplies: "Prepare Their Supplies",
        suppliesDesc:
          "Have feeders, toys, brushes, and appropriate food ready.",
      },
      social: {
        gradual: "Gradual Socialization",
        gradualDesc:
          "Introduce your pet gradually to new people or animals.",
        positive: "Positive Reinforcement",
        positiveDesc:
          "Reward desired behaviors instead of punishing unwanted ones.",
        routine: "Consistent Routine",
        routineDesc:
          "Maintain stable schedules for feeding, walking, and rest for their emotional balance.",
      },
      health: {
        checkups: "Veterinary Check-ups",
        checkupsDesc:
          "Take your pet to the veterinarian periodically to prevent diseases.",
        nutrition: "Good Nutrition",
        nutritionDesc:
          "Provide a balanced diet adapted to their age and size.",
        exercise: "Regular Exercise",
        exerciseDesc:
          "Dedicate time to play and physical activity to keep them healthy and happy.",
      },
    },

    // ❓ FAQ
    faq: {
      title: "Frequently Asked Questions",
      q1: "Why does my dog destroy things when left alone?",
      a1: "They probably suffer from separation anxiety. Start with short absences and leave toys or treats to distract them.",
      q2: "What do I do if my cat doesn't use the litter box?",
      a2: "Check the cleanliness, location, and type of litter. Sometimes the problem is due to stress or changes in the environment.",
      q3: "Is it good to sleep with my pet?",
      a3: "It depends on personal preference and household rules, but always ensure hygiene and parasite control.",
      q4: "How much exercise does a dog need per day?",
      a4: "It varies by breed and age, but on average between 30 minutes and 2 hours of daily activity.",
    },

    // 📘 Additional resources
    resources: {
      title: "Resources and Educational Materials",
      guides: "Downloadable Guides",
      guidesDesc:
        "Access documents with detailed information on training, communication, and animal welfare.",
      downloadGuides: "Download Guides",
      videos: "Educational Videos",
      videosDesc:
        "Explore audiovisual material on animal behavior and positive training techniques.",
      watchVideos: "Watch Videos",
      experts: "Consult with Experts",
      expertsDesc:
        "Talk to professionals in animal behavior to resolve your questions in a personalized way.",
      scheduleConsult: "Schedule Consultation",
    },

    // ❤️ Final CTA section
    cta: {
      title: "Create a Deeper Bond with Your Pet",
      description:
        "Every small gesture counts. Understanding their behavior is the first step toward a happy and balanced coexistence.",
      adoptButton: "Adopt a Pet",
      contactButton: "Contact an Expert",
    },
  },

  about: {
    tag: "ABOUT US",
    titleAccent: "Learn Our",
    titleMain: "Story and Mission",
    description:
      "We are an organization dedicated to changing the lives of abandoned pets, connecting them with loving families.",

    yearsExperience: "Years of experience",
    rescuedPets: "Rescued pets",
    happyFamilies: "Happy families",

    missionTitle: "Our Mission",
    missionText:
      "Rescue, rehabilitate, and find loving homes for every pet in need, promoting responsible adoption.",

    visionTitle: "Our Vision",
    visionText:
      "To be the leading pet adoption organization, creating a society where no animal is without a home.",

    valuesTitle: "Our Values",
    value1: "Unconditional love",
    value2: "Responsibility",
    value3: "Transparency",
    value4: "Social commitment",

    ctaText: "Want to be part of the change?",
    becomeVolunteer: "Become a Volunteer",
    donate: "Donate Now",

    processTitle: "Simple and Safe Adoption Process",
    step1Title: "Explore",
    step1Description: "Browse our available pets",
    step2Title: "Apply",
    step2Description: "Complete the adoption form",
    step3Title: "Meet",
    step3Description: "Visit and meet your new pet",
    step4Title: "Adopt",
    step4Description: "Take home your new best friend",
  },
  veterinarians: {
    badge: 'Veterinary Care',
    title: 'Veterinary Services',
    subtitle: 'Professional care for your furry companions',
    introduction: 'We have a team of highly trained veterinarians and state-of-the-art technology to provide the best care for your pet.',

    services: {
      title: 'Our Services',
      consultation: {
        title: 'General Consultation',
        description: 'Comprehensive medical and preventive examinations to maintain your pet\'s health.',
        feature1: 'Complete physical examination',
        feature2: 'Digital medical history',
        feature3: 'Personalized health plan',
        feature4: 'Continuous follow-up'
      },
      vaccines: {
        title: 'Vaccination',
        description: 'Complete vaccination programs according to your pet\'s age and needs.',
        feature1: 'Mandatory vaccines',
        feature2: 'Optional vaccines',
        feature3: 'Vaccination card',
        feature4: 'Automatic reminders'
      },
      surgery: {
        title: 'Surgery',
        description: 'Surgical procedures with modern equipment and minimally invasive techniques.',
        feature1: 'Routine surgeries',
        feature2: 'Specialized surgeries',
        feature3: 'Safe anesthesia',
        feature4: 'Monitored recovery'
      },
      diagnostics: {
        title: 'Diagnostics',
        description: 'Laboratory and diagnostic equipment for early disease detection.',
        feature1: 'Blood analysis',
        feature2: 'Digital X-rays',
        feature3: 'Ultrasounds',
        feature4: 'Fast results'
      },
      hospitalization: {
        title: 'Hospitalization',
        description: 'Comfortable and safe facilities for intensive care and recovery.',
        feature1: '24/7 monitoring',
        feature2: 'Intensive care',
        feature3: 'Specialized treatments',
        feature4: 'Constant updates'
      },
      grooming: {
        title: 'Grooming',
        description: 'Grooming and aesthetic care services to keep your pet looking beautiful.',
        feature1: 'Medicated bath',
        feature2: 'Haircut',
        feature3: 'Nail trimming',
        feature4: 'Dental cleaning'
      }
    },

    team: {
      title: 'Our Veterinary Team',
      subtitle: 'Professionals dedicated to your pet\'s well-being',
      member1: {
        role: 'General Veterinarian - Director',
        description: '15 years of experience in veterinary medicine with specialization in small animals.',
        specialty1: 'Internal Medicine',
        specialty2: 'Cardiology',
        specialty3: 'Geriatrics'
      },
      member2: {
        role: 'Veterinary Surgeon',
        description: 'Specialist in soft tissue surgery and minimally invasive procedures.',
        specialty1: 'General Surgery',
        specialty2: 'Orthopedics',
        specialty3: 'Traumatology'
      },
      member3: {
        role: 'Feline Veterinarian',
        description: 'Exclusively dedicated to the care and treatment of cats.',
        specialty1: 'Feline Medicine',
        specialty2: 'Behavior',
        specialty3: 'Nutrition'
      },
      member4: {
        role: 'Emergency Veterinarian',
        description: 'Specialist in emergency care and critical care 24 hours a day.',
        specialty1: 'Emergency Medicine',
        specialty2: 'Intensive Care',
        specialty3: 'Toxicology'
      }
    },

    schedule: {
      title: 'Office Hours',
      subtitle: 'We\'re here when you need us',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      emergency: '⚠️ 24/7 emergency service available - Call +57 312 345 6789'
    },

    contact: {
      title: 'Contact',
      subtitle: 'Have questions? We\'re here to help',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      address: 'Address',
      sendMessage: 'Send message'
    },

    cta: {
      title: 'Need an Appointment?',
      description: 'Schedule your veterinary consultation today. Our team is ready to care for your pet with the best medical attention.',
      bookAppointment: 'Book Appointment',
      callUs: 'Call Now'
    }
  },

  adoption: {
    badge: "Adoption",
    title: "Find Your Perfect Companion",
    subtitle: "Every pet deserves a home full of love",
    introduction: "Explore our available pets and find your ideal companion. All our animals are vaccinated, dewormed, and ready to become part of your family.",
    filters: {
      title: "Filter Your Search",
      clearAll: "Clear Filters",
      petType: "Pet Type",
      allTypes: "All Types",
      age: "Age",
      allAges: "All Ages",
      size: "Size",
      allSizes: "All Sizes",
      gender: "Gender",
      allGenders: "All Genders",
      traits: "Traits",
      selectTraits: "Select traits",
      showing: "Showing",
      results: "results",
      shelter: "Shelter",
      sortBy: "Sort by",
      longest: "Longest in shelter",
      newest: "Newest",
      oldest: "Oldest",
      shortest: "Shortest in shelter",
      all: "All",
      dogs: "Dogs",
      cats: "Cats",
      others: "Others",
      allShelters: "All Shelters",
      puppy: "Puppy/Kitten (0-1 year)",
      young: "Young (1-3 years)",
      adult: "Adult (3-7 years)",
      senior: "Senior (7+ years)",
      small: "Small",
      medium: "Medium",
      large: "Large",
      male: "Male",
      female: "Female",
      clear: "Clear",
    },
    types: {
      all: "All",
      dog: "Dogs",
      cat: "Cats",
      other: "Others"
    },
    ages: {
      all: "All Ages",
      puppy: "Puppy/Kitten (0-1 year)",
      young: "Young (1-3 years)",
      adult: "Adult (3-7 years)",
      senior: "Senior (7+ years)"
    },
    sizes: {
      all: "All Sizes",
      small: "Small",
      medium: "Medium",
      large: "Large"
    },
    genders: {
      all: "All",
      male: "Male",
      female: "Female"
    },
    traits: {
      friendly: "Friendly",
      energetic: "Energetic",
      calm: "Calm",
      trained: "Trained",
      goodWithKids: "Good with Kids",
      goodWithPets: "Good with Other Pets",
      vaccinated: "Vaccinated",
      sterilized: "Sterilized",
      playful: "Playful",
      independent: "Independent",
      affectionate: "Affectionate",
      protective: "Protective",
      intelligent: "Intelligent",
      loyal: "Loyal"
    },
    status: {
      available: "Available",
      reserved: "Reserved",
      urgent: "Urgent",
      adopted: "Adopted"
    },
    badges: {
      featured: "Featured",
      urgent: "Urgent Adoption",
      new: "New",
      senior: "Senior",
      special: "Special Needs"
    },
    view: {
      grid: "Grid View",
      list: "List View"
    },
    actions: {
      adopt: "Adopt Me",
      favorite: "Add to Favorites",
      share: "Share",
      linkCopied: "Link copied to clipboard!",
      moreInfo: "More Information",
      reserved: "Adopt Me",
      urgent: "Urgent Adoption"
    },
    pagination: {
      page: "Page",
      of: "of"
    },
    cta: {
      title: "Questions About Adoption?",
      description: "Our team is here to help you every step of the way. Contact us or check our frequently asked questions.",
      contact: "Contact Us",
      faq: "View FAQs",
      satisfaction: "Satisfaction"
    },

    hero: {
      title: "Find Your New Best Friend",
      subtitle: "Adopt with Love",
      description: "Thousands of pets are waiting for a home. Give a furry friend a second chance."
    },
    stats: {
      available: "Available",
      urgent: "Urgent",
      shelters: "Shelters"
    },
    results: {
      found: "pets found"
    },
    noResults: {
      title: "No pets found",
      description: "Try adjusting your filters to find more results",
      clear: "Clear all filters"
    },
    urgentCta: {
      title: "Pets in Urgent Need of a Home!",
      description: "There are {count} pets that need urgent adoption. Can you help?",
      action: "View urgent pets"
    }
  },
  contact:{
       // Header
    tag: 'Contact Us',
    titleAccent: 'We\'re here',
    titleMain: 'to help you',
    description: 'Get in touch with us for any questions about adoptions, veterinary services, or how you can help our animals.',

    // Contact information
    infoTitle: 'Contact Information',
    infoDescription: 'We are available to answer all your questions and provide you with the best care.',
    
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    locationLabel: 'Location',
    scheduleLabel: 'Office Hours',
    scheduleValue: 'Mon - Fri: 9:00 AM - 6:00 PM',

    // Social media
    socialTitle: 'Follow us',

    // Emergency
    emergencyTitle: 'Veterinary Emergency?',
    emergencyText: 'If your pet requires urgent care, contact us immediately at our emergency number.',

    // Form
    formTitle: 'Send us a message',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    emailPlaceholder: `contactonelessonperday.com`,
    phonePlaceholder: '+1 234 567 8900',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Select a subject',
    subjectAdoption: 'Pet Adoption',
    subjectVeterinary: 'Veterinary Services',
    subjectVolunteer: 'Volunteering',
    subjectDonation: 'Donations',
    subjectOther: 'Other',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here...',
    sendButton: 'Send message',
    sending: 'Sending...',
    formNote: 'We are committed to responding to your message within 24 business hours.',
    successMessage: 'Message sent successfully! We will respond soon.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Question: 'What are your visiting hours?',
    faq1Answer: 'You can visit us Monday through Friday from 9:00 AM to 6:00 PM and Saturdays from 10:00 AM to 2:00 PM. We recommend scheduling an appointment in advance.',
    faq2Question: 'What documents do I need to adopt?',
    faq2Answer: 'You need an official ID, proof of address, and to complete our adoption form. We also conduct a home visit.',
    faq3Question: 'Where are you located?',
    faq3Answer: 'We are located in Bogotá, Colombia. You can contact us to get the exact address and directions to our facilities.',
    faq4Question: 'How can I help?',
    faq4Answer: 'You can help through donations, becoming a volunteer, being a foster family, or sharing our posts on social media.'
 
  },
  
 appointments: {
    badge: 'Book your Appointment',
    title: 'Schedule your Veterinary Appointment',
    subtitle: 'Guided step-by-step process to schedule the best care for your pet',
    years: 'years',

    petTypes: {
      dog: 'Dog',
      cat: 'Cat',
      bird: 'Bird',
      rabbit: 'Rabbit',
      other: 'Other'
    },

    steps: {
      selectPet: {
        title: 'Select your Pet',
        description: 'Choose the pet for which you want to schedule the appointment',
        short: 'Choose your pet',
        addNew: 'Add New Pet',
        addNewDescription: 'Register a new pet'
      },
      selectService: {
        title: 'Select Service',
        description: 'Choose the type of care your pet needs',
        short: 'Select service'
      },
      schedule: {
        title: 'Schedule your Appointment',
        description: 'Select date, time and provide additional details',
        short: 'Date and time'
      }
    },

    services: {
      ethology: {
        title: 'Ethology',
        description: 'Specialized consultation in animal behavior to solve behavioral problems'
      },
      surgery: {
        title: 'Surgery',
        description: 'Surgical procedures with modern equipment and safe anesthesia'
      },
      consultation: {
        title: 'General Consultation',
        description: 'Complete medical and preventive examination to maintain your pet\'s health'
      },
      vaccination: {
        title: 'Vaccination',
        description: 'Complete vaccination programs according to age and needs'
      },
      diagnostics: {
        title: 'Diagnostics',
        description: 'Analysis and studies for early detection of diseases'
      }
    },

    form: {
      fields: {
        petName: 'Pet Name',
        petType: 'Pet Type',
        petBreed: 'Breed',
        petAge: 'Age (years)',
        veterinarian: 'Preferred Veterinarian',
        date: 'Date',
        time: 'Time',
        reason: 'Reason for Visit',
        reasonPlaceholder: 'Briefly describe the reason for your visit and any symptoms you have observed...',
        terms: 'I accept the terms and conditions and privacy policy'
      },
      options: {
        veterinarians: {
          any: 'No Preference'
        }
      },
      submit: 'Schedule Appointment'
    },

    summary: {
      pet: 'Pet',
      service: 'Service'
    },

    addPet: {
      title: 'Add New Pet'
    },

    sidebar: {
      progress: 'Progress',
      scheduleTitle: 'Office Hours',
      emergencyTitle: '24/7 Emergency',
      emergencyDescription: 'Emergency service available 24 hours. Call +57 312 345 6789',
      contactTitle: 'Contact'
    },

    success: {
      title: 'Appointment Scheduled Successfully!',
      message: 'Your appointment has been successfully scheduled. You will receive a confirmation email.',
      confirmation: 'We will send you a reminder 24 hours before your appointment.',
      close: 'Got it'
    }
  }
};






