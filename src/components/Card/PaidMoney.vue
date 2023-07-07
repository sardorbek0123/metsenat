<template>
  <div class="flex p-6 gap-4 bg-white rounded-xl">
    <div class="px-2 py-1.5 rounded-xl" :class="bgColor">
      <i class="icon icon-cash text-3xl" :class="textColor"></i>
    </div>
    <div>
      <h4 class="text-gray-700 text-xs">{{ title }}</h4>
      <p class="text-blue-600 font-bold text-xl">
        {{ amount }}
        <span class="text-gray-500"> {{ currency }}</span>
      </p>
      <p v-if="subtitle" class="text-gray-700">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: {
    type: String,
    default: ''
  },
  amount: String,
  currency: String,
  bgColor: String,
  textColor: String
});
</script>
