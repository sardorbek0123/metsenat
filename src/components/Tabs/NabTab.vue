<template>
  <router-link :to="item.link" :class="{ 'bg-[#36F]': isActive }">
    <div class="py-4 px-[54px]">
      <p class="uppercase text-blue-200/60" :class="{'!text-white': isActive}">{{ item.title }}</p>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

interface Props {
  item: {
    link: string
    title: string
  }
  isActive: boolean
}

const props = defineProps<Props>()
</script>