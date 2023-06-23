<template>
  <router-link :to="item?.link">
    <div class="py-4 px-[54px]">
      <p class="uppercase">{{item.title}}</p>
    </div>
  </router-link>
</template>

<script lang="ts" setup>

interface Props {
  item: [
    {
      link: string,
      title: string
    }
  ]
}
const props = defineProps<Props>()

</script>