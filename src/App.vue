<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>
    <router-link to="/" class="mr-50">Home</router-link>
    <router-link to="/about">About</router-link>
  </p>

  <AppLayout>
    <router-view />
  </AppLayout>
</template>
