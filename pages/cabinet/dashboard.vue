<script setup lang="ts">

import {useApiService} from "~/services/useApiService";
import ErrorMessage from "~/components/commons/ErrorMessage.vue";
import {useAppStore} from "~/store/useAppStore";
import type {UserInterface} from "~/interfaces/models/UserInterface";
import GroupForm from "~/components/forms/GroupForm.vue";

const { getAllGroups } = useApiService()
const {data:groups, pending, error} = await getAllGroups()
const appStore = useAppStore()

const user = computed((): UserInterface => {
  return appStore.getUser
})

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
    <template v-if="user.company?.groups?.length">

    </template>
    <template v-else>
      <GroupForm :groups="groups" :companyId="user.company?.id"/>
    </template>
  </template>
</div>
</template>

<style scoped lang="scss">

</style>