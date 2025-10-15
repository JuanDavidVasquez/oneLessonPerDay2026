<template>
  <div class="theme-toggle-container">
    <ToggleSwitch 
      v-model="checked"
      @change="toggleTheme"
    />
    <Transition name="fade">
      <i v-if="!checked" class="pi pi-sun icon-sun"></i>
    </Transition>
    <Transition name="fade">
      <i v-if="checked" class="pi pi-moon icon-moon"></i>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const colorMode = useColorMode()

const checked = computed({
  get: () => colorMode.value === 'dark',
  set: () => toggleTheme()
})

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>