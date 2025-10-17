<template>
  <Menubar :model="items" :class="{ 'scrolled': isScrolled }">
    <template #start>
      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="Logo" class="logo-image" />
      </NuxtLink>
    </template>
    
    <template #item="{ item, props, hasSubmenu }">
      <router-link 
        v-if="item.route" 
        v-slot="{ href, navigate, isActive }" 
        :to="item.route" 
        custom
      >
        <NuxtLink
          v-ripple 
          :href="href" 
          :class="{ 'active-link': isActive }"
          v-bind="props.action" 
          @click="() => handleMenuClick(navigate)"
        >
          <span v-if="item.icon" :class="item.icon" />
          <span class="menu-label">{{ t(`nav.${item.label}`) }}</span>
        </NuxtLink>
      </router-link>
      
      <NuxtLink 
        v-else 
        v-ripple 
        :href="item.url" 
        :target="item.target" 
        v-bind="props.action"
      >
        <span v-if="item.icon" :class="item.icon" />
        <span class="menu-label">{{ t(`nav.${item.label}`) }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down submenu-icon" />
      </NuxtLink>
    </template>
    <template #end>
      <div class="menu-actions">
        <UtilsTeamButton />
        <UtilsIn18Change />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { menuItems } from '@/router/routes';
const { t } = useI18n();

const items = ref(menuItems);
const isScrolled = ref(false);
const handleMenuClick = async (navigate?: () => void) => {
  if (navigate) navigate();
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>