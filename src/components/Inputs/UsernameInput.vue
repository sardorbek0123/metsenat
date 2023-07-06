<template>
  <input
      v-model="login"
      name="login"
      type="text"
      minlength="5"
      required
      placeholder="admin"
      class="bg-gray-200/20 text-[15px] rounded-md border-2 border-[#E0E7FF] outline-0 p-2 ring-0"
  />
</template>

<script setup lang="ts">
import {ref, defineEmits, watch} from 'vue';

// const emit = defineEmits<{
//   (e: "up", val):void
// }>()
// defineEmits(['update:login']);
//
// const login = ref('');
//
// watch(login, (value) => {
//   emit('update:login', value);
// });
</script>
