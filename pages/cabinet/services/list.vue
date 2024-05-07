<script setup lang="ts">
import {computed} from "vue";
import {useApiService} from "~/services/useApiService";
import {useAppStore} from "~/store/useAppStore";
import type {UserInterface} from "~/interfaces/models/UserInterface";
import ErrorMessage from "~/components/commons/ErrorMessage.vue";
import GroupCardBody from "~/components/commons/parts/GroupCardBody.vue";
import PageHeading from "~/components/commons/parts/PageHeading.vue";
import {useTranslation} from "~/composables/useTranslation";

const appStore = useAppStore()

const user = computed((): UserInterface => {
  return appStore.getUser
})
const {getCompanyGroups} = useApiService()
const {data: groups, pending, error} = await getCompanyGroups(user.value.company?.id)

</script>

<template>
  <div class="flex page py-4">
    <template v-if="error">
      <ErrorMessage/>
    </template>
    <template v-else-if="pending">
      <UProgress/>
    </template>
    <template v-else>
      <div class="flex flex-col gap-y-12">
        <PageHeading :title="useTranslation('pages.cabinet.services.list.heading.title')"
                     :description="useTranslation('pages.cabinet.services.list.heading.description')"
        />
        <template v-for="group of groups">
          <div class="flex items-center justify-start gap-x-8">
            <UCard class="min-w-[250px] max-w-[250px]">
              <GroupCardBody :group="group"/>
            </UCard>
            <template v-for="service of group.services">
              <UCard class="h-[90%] hover:cursor-pointer">
                <div class="flex flex-col justify-center items-baseline">
                  <p class="text-[16px] dark:text-vermilion-200 font-bold">{{ service.name }}</p>
                  <p class="text-[14px] dark:text-vermilion-200">{{ service.description }}</p>
                </div>
              </UCard>
            </template>
          </div>
        </template>
      </div>
      <div></div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>