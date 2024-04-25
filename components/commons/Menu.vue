<script setup lang="ts">
import _ from "lodash"
import {computed} from "vue";
import {useAppStore} from "~/store/useAppStore";
const appStore = useAppStore()

const user = computed(() => {
  return appStore.getUser
})

const links = [
  {
    label: 'Кабинет',
    icon: 'i-heroicons-chart-bar',
    to: '/cabinet/dashboard',
    show: true
  },
  {
    label: 'Услуги',
    icon: 'i-heroicons-wrench-screwdriver',
    to: '/cabinet/services/list',
    show: user.value.company
  }, {
    label: 'Места',
    icon: 'i-heroicons-map-pin',
    to: '/cabinet/places/list',
    show: user.value.company
  }, {
    label: 'Работники',
    icon: 'i-heroicons-user-group',
    to: '/cabinet/employees/list',
    show: user.value.company
  }
]
</script>

<template>
  <div class="flex flex-row gap-x-6 justify-end items-center">
    <template v-for="(link, index) of links">
      <template v-if="link.show">
        <div class="flex items-center justify-start gap-x-2">
          <UIcon class="text-woodsmoke-900 dark:text-vermilion-200" :name="link.icon"/>
          <ULink active-class="link-active" :to="link.to"
                 class="link">
            {{ link.label }}
          </ULink>
        </div>
        <template v-if="index !== _.findLastIndex(links)">
          <span class="text-woodsmoke-900 dark:text-vermilion-200">/</span>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>