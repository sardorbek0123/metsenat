<template>
  <div class="bg-[#FDFDFD]">
    <nav class="container flex justify-between py-5">
      <div class="flex border-2 border-[#E0E7FF] rounded-md">
        <NabTab
            v-for="item in items"
            :item="item"
            :key="item.link"
            :isActive="isTabActive(item.link)"
            class="border-r-2 border-[#E0E7FF] last:border-r-0 first:!rounded-l-[4px] last:!rounded-r-[4px]"
        />
      </div>
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2 p-2.5 bg-gray-600 rounded-md">
          <i class="icon icon-search text-xl text-gray-300"></i>
          <input
              type="text"
              placeholder="Izlash"
              class="placeholder-gray-300 bg-transparent outline-0"
          />
        </div>
        <button class="flex items-center gap-2.5 px-8 py-2 bg-blue-100 rounded-md">
          <i class="icon icon-filter text-blue-700"></i>
          <span class="text-blue-700 font-medium">Filter</span>
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import NabTab from '@/components/Tabs/NabTab.vue'
import {ref} from 'vue'
import {useRoute, useRouter} from "vue-router";

const items = [
  {
    id: 1,
    link: '/admin/dashboard',
    title: 'Dashboard'
  },
  {
    id: 2,
    link: '/admin/sponsors',
    title: 'Homiylar'
  },
  {
    id: 3,
    link: '/admin/students',
    title: 'Talabalar'
  }
]

const route = useRoute()
const router = useRouter()

function isTabActive(tabLink: string): boolean {
  return route.path === tabLink
}

</script>

<style scoped>
body {
  background-color: #f5f5f7;
}
</style>
