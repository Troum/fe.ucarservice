<script setup lang="ts">
import type {PropType} from "vue";
import type {GroupInterface} from "~/interfaces/models/GroupInterface";

defineProps({
  group: {
    type: Object as PropType<GroupInterface>,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center justify-center flex-wrap gap-4">
    <div class="text-woodsmoke-900 dark:text-vermilion-200" v-html="group.icon"></div>
    <span class="text-[22px] leading-[20px] text-woodsmoke-900 dark:text-vermilion-200 font-light text-center">{{ group.name }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>