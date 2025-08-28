<template>
  <div>
    <default-layout>
      <Header />
      <About />
    </default-layout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
</script>
