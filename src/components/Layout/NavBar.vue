<template>
  <div class="bg-[#FDFDFD]">
    <nav class="container flex justify-between py-5">
      <div class="flex border-2 border-[#E0E7FF] rounded-md"
      >
        <NabTab v-for="item in items" :item=item
                class="border-r-2 border-[#E0E7FF] last:border-r-0"

                @click="activateTab"
        />
      </div>
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2 p-2.5 bg-gray-600 rounded-md">
          <i class="icon icon-search text-xl text-gray-300"></i>
          <input type="text" placeholder="Izlash" class="placeholder-gray-300 bg-transparent outline-0">
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
import NabTab from "@/components/Tabs/NabTab.vue";
import {ref} from "vue";

const items = [
  {
    link: '/admin/dashboard',
    title: 'Dashboard'
  },
  {
    link: '/admin/sponsors',
    title:'Homiylar'
  },
  {
    link: '/admin/students',
    title:'Talabalar'
  }
]
const isActive = ref(false)

function activateTab() {

}
</script>

<style scoped>
body {
  background-color: #F5F5F7;
}
</style>