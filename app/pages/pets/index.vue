<template>
    <div class="pets-page">
        <p>Bienvenido, {{ user?.name }}</p>
        <h1>Welcome to the Pets Page</h1>
        <p>This is the main landing page of the application.</p>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'authenticated'
})

const { user } = useAuth()
</script>