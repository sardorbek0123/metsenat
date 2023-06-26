<template>
  <RouterView v-slot=" {Component}">
    <Component :is="detectLayout">
      <Component :is="Component"/>
    </Component>
  </RouterView>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import LError from "@/layout/LError.vue";
import {computed} from "vue";
import LAuth from "@/layout/LAuth.vue";
import LDefault from "@/layout/LDefault.vue";

const route = useRoute()

const layouts: {[key: string]: any} ={
  default: LDefault,
  auth: LAuth,
  error: LError
}

const detectLayout = computed(() => {
  return layouts[route.meta.layout as string]
})
</script>