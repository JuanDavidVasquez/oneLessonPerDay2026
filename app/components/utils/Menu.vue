<template>
  <Menubar :model="items" :class="{ scrolled: isScrolled }">
    <!-- 👇 Logo -->
    <template #start>
      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="Logo" class="logo-image" />
      </NuxtLink>
    </template>

    <!-- 👇 Items del menú -->
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate, isActive }" :to="item.route" custom>
        <NuxtLink v-ripple :href="href" :class="{ 'active-link': isActive }" v-bind="props.action"
          @click="() => handleMenuClick(navigate)">
          <span v-if="item.icon" :class="item.icon" />
          <span class="menu-label" style="margin-bottom: 2px;" v-if="item.label === 'login'"></span>
          <span class="menu-label" v-else>{{ t(`nav.${item.label}`) }}</span>
        </NuxtLink>
      </router-link>

      <NuxtLink v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span v-if="item.icon" :class="item.icon" />
        <span class="menu-label">{{ t(`nav.${item.label}`) }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down submenu-icon" />
      </NuxtLink>
    </template>

    <!-- Acciones a la derecha -->
    <template #end>
      <div class="menu-actions">
        <!-- Si hay usuario logueado -->
        <div v-if="mainStore.user" class="user-info">
          <span class="user-name">{{ mainStore.user.name }}</span>
          <img :src="mainStore.user.picture" alt="Avatar" class="user-avatar" />
          <Button icon="pi pi-sign-out" class="logout-btn" @click="handleLogout" />

        </div>
        <UtilsTeamButton />
        <UtilsIn18Change />
      </div>
    </template>
  </Menubar>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { publicMenuItems, authMenuItems } from "@/router/routes";
import { useMainStore } from "~/store/main.store";

const { t } = useI18n();
const router = useRouter();
const mainStore = useMainStore();

const items = ref([...publicMenuItems]);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleLogout = () => {
  mainStore.logout();
  updateMenu();
  router.push("/");
};

const handleMenuClick = (navigate: () => void) => {
  navigate();
};

const updateMenu = () => {
  if (mainStore.user) {
    // Usuario logueado → mostrar menú auth
    items.value = authMenuItems
      .map(item => {
        if (item.label === "logout") {
          return {
            ...item,
            command: handleLogout,
          };
        }
        return item;
      })
      .filter(item => item.route !== undefined);
  } else {
    items.value = [...publicMenuItems];
  }
};

onMounted(() => {
  mainStore.loadUser();
  updateMenu();
  window.addEventListener("scroll", handleScroll);
});

watch(
  () => mainStore.user,
  () => {
    updateMenu();
  }
);

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
