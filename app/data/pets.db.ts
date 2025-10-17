/* ===========================
   🐾 BASE DE DATOS SIMULADA - MASCOTAS
   Archivo temporal hasta conectar con API real
   =========================== */

// Tipos e interfaces
export interface Pet {
  id: number
  name: string
  type: 'dog' | 'cat' | 'other'
  breed: string
  age: string
  ageRange: 'puppy' | 'young' | 'adult' | 'senior'
  size: 'small' | 'medium' | 'large'
  gender: 'male' | 'female'
  description: string
  traits: PetTrait[]
  image: string
  status: PetStatus
  badge: PetBadge | null
  location?: string
  weight?: string
  color?: string
  adoptionDate?: string
  specialNeeds?: string[]
  story?: string
}

export type PetStatus = 'available' | 'reserved' | 'urgent' | 'adopted'

export type PetBadge = 'featured' | 'urgent' | 'new' | 'senior' | 'special'

export type PetTrait = 
  | 'friendly' 
  | 'energetic' 
  | 'calm' 
  | 'trained' 
  | 'goodWithKids' 
  | 'goodWithPets' 
  | 'vaccinated' 
  | 'sterilized'
  | 'playful'
  | 'independent'
  | 'affectionate'
  | 'protective'
  | 'intelligent'
  | 'loyal'

export interface FilterOptions {
  petType: string | null
  age: string | null
  size: string | null
  gender: string | null
  traits: string[]
  status?: string | null
}

