<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: 'Произошла ошибка. Попробуйте перезагрузить страницу'
  }
})
</script>

<template>
<div class="absolute flex flex-col items-center justify-center h-[10vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
  <span class="text-[2rem] font-light font-sans text-woodsmoke-900 dark:text-vermilion-200">{{ message }}</span>
</div>
</template>

<style scoped lang="scss">

</style>