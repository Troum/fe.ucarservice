<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {type PropType, reactive} from "vue";
// @ts-ignore
import {object, array, string, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'
import {useApiService} from "~/services/useApiService";
import {useRouter} from "vue-router";
import GroupOfServicesComponent from "~/components/service/GroupOfServicesComponent.vue";
import CustomGroupOfServicesComponent from "~/components/service/CustomGroupOfServicesComponent.vue";
import type {GroupInterface} from "~/interfaces/models/GroupInterface";

const props = defineProps({
  groups: {
    type: Array as PropType<GroupInterface[]>,
    required: true
  },
  companyId: {
    type: Number as PropType<number|undefined>,
    required: true
  }
})

const {tm} = useI18n()
const {updateCompanyGroups} = useApiService()
const router = useRouter()

const schema = object({
  groupsIds: array()
      .required(tm('forms.group.fields.groupIds.rules.required')),
  action: string()
})

type Schema = InferType<typeof schema>

const state = reactive({
  groupsIds: [] as number[],
  action: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  event.data.action = 'attach'

  await updateCompanyGroups(event.data, props.companyId).then(() => {
    router.push({path: '/cabinet/dashboard'})
  })
  console.log(event.data)
}

function selectGroup(id: number|any) {
  state.groupsIds.push(id)
}
function removeGroup(id: number) {
  state.groupsIds.splice(state.groupsIds.indexOf(id), 1)
}

</script>

<template>

  <UForm :schema="schema" :state="state" class="flex flex-col items-center gap-y-12" @submit="onSubmit">
    <h1 class="text-3xl font-light">{{ $t('forms.group.title') }}</h1>
    <div class="w-[50%] flex flex-wrap items-center gap-4">
      <template v-for="group of groups">
        <GroupOfServicesComponent :group="group"
                                  @unselect:group="removeGroup"
                                  @select:group="selectGroup"/>
      </template>
      <CustomGroupOfServicesComponent />
    </div>
    <template v-if="state.groupsIds.length">
      <UButton variant="outline" class="rounded-full px-4" type="submit">
        <span class="text-[18px] font-light">{{ $t('forms.group.submit') }}</span>
      </UButton>
    </template>
  </UForm>
</template>