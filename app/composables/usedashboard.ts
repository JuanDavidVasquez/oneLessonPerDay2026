import { ref, computed } from 'vue'
import type {
    DashboardData,
    Pet,
    AdoptionApplication,
    Appointment,
    Reminder,
    Activity,
    DashboardStats,
} from '~/interfaces/dashboard.interface'


export const useDashboard = () => {
    // Estado
    const loading = ref(false)
    const error = ref<string | null>(null)
    const pets = ref<Pet[]>([])
    const adoptionApplications = ref<AdoptionApplication[]>([])
    const appointments = ref<Appointment[]>([])
    const reminders = ref<Reminder[]>([])
    const activities = ref<Activity[]>([])

    // Computados
    const stats = computed<DashboardStats>(() => ({
        totalPets: pets.value.length,
        activeApplications: adoptionApplications.value.filter((a) => a.status === 'pending' || a.status === 'review').length,
        upcomingAppointments: upcomingAppointments.value.length,
        activeReminders: activeReminders.value.length,
        completedAppointments: appointments.value.filter((a) => a.status === 'completed').length,
        totalAdoptions: adoptionApplications.value.filter((a) => a.status === 'approved').length,
    }))

    const upcomingAppointments = computed(() => {
        const now = new Date()
        return appointments.value
            .filter((appointment) => new Date(appointment.date) > now)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    })

    const activeReminders = computed(() => {
        return reminders.value
            .filter((reminder) => !reminder.completed)
            .sort((a, b) => {
                // Ordenar por prioridad y luego por fecha
                const priorityOrder = { high: 1, medium: 2, low: 3 }
                if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                    return priorityOrder[a.priority] - priorityOrder[b.priority]
                }
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            })
    })

    const recentActivity = computed(() => {
        return activities.value
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .slice(0, 10)
    })

    const healthyPets = computed(() => pets.value.filter((p) => p.healthStatus === 'healthy').length)
    const petsNeedingAttention = computed(() => pets.value.filter((p) => p.healthStatus === 'warning').length)
    const criticalPets = computed(() => pets.value.filter((p) => p.healthStatus === 'critical').length)

    // Métodos
    const loadDashboardData = async (userId: number) => {
        loading.value = true
        error.value = null

        try {
            // TODO: Reemplazar con llamada real a la API
            const response = await fetch(`/api/dashboard/${userId}`)

            if (!response.ok) {
                throw new Error('Error al cargar los datos del dashboard')
            }

            const data: DashboardData = await response.json()

            pets.value = data.pets
            adoptionApplications.value = data.adoptionApplications
            appointments.value = data.upcomingAppointments
            reminders.value = data.activeReminders
            activities.value = data.recentActivity
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Error desconocido'
            console.error('Error loading dashboard data:', err)
        } finally {
            loading.value = false
        }
    }

    const refreshDashboard = async (userId: number) => {
        await loadDashboardData(userId)
    }

    const completeReminder = async (reminderId: number) => {
        try {
            // TODO: Llamada a la API
            const response = await fetch(`/api/reminders/${reminderId}/complete`, {
                method: 'PATCH',
            })

            if (!response.ok) {
                throw new Error('Error al completar el recordatorio')
            }

            // Actualizar localmente
            const reminderIndex = reminders.value.findIndex((r) => r.id === reminderId)
            if (reminderIndex !== -1) {
                if (reminderIndex !== -1 && reminders.value[reminderIndex]) {
                    reminders.value[reminderIndex].completed = true
                }
            }

            // Agregar a actividad
            addActivity({
                id: Date.now(),
                description: 'Recordatorio completado',
                timestamp: new Date().toISOString(),
                type: 'reminder',
                icon: 'check-circle',
                relatedId: reminderId,
            })
        } catch (err) {
            console.error('Error completing reminder:', err)
            throw err
        }
    }

    const cancelAppointment = async (appointmentId: number) => {
        try {
            // TODO: Llamada a la API
            const response = await fetch(`/api/appointments/${appointmentId}/cancel`, {
                method: 'PATCH',
            })

            if (!response.ok) {
                throw new Error('Error al cancelar la cita')
            }

            // Actualizar localmente
            const appointmentIndex = appointments.value.findIndex((a) => a.id === appointmentId)
            if (appointmentIndex !== -1) {
                if (appointments.value[appointmentIndex]) {
                    appointments.value[appointmentIndex].status = 'cancelled'
                }
            }

            // Agregar a actividad
            addActivity({
                id: Date.now(),
                description: 'Cita cancelada',
                timestamp: new Date().toISOString(),
                type: 'appointment',
                icon: 'times-circle',
                relatedId: appointmentId,
            })
        } catch (err) {
            console.error('Error canceling appointment:', err)
            throw err
        }
    }

    const withdrawApplication = async (applicationId: number) => {
        try {
            // TODO: Llamada a la API
            const response = await fetch(`/api/adoptions/applications/${applicationId}/withdraw`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Error al retirar la postulación')
            }

            // Eliminar localmente
            const applicationIndex = adoptionApplications.value.findIndex((a) => a.id === applicationId)
            if (applicationIndex !== -1) {
                adoptionApplications.value.splice(applicationIndex, 1)
            }

            // Agregar a actividad
            addActivity({
                id: Date.now(),
                description: 'Postulación retirada',
                timestamp: new Date().toISOString(),
                type: 'adoption',
                icon: 'times-circle',
                relatedId: applicationId,
            })
        } catch (err) {
            console.error('Error withdrawing application:', err)
            throw err
        }
    }

    const addActivity = (activity: Activity) => {
        activities.value.unshift(activity)
        // Mantener solo las últimas 50 actividades
        if (activities.value.length > 50) {
            activities.value = activities.value.slice(0, 50)
        }
    }

    const getPetById = (petId: number) => {
        return pets.value.find((pet) => pet.id === petId)
    }

    const getAppointmentById = (appointmentId: number) => {
        return appointments.value.find((appointment) => appointment.id === appointmentId)
    }

    const getApplicationById = (applicationId: number) => {
        return adoptionApplications.value.find((application) => application.id === applicationId)
    }

    // Métricas y análisis
    const getAppointmentsByMonth = () => {
        const monthCounts: Record<string, number> = {}
        appointments.value.forEach((appointment) => {
            const month = new Date(appointment.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
            monthCounts[month] = (monthCounts[month] || 0) + 1
        })
        return monthCounts
    }

    const getApplicationStatusBreakdown = () => {
        const statusCounts: Record<string, number> = {}
        adoptionApplications.value.forEach((application) => {
            statusCounts[application.status] = (statusCounts[application.status] || 0) + 1
        })
        return statusCounts
    }

    return {
        // Estado
        loading,
        error,
        pets,
        adoptionApplications,
        appointments,
        reminders,
        activities,

        // Computados
        stats,
        upcomingAppointments,
        activeReminders,
        recentActivity,
        healthyPets,
        petsNeedingAttention,
        criticalPets,

        // Métodos
        loadDashboardData,
        refreshDashboard,
        completeReminder,
        cancelAppointment,
        withdrawApplication,
        addActivity,
        getPetById,
        getAppointmentById,
        getApplicationById,
        getAppointmentsByMonth,
        getApplicationStatusBreakdown,
    }
}