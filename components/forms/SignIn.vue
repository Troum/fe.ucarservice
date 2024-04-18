<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {reactive} from "vue";
// @ts-ignore
import {object, string, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'
import {useApiService} from "~/services/useApiService";
import {useRouter} from "vue-router";

defineProps(['dialog'])

const {tm} = useI18n()
const {signIn} = useApiService()
const router = useRouter()

const schema = object({
  email: string()
      .required(tm('forms.registration.fields.email.rules.required'))
      .email(tm('forms.registration.fields.email.rules.invalid')),
  password: string()
      .min(8, tm('forms.registration.fields.password.rules.min'))
      .required(tm('forms.registration.fields.password.rules.required'))
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await signIn(event.data).then(() => {
    router.push({path: '/cabinet/dashboard'})
  })
}
</script>

<template>

  <UForm :schema="schema" :state="state" class="space-y-4 xl:w-[30%] 2xl:w-[25%]" @submit="onSubmit">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ $t('forms.login.title') }}
          </h3>
          <UButton color="gray"
                   variant="ghost"
                   icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="dialog.show = false"/>
        </div>
      </template>

      <div class="min-h-32">
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <UFormGroup class="w-full mb-4" name="email">
            <template #label>
              <label class="inline-block mb-4" for="email">{{ $t('forms.login.fields.email.label') }}</label>
            </template>
            <template #default>
              <UInput id="email" type="email" size="xl" :placeholder="$t('forms.login.fields.email.placeholder')"
                      v-model="state.email"/>
            </template>
          </UFormGroup>

          <UFormGroup class="w-full mb-4" name="password">
            <template #label>
              <label class="inline-block mb-4" for="password">{{ $t('forms.login.fields.password.label') }}</label>
            </template>
            <template #default>
              <UInput id="password" :placeholder="$t('forms.login.fields.password.placeholder')" size="xl"
                      v-model="state.password" type="password"/>
            </template>
          </UFormGroup>
        </div>
      </div>
      <template #footer>
        <div class="flex flex-col gap-y-3 justify-center items-center">
          <UButton type="submit"
                   size="xl">
            {{ $t('forms.login.submit') }}
          </UButton>
          <div class="flex gap-x-2 justify-start items-center text-[12px]">
            <span>{{ $t('forms.login.no_account') }}</span>
            <ULink class="underline underline-offset-2 dark:text-vermilion-200" to="/sign-up">
              {{ $t('forms.login.no_account_link') }}
            </ULink>
          </div>
        </div>
      </template>
    </UCard>
  </UForm>
</template>