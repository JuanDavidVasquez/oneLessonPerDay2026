<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from './store/main.store'

const { locale } = useI18n()
const mainStore = useMainStore()

watchEffect(() => {
  if (locale.value !== mainStore.locale) {
    locale.value = mainStore.locale as "es" | "en"
  }
})
</script>