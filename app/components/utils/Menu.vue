<template>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
        </template>
        <template #end>
            <UtilsTeamButton />
        </template>
    </Menubar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Etología',
        icon: 'pi pi-book',
        route: '/etologia'
    },
    {
        label: 'Adopción',
        icon: 'pi pi-heart',
        items: [
            {
                label: 'Pets',
                icon: 'pi pi-pets',
                route: '/pets'
            },
            {
                label: 'Perros',
                icon: 'pi pi-dog',
                route: '/pets/perros'
            },
            {
                label: 'Gatos',
                icon: 'pi pi-cat',
                route: '/pets/gatos'
            }
        ]
    },
    {
        label: 'Médicos',
        icon: 'pi pi-user-plus',
        route: '/medicos'
    }
]);
</script>