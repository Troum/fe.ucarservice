<script setup lang="ts">

import {useAppStore} from "~/store/useAppStore";
import {computed} from "vue";

const appStore = useAppStore()
const dialog = computed({
  get: () => {
    return appStore.getDialog
  },
  set: (value: boolean) => {
    appStore.setDialog({show: value})
  }
})
</script>

<template>
  <UModal v-model="dialog.show">
    <component :is="dialog.data" :dialog="dialog"></component>
  </UModal>
</template>

<style scoped lang="scss">

</style>