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
      class="w-[74px] p-[2px] flex gap-x-[6px] items-center justify-between border border-[#2F2E34] rounded-[20px] dark:border-[#D65C39]">
    <div class="flex items-center justify-center rounded-full w-[28px] h-[28px]" :class="{'bg-[#2F2E34]': mode.light}">
      <UIcon
          class="transition-all w-[18px] h-[18px] text-[#FFF] dark:text-[#FFF] dark:hover:text-[#FFF]"
          :class="{'text-white': mode.light}"
          @click="switchTheme('light')"
          role="button"
          name="i-heroicons-sun"/>
    </div>
    <div class="flex items-center justify-center rounded-full w-[28px] h-[28px]" :class="{'bg-[#D65C39]': mode.dark}">
      <UIcon
          class="transition-all w-[18px] h-[18px] text-[#2F2E34] hover:text-[#3C4145] dark:hover:text-white dark:text-white"
          :class="{'dark:text-white': mode.dark}"
          @click="switchTheme('dark')"
          role="button"
          name="i-heroicons-moon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>