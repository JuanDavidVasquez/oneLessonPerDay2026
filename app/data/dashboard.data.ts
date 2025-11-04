import type {
    Pet,
    AdoptionApplication,
    Appointment,
    Reminder,
    Activity,
    DashboardData,
} from "~/interfaces/dashboard.interface"


// Datos mock de mascotas
export const mockPets: Pet[] = [
    {
        id: 1,
        name: 'Luna',
        breed: 'Golden Retriever',
        age: '3 años',
        image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
        healthStatus: 'healthy',
        species: 'dog',
        gender: 'female',
        vaccinated: true,
        sterilized: true,
    },
    {
        id: 2,
        name: 'Max',
        breed: 'Bulldog Francés',
        age: '2 años',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
        healthStatus: 'healthy',
        species: 'dog',
        gender: 'male',
        vaccinated: true,
        sterilized: true,
    },
    {
        id: 3,
        name: 'Michi',
        breed: 'Siamés',
        age: '5 años',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
        healthStatus: 'warning',
        species: 'cat',
        gender: 'male',
        vaccinated: true,
        sterilized: true,
    },
    {
        id: 4,
        name: 'Bella',
        breed: 'Labrador',
        age: '1 año',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
        healthStatus: 'healthy',
        species: 'dog',
        gender: 'female',
        vaccinated: false,
        sterilized: false,
    },
]

// Datos mock de postulaciones
export const mockAdoptionApplications: AdoptionApplication[] = [
    {
        id: 1,
        petId: 5,
        petName: 'Rocky',
        petImage: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400',
        submittedDate: '2025-10-25',
        status: 'pending',
        progress: 60,
        nextStep: 'Entrevista telefónica',
        notes: 'En espera de confirmación de fecha para entrevista',
    },
    {
        id: 2,
        petId: 6,
        petName: 'Simba',
        petImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
        submittedDate: '2025-10-20',
        status: 'review',
        progress: 80,
        nextStep: 'Visita domiciliaria',
        notes: 'Documentación aprobada, programando visita',
    },
]

// Datos mock de citas
export const mockAppointments: Appointment[] = [
    {
        id: 1,
        petId: 1,
        petName: 'Luna',
        petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
        date: '2025-11-05T10:00:00',
        type: 'Chequeo general',
        veterinarianName: 'Dr. Carlos Méndez',
        veterinarianId: 1,
        status: 'confirmed',
        reason: 'Chequeo anual de rutina',
        location: 'Clínica Veterinaria Central',
        notes: 'Traer cartilla de vacunación',
    },
    {
        id: 2,
        petId: 2,
        petName: 'Max',
        petImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
        date: '2025-11-08T15:30:00',
        type: 'Vacunación',
        veterinarianName: 'Dra. Ana Rodríguez',
        veterinarianId: 2,
        status: 'confirmed',
        reason: 'Vacuna antirrábica',
        location: 'Clínica Veterinaria Central',
    },
    {
        id: 3,
        petId: 3,
        petName: 'Michi',
        petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
        date: '2025-11-12T11:00:00',
        type: 'Consulta de seguimiento',
        veterinarianName: 'Dr. Carlos Méndez',
        veterinarianId: 1,
        status: 'pending',
        reason: 'Seguimiento de tratamiento',
        location: 'Clínica Veterinaria Central',
        notes: 'Revisar evolución del tratamiento para artritis',
    },
]

// Datos mock de recordatorios
export const mockReminders: Reminder[] = [
    {
        id: 1,
        petId: 1,
        petName: 'Luna',
        title: 'Vacuna anual',
        description: 'Aplicar refuerzo de vacuna polivalente',
        dueDate: '2025-11-10',
        priority: 'high',
        icon: 'syringe',
        type: 'vaccine',
        completed: false,
        recurring: true,
        frequency: 'yearly',
    },
    {
        id: 2,
        petId: 3,
        petName: 'Michi',
        title: 'Medicamento para artritis',
        description: 'Administrar medicamento diario',
        dueDate: '2025-11-04',
        priority: 'high',
        icon: 'pills',
        type: 'medication',
        completed: false,
        recurring: true,
        frequency: 'daily',
    },
    {
        id: 3,
        petId: 2,
        petName: 'Max',
        title: 'Desparasitación',
        description: 'Aplicar desparasitante trimestral',
        dueDate: '2025-11-15',
        priority: 'medium',
        icon: 'shield-virus',
        type: 'medication',
        completed: false,
        recurring: true,
        frequency: 'monthly',
    },
    {
        id: 4,
        petId: 4,
        petName: 'Bella',
        title: 'Baño y peluquería',
        description: 'Cita mensual de grooming',
        dueDate: '2025-11-20',
        priority: 'low',
        icon: 'shower',
        type: 'grooming',
        completed: false,
        recurring: true,
        frequency: 'monthly',
    },
]

// Datos mock de actividad reciente
export const mockActivities: Activity[] = [
    {
        id: 1,
        description: 'Cita completada: Chequeo dental de Luna',
        timestamp: '2025-10-28T14:30:00',
        type: 'appointment',
        icon: 'check-circle',
        petId: 1,
        relatedId: 4,
    },
    {
        id: 2,
        description: 'Aplicación de adopción enviada para Rocky',
        timestamp: '2025-10-25T10:15:00',
        type: 'adoption',
        icon: 'file-alt',
        relatedId: 1,
    },
    {
        id: 3,
        description: 'Recordatorio completado: Vacuna de Max',
        timestamp: '2025-10-24T09:00:00',
        type: 'reminder',
        icon: 'check-circle',
        petId: 2,
        relatedId: 6,
    },
    {
        id: 4,
        description: 'Nueva cita agendada: Vacunación de Max',
        timestamp: '2025-10-23T16:45:00',
        type: 'appointment',
        icon: 'calendar-plus',
        petId: 2,
        relatedId: 2,
    },
]

// Función para simular delay de API
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Función principal para obtener datos del dashboard
export const getMockDashboardData = async (userId: number): Promise<DashboardData> => {
    await delay(800) // Simular latencia de red

    return {
        user: {
            id: userId,
            name: 'Usuario Mock',
            email: 'usuario@example.com',
            role: 'user',
        },
        stats: {
            totalPets: mockPets.length,
            activeApplications: mockAdoptionApplications.filter(
                (a) => a.status === 'pending' || a.status === 'review'
            ).length,
            upcomingAppointments: mockAppointments.filter(
                (a) => new Date(a.date) > new Date() && a.status !== 'cancelled'
            ).length,
            activeReminders: mockReminders.filter((r) => !r.completed).length,
            completedAppointments: mockAppointments.filter((a) => a.status === 'completed').length,
            totalAdoptions: mockAdoptionApplications.filter((a) => a.status === 'approved').length,
        },
        pets: mockPets,
        adoptionApplications: mockAdoptionApplications,
        upcomingAppointments: mockAppointments.filter((a) => new Date(a.date) > new Date()),
        activeReminders: mockReminders.filter((r) => !r.completed),
        recentActivity: mockActivities,
    }
}

// Exportar por defecto un objeto con todo
export default {
    pets: mockPets,
    applications: mockAdoptionApplications,
    appointments: mockAppointments,
    reminders: mockReminders,
    activities: mockActivities,
    getMockDashboardData,
}