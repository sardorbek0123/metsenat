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
      <div>
        <input type="text" placeholder="Izlash">
        <button>
          <i class="icon icon-filter"></i>
          Filter
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
    title:'Talabalar}'
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