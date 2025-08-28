<template>
  <div class="d-flex flex-column h-100">
    <main class="flex-shrink-0">
      <Navigation />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped></style>
