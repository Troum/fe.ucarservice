<script setup lang="ts">
import {ref} from "vue"
import {useRoute} from "vue-router";
const route = useRoute()

const links = [
  {
    label: 'Создать',
    icon: 'i-heroicons-plus',
    to: '/cabinet/employees/create'
  },
  {
    label: 'Список',
    icon: 'i-heroicons-list-bullet',
    to: '/cabinet/employees/list'
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
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>