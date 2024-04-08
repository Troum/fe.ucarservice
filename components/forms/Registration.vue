<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {reactive} from "vue";
// @ts-ignore
import {object, string, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'

defineProps(['dialog'])

const {tm} = useI18n()

const schema = object()

type Schema = InferType<typeof schema>

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  surname: undefined,
  company: undefined,
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>

  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Регистрация
          </h3>
          <UButton color="gray"
                   variant="ghost"
                   icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="dialog.show = false"/>
        </div>
      </template>

      <div class="min-h-32">
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <UFormGroup class="w-full" name="firstName">
            <template #label>
              <label class="inline-block mb-4" for="firstName">{{
                  $t('forms.registration.fields.firstName.label')
                }}</label>
            </template>
            <template #default>
              <UInput id="firstName" size="xl" :placeholder="$t('forms.registration.fields.firstName.placeholder')"
                      v-model="state.firstName"/>
            </template>
          </UFormGroup>
          <UFormGroup class="w-full" name="lastName">
            <template #label>
              <label class="inline-block mb-4" for="lastName">{{ $t('forms.registration.fields.lastName.label') }}</label>
            </template>
            <template #default>
              <UInput id="lastName" size="xl" :placeholder="$t('forms.registration.fields.lastName.placeholder')"
                      v-model="state.lastName"/>
            </template>
          </UFormGroup>
          <UFormGroup class="w-full" name="surname">
            <template #label>
              <label class="inline-block mb-4" for="surname">{{ $t('forms.registration.fields.surname.label') }}</label>
            </template>
            <template #default>
              <UInput id="surname" size="xl" :placeholder="$t('forms.registration.fields.surname.placeholder')"
                      v-model="state.surname"/>
            </template>
          </UFormGroup>
          <UFormGroup class="w-full mb-4" name="email">
            <template #label>
              <label class="inline-block mb-4" for="email">{{ $t('forms.registration.fields.email.label') }}</label>
            </template>
            <template #default>
              <UInput id="email" type="email" size="xl" :placeholder="$t('forms.registration.fields.email.placeholder')"
                      v-model="state.email"/>
            </template>
          </UFormGroup>

          <UFormGroup class="w-full mb-4" name="password">
            <template #label>
              <label class="inline-block mb-4" for="password">{{ $t('forms.registration.fields.password.label') }}</label>
            </template>
            <template #default>
              <UInput id="password" :placeholder="$t('forms.registration.fields.password.placeholder')" size="xl"
                      v-model="state.password" type="password"/>
            </template>
          </UFormGroup>
          <UDivider class="my-4" :label="$t('forms.registration.divider')"></UDivider>
          <UFormGroup class="w-full mb-4" name="company">
            <template #label>
              <label class="inline-block mb-4" for="company">{{ $t('forms.registration.fields.company.label') }}</label>
            </template>
            <template #default>
              <UInput id="company" size="xl" :placeholder="$t('forms.registration.fields.company.placeholder')"
                      v-model="state.company"/>
            </template>
          </UFormGroup>
        </div>
      </div>
      <template #footer>
        <UButton type="submit"
                 size="xl"
                 class="transition-all w-full rounded-full flex justify-center items-center text-[#FFF] bg-[#2F2E34] hover:bg-[rgba(47,46,52,0.75)] dark:bg-[#D65C39] dark:hover:bg-[rgba(214,92,57,0.75)] border border-[#2F2E34] dark:border-[#D65C39]">
          <span class="text-white">{{ $t('forms.registration.submit') }}</span>
        </UButton>
      </template>
    </UCard>
  </UForm>
</template>