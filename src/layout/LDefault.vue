<template>
  <Header/>
  <NavBar/>
  <slot></slot>
</template>
<script setup>
import Header from "@/components/Layout/Header.vue";
import NavBar from "@/components/Layout/NavBar.vue";
</script>