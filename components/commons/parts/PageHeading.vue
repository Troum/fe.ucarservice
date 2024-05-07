<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<template>
  <div>
    <h1 class="text-[24px] dark:text-vermilion-200 font-light">
      {{ title }}
    </h1>
    <h2 class="text-[18px] dark:text-vermilion-200 font-light">
      {{ description }}
    </h2>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>