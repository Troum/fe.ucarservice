<script setup lang="ts">
import {computed} from "vue";

const colorMode = useColorMode()

const mode = computed(() => {
  return {
    dark: colorMode.value === 'dark',
    light: colorMode.value === 'light'
  }
})

function switchTheme(mode: string) {
  colorMode.preference = mode
}

</script>

<template>
  <div
      class="w-[74px] p-[2px] flex gap-x-[6px] items-center justify-between border border-woodsmoke-900 rounded-[20px] dark:border-vermilion-200">
    <div class="flex items-center justify-center rounded-full w-[28px] h-[28px]" :class="{'bg-woodsmoke-900': mode.light}">
      <UIcon
          class="transition-all w-[18px] h-[18px] text-vermilion-200"
          @click="switchTheme('light')"
          role="button"
          name="i-heroicons-sun"/>
    </div>
    <div class="flex items-center justify-center rounded-full w-[28px] h-[28px]" :class="{'bg-vermilion-200': mode.dark}">
      <UIcon
          class="transition-all w-[18px] h-[18px] text-woodsmoke-900 hover:text-woodsmoke-900 dark:hover:text-woodsmoke-900 dark:text-woodsmoke-900"
          @click="switchTheme('dark')"
          role="button"
          name="i-heroicons-moon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>