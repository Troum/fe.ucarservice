<script setup lang="ts">
import {useApiService} from "~/services/useApiService";
import ErrorMessage from "~/components/commons/ErrorMessage.vue";

const { getAllGroups } = useApiService()
const {data:groups, pending, error} = await getAllGroups()

</script>

<template>
<div class="flex page items-center justify-center">
  <template v-if="error">
    <ErrorMessage />
  </template>
  <template v-else-if="pending">
    <UProgress />
  </template>
  <template v-else>
    <div class="w-[50%] flex flex-wrap items-center gap-4">
      <template v-for="group of groups">
        <UCard :class="`w-[calc((100%/3)-4px*3)]`">
          <div class="flex items-center gap-x-4 h-[20vh]">
            <div class="text-woodsmoke-900 dark:text-vermilion-200" v-html="group.icon"></div>
            <span class="text-2xl text-woodsmoke-900 dark:text-vermilion-200 font-light">{{ group.name }}</span>
          </div>
        </UCard>
      </template>
      <UCard :class="`w-[calc((100%/3)-4px*3)]`">
        <div class="flex items-center gap-x-4 h-[20vh]">
          <div class="text-woodsmoke-900 dark:text-vermilion-200 w-[48px] h-[48px] flex items-center justify-center rounded-full border border-woodsmoke-900 dark:border-vermilion-200">
            <UIcon name="i-heroicons-plus"></UIcon>
          </div>
          <span class="text-2xl text-woodsmoke-900 dark:text-vermilion-200 font-light">Добавить свой вариант</span>
        </div>
      </UCard>
    </div>
  </template>

</div>
</template>

<style scoped lang="scss">

</style>