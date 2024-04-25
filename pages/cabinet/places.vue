<script setup lang="ts">
import {ref} from "vue"

const links = [
  {
    label: 'Создать',
    icon: 'i-heroicons-plus',
    to: '/cabinet/places/create'
  },
  {
    label: 'Список',
    icon: 'i-heroicons-list-bullet',
    to: '/cabinet/places/list'
  }
]
const services = ref<any[]>([])

</script>

<template>
  <div class="cabinet">
    <div class="aside">
      <UVerticalNavigation :links="links"></UVerticalNavigation>
    </div>
    <div class="main">
      <NuxtPage :page-key="route => route.fullPath"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>