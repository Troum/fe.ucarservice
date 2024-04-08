<script setup lang="ts">
import {useMode} from "~/composables/useMode";

const mode = useMode()

watch(mode, () => console.log(mode.value))

</script>

<template>
  <div class="grid grid-cols-1 grid-rows-1">
    <h1 class="absolute top-[19%] left-[50%] translate-x-[-50%] font-semibold text-white text-[4rem] z-[0] leading-[4rem] drop-shadow-md">
      Сделай свой автосервис максимально эффективным с <strong class="text-[#2F2E34] dark:text-[#D65C39] font-black">UCarService</strong>
    </h1>
    <div class="transform transition-all col-span-1 row-span-1 z-[1]" :class="{'mix-blend-overlay': mode.dark}">
      <template v-if="mode.dark">
        <img class="w-full h-auto" src="/assets/images/car_dark.png" alt="Car">
      </template>
      <template v-else>
        <img class="w-full h-auto" src="/assets/images/car_light.png" alt="Car">
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>