// Base de datos simulada
export const petsDatabase: Pet[] = [
  {
    id: 1,
    name: 'Max',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '3 años',
    ageRange: 'adult',
    size: 'large',
    gender: 'male',
    description: 'Max es un perro cariñoso y juguetón que ama estar con personas. Es perfecto para familias activas que buscan un compañero leal.',
    traits: ['friendly', 'energetic', 'trained', 'goodWithKids', 'vaccinated', 'sterilized', 'playful'],
    image: 'https://images.pexels.com/photos/2409503/pexels-photo-2409503.jpeg?_gl=1*160r9rj*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE2NTIkajUxJGwwJGgw',
    status: 'available',
    badge: 'featured',
    location: 'Bogotá, Colombia',
    weight: '30 kg',
    color: 'Dorado',
    story: 'Max fue rescatado de la calle cuando era un cachorro. Ahora está listo para encontrar su hogar definitivo.'
  },
  {
    id: 2,
    name: 'Luna',
    type: 'cat',
    breed: 'Gato Común Europeo',
    age: '2 años',
    ageRange: 'young',
    size: 'small',
    gender: 'female',
    description: 'Luna es una gata tranquila y cariñosa. Le encanta dormir en lugares soleados y recibir mimos de sus humanos favoritos.',
    traits: ['calm', 'friendly', 'sterilized', 'vaccinated', 'affectionate', 'independent'],
    image: 'https://images.pexels.com/photos/15660586/pexels-photo-15660586.jpeg?_gl=1*1qwhxuc*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE3MDgkajU5JGwwJGgw',
    status: 'available',
    badge: null,
    location: 'Medellín, Colombia',
    weight: '4 kg',
    color: 'Blanco y gris'
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'dog',
    breed: 'Pastor Alemán',
    age: '5 años',
    ageRange: 'adult',
    size: 'large',
    gender: 'male',
    description: 'Rocky es un perro leal y protector. Necesita una familia con experiencia en razas grandes y un espacio amplio para ejercitarse.',
    traits: ['trained', 'energetic', 'goodWithPets', 'vaccinated', 'sterilized', 'protective', 'intelligent', 'loyal'],
    image: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?_gl=1*1f79tfs*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE3MzYkajMxJGwwJGgw',
    status: 'reserved',
    badge: null,
    location: 'Cali, Colombia',
    weight: '35 kg',
    color: 'Negro y café'
  },
  {
    id: 4,
    name: 'Mia',
    type: 'cat',
    breed: 'Siamés',
    age: '6 meses',
    ageRange: 'puppy',
    size: 'small',
    gender: 'female',
    description: 'Mia es una gatita juguetona y curiosa. Busca un hogar donde pueda explorar y recibir mucho amor y atención.',
    traits: ['energetic', 'friendly', 'vaccinated', 'playful', 'intelligent'],
    image: 'https://images.pexels.com/photos/5200916/pexels-photo-5200916.jpeg?_gl=1*7742j*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE3NzgkajYwJGwwJGgw',
    status: 'urgent',
    badge: 'urgent',
    location: 'Barranquilla, Colombia',
    weight: '2 kg',
    color: 'Crema con puntos marrones',
    story: 'Mia necesita un hogar urgente. Su anterior familia no puede cuidarla por motivos de mudanza.'
  },
  {
    id: 5,
    name: 'Bruno',
    type: 'dog',
    breed: 'Labrador Retriever',
    age: '4 años',
    ageRange: 'adult',
    size: 'large',
    gender: 'male',
    description: 'Bruno es tranquilo y amoroso. Es perfecto para familias con niños pequeños gracias a su temperamento paciente.',
    traits: ['calm', 'friendly', 'goodWithKids', 'trained', 'vaccinated', 'sterilized', 'affectionate', 'loyal'],
    image: 'https://images.pexels.com/photos/3039079/pexels-photo-3039079.jpeg?_gl=1*1b6kolf*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDIxNjUkajI3JGwwJGgw',
    status: 'available',
    badge: 'featured',
    location: 'Cartagena, Colombia',
    weight: '32 kg',
    color: 'Chocolate'
  },
  {
    id: 6,
    name: 'Bella',
    type: 'dog',
    breed: 'Beagle',
    age: '2 años',
    ageRange: 'young',
    size: 'medium',
    gender: 'female',
    description: 'Bella es una perra alegre y sociable. Le encanta jugar y hacer nuevos amigos, tanto humanos como caninos.',
    traits: ['friendly', 'energetic', 'goodWithPets', 'vaccinated', 'playful', 'intelligent'],
    image: 'https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?_gl=1*pgnr1y*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE4NzgkajQxJGwwJGgw',
    status: 'available',
    badge: null,
    location: 'Bogotá, Colombia',
    weight: '12 kg',
    color: 'Tricolor'
  },
  {
    id: 7,
    name: 'Simba',
    type: 'cat',
    breed: 'Maine Coon',
    age: '3 años',
    ageRange: 'adult',
    size: 'medium',
    gender: 'male',
    description: 'Simba es un gato majestuoso y gentil. A pesar de su gran tamaño, es muy cariñoso y le gusta la compañía.',
    traits: ['friendly', 'calm', 'affectionate', 'vaccinated', 'sterilized', 'goodWithKids'],
    image: 'https://images.pexels.com/photos/1671469/pexels-photo-1671469.jpeg?_gl=1*1667yhu*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE5MjgkajU5JGwwJGgw',
    status: 'available',
    badge: 'new',
    location: 'Medellín, Colombia',
    weight: '8 kg',
    color: 'Naranja atigrado'
  },
  {
    id: 8,
    name: 'Toby',
    type: 'dog',
    breed: 'Jack Russell Terrier',
    age: '1 año',
    ageRange: 'young',
    size: 'small',
    gender: 'male',
    description: 'Toby es un perrito lleno de energía y curiosidad. Necesita una familia activa que disfrute de largas caminatas.',
    traits: ['energetic', 'playful', 'intelligent', 'trained', 'vaccinated'],
    image: 'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?_gl=1*5pqjhb*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE5NTgkajI5JGwwJGgw',
    status: 'available',
    badge: null,
    location: 'Bucaramanga, Colombia',
    weight: '8 kg',
    color: 'Blanco con manchas café'
  },
  {
    id: 9,
    name: 'Nala',
    type: 'cat',
    breed: 'Persa',
    age: '7 años',
    ageRange: 'senior',
    size: 'small',
    gender: 'female',
    description: 'Nala es una gata senior muy tranquila. Busca un hogar tranquilo donde pueda pasar sus años dorados con amor.',
    traits: ['calm', 'affectionate', 'independent', 'vaccinated', 'sterilized'],
    image: 'https://images.pexels.com/photos/1697100/pexels-photo-1697100.jpeg?_gl=1*1bk5iu5*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDE5OTEkajU5JGwwJGgw',
    status: 'available',
    badge: 'senior',
    location: 'Pereira, Colombia',
    weight: '5 kg',
    color: 'Gris perla',
    specialNeeds: ['Requiere cuidado dental regular', 'Alimentación especial para gatos senior']
  },
  {
    id: 10,
    name: 'Zeus',
    type: 'dog',
    breed: 'Husky Siberiano',
    age: '2 años',
    ageRange: 'young',
    size: 'large',
    gender: 'male',
    description: 'Zeus es un Husky enérgico que necesita mucho ejercicio diario. Ideal para personas activas con experiencia en la raza.',
    traits: ['energetic', 'playful', 'intelligent', 'vaccinated', 'sterilized', 'goodWithPets'],
    image: 'https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg?_gl=1*1ke9ffc*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDIyMTMkajQ0JGwwJGgw',
    status: 'available',
    badge: 'special',
    location: 'Manizales, Colombia',
    weight: '25 kg',
    color: 'Blanco y gris',
    specialNeeds: ['Requiere mucho ejercicio diario', 'Necesita clima fresco']
  },
  {
    id: 11,
    name: 'Coco',
    type: 'dog',
    breed: 'Poodle',
    age: '6 años',
    ageRange: 'adult',
    size: 'small',
    gender: 'female',
    description: 'Coco es una perrita dulce y bien educada. Perfecta para apartamentos y personas mayores que buscan compañía.',
    traits: ['calm', 'friendly', 'trained', 'goodWithKids', 'vaccinated', 'sterilized', 'affectionate'],
    image: 'https://images.pexels.com/photos/1407167/pexels-photo-1407167.jpeg?_gl=1*vhw03m*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDIwNTgkajUyJGwwJGgw',
    status: 'available',
    badge: null,
    location: 'Bogotá, Colombia',
    weight: '7 kg',
    color: 'Blanco'
  },
  {
    id: 12,
    name: 'Oliver',
    type: 'cat',
    breed: 'Gato Naranja',
    age: '8 meses',
    ageRange: 'puppy',
    size: 'small',
    gender: 'male',
    description: 'Oliver es un gatito juguetón que adora las plumas y las cajas. Busca una familia que disfrute de sus travesuras.',
    traits: ['playful', 'energetic', 'friendly', 'vaccinated', 'intelligent'],
    image: 'https://images.pexels.com/photos/34283814/pexels-photo-34283814.jpeg?_gl=1*1e1qmoi*_ga*MzM4ODYyNDk3LjE3NjA1NDQ2ODM.*_ga_8JE65Q40S6*czE3NjA3NDA1NzEkbzckZzEkdDE3NjA3NDIwODYkajI0JGwwJGgw',
    status: 'available',
    badge: 'new',
    location: 'Cúcuta, Colombia',
    weight: '3 kg',
    color: 'Naranja'
  }
]

