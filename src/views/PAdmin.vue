<template>
  <Header />
  <NavBar />
  <router-view> </router-view>
</template>

<script setup lang="ts">
import Header from '@/components/Layout/Header.vue'
import NavBar from '@/components/Layout/NavBar.vue'
</script>
