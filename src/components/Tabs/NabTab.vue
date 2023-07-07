<template>
  <router-link :to="item.link" :class="{ 'bg-[#36F]': isActive }">
    <div class="py-3 px-[54px]">
      <p class="uppercase text-blue-200/60 text-xs" :class="{'!text-white': isActive}">{{ item.title }}</p>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
interface Props {
  item: {
    link: string
    title: string
  }
  isActive: boolean
}

defineProps<Props>()
</script>