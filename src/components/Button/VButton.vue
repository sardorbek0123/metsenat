<template>
  <button
    class="bg-blue-300 p-3 rounded-md text-white relative hover:bg-transparent border-[1px] hover:border-blue-300 hover:text-blue-300 duration-300"
  >
    <slot name="label"></slot>
    <slot></slot>
    <span class="absolute animate-ping top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
  </button>
</template>