// Funciones helper para trabajar con la base de datos

/**
 * Obtiene todas las mascotas
 */
export const getAllPets = (): Pet[] => {
  return petsDatabase
}

/**
 * Obtiene una mascota por ID
 */
export const getPetById = (id: number): Pet | undefined => {
  return petsDatabase.find(pet => pet.id === id)
}

/**
 * Filtra mascotas según criterios
 */
export const filterPets = (filters: FilterOptions): Pet[] => {
  return petsDatabase.filter(pet => {
    // Filtro por tipo
    if (filters.petType && pet.type !== filters.petType) return false
    
    // Filtro por edad
    if (filters.age && pet.ageRange !== filters.age) return false
    
    // Filtro por tamaño
    if (filters.size && pet.size !== filters.size) return false
    
    // Filtro por género
    if (filters.gender && pet.gender !== filters.gender) return false
    
    // Filtro por estado
    if (filters.status && pet.status !== filters.status) return false
    
    // Filtro por características
    if (filters.traits.length > 0) {
      const hasAllTraits = filters.traits.every(trait => 
        pet.traits.includes(trait as PetTrait)
      )
      if (!hasAllTraits) return false
    }
    
    return true
  })
}

/**
 * Obtiene mascotas por tipo
 */
export const getPetsByType = (type: 'dog' | 'cat' | 'other'): Pet[] => {
  return petsDatabase.filter(pet => pet.type === type)
}

/**
 * Obtiene mascotas por estado
 */
export const getPetsByStatus = (status: PetStatus): Pet[] => {
  return petsDatabase.filter(pet => pet.status === status)
}

/**
 * Obtiene mascotas destacadas
 */
export const getFeaturedPets = (): Pet[] => {
  return petsDatabase.filter(pet => pet.badge === 'featured')
}

/**
 * Obtiene mascotas urgentes
 */
export const getUrgentPets = (): Pet[] => {
  return petsDatabase.filter(pet => pet.status === 'urgent' || pet.badge === 'urgent')
}

/**
 * Busca mascotas por nombre o raza
 */
export const searchPets = (query: string): Pet[] => {
  const lowerQuery = query.toLowerCase()
  return petsDatabase.filter(pet => 
    pet.name.toLowerCase().includes(lowerQuery) ||
    pet.breed.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Obtiene estadísticas de mascotas
 */
export const getPetStatistics = () => {
  return {
    total: petsDatabase.length,
    available: petsDatabase.filter(p => p.status === 'available').length,
    reserved: petsDatabase.filter(p => p.status === 'reserved').length,
    urgent: petsDatabase.filter(p => p.status === 'urgent').length,
    dogs: petsDatabase.filter(p => p.type === 'dog').length,
    cats: petsDatabase.filter(p => p.type === 'cat').length,
    others: petsDatabase.filter(p => p.type === 'other').length
  }
}

/**
 * Simula una llamada a API con delay
 * Útil para testing y desarrollo
 */
export const fetchPetsAsync = async (delay: number = 1000): Promise<Pet[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(petsDatabase)
    }, delay)
  })
}

/**
 * Simula obtener una mascota por ID de forma asíncrona
 */
export const fetchPetByIdAsync = async (id: number, delay: number = 500): Promise<Pet | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getPetById(id))
    }, delay)
  })
}

// Exportar también la base de datos completa
export default petsDatabase