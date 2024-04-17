<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {type PropType, reactive} from "vue";
// @ts-ignore
import {object, string, number, boolean, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'
import type {Ownership} from "~/interfaces/pages/signup/Ownership";
import {useMode} from "~/composables/useMode";
import {useApiService} from "~/services/useApiService";
import {useRouter} from "vue-router";

defineProps({
  ownerships: {
    type: Array as PropType<Ownership[]> as any,
    required: true
  }
})
const mode = useMode()
const {tm} = useI18n()
const router = useRouter()
const schema = object({
  firstName: string()
      .required(tm('forms.registration.fields.firstName.rules.required')),
  lastName: string()
      .required(tm('forms.registration.fields.lastName.rules.required')),
  surname: string(),
  ownership: number()
      .default(1),
  company: string()
      .required(tm('forms.registration.fields.company.rules.required')),
  agreement: boolean()
      .required(tm('forms.registration.fields.agreement.rules.required')),
  email: string()
      .required(tm('forms.registration.fields.email.rules.required'))
      .email(tm('forms.registration.fields.email.rules.invalid')),
  password: string()
      .min(8, tm('forms.registration.fields.password.rules.min'))
      .required(tm('forms.registration.fields.password.rules.required'))
})

type Schema = InferType<typeof schema>

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  surname: undefined,
  company: undefined,
  agreement: undefined,
  subscription: undefined,
  ownership: undefined,
  email: undefined,
  password: undefined
})
const {signUp} = useApiService()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  await signUp(event.data).then(() => {
    router.push({path: '/cabinet'})
  })
}
</script>

<template>
  <UForm class="xl:w-[65%] 2xl:w-[50%]" :schema="schema" :state="state" @submit="onSubmit">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ $t('forms.registration.title') }}
          </h3>
        </div>
      </template>

      <div class="min-h-32">
        <div
            class="flex xl:flex-wrap xl:items-baseline xl:justify-between xl:gap-y-6 2xl:flex 2xl:flex-row 2xl:gap-x-[5%] 2xl:items-baseline 2xl:justify-center">
          <div class="flex flex-col w-[calc(47.5%-8px)]">
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="firstName">
              <template #label>
                <label class="inline-block mb-4" for="firstName">{{
                    $t('forms.registration.fields.firstName.label')
                  }}</label>
              </template>
              <template #default>
                <UInput id="firstName" size="xl"
                        variant="outline"
                        :placeholder="$t('forms.registration.fields.firstName.placeholder')"
                        v-model="state.firstName"/>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="lastName">
              <template #label>
                <label class="inline-block mb-4"
                       for="lastName">{{ $t('forms.registration.fields.lastName.label') }}</label>
              </template>
              <template #default>
                <UInput id="lastName" size="xl"
                        variant="outline"
                        :placeholder="$t('forms.registration.fields.lastName.placeholder')"
                        v-model="state.lastName"/>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="surname">
              <template #label>
                <label class="inline-block mb-4"
                       for="surname">{{ $t('forms.registration.fields.surname.label') }}</label>
              </template>
              <template #default>
                <UInput id="surname" size="xl" variant="outline"
                        :placeholder="$t('forms.registration.fields.surname.placeholder')"
                        v-model="state.surname"/>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="email">
              <template #label>
                <label class="inline-block mb-4" for="email">{{ $t('forms.registration.fields.email.label') }}</label>
              </template>
              <template #default>
                <UInput id="email" type="email" size="xl" variant="outline"
                        :placeholder="$t('forms.registration.fields.email.placeholder')"
                        v-model="state.email"/>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="password">
              <template #label>
                <label class="inline-block mb-4"
                       for="password">{{ $t('forms.registration.fields.password.label') }}</label>
              </template>
              <template #default>
                <UInput id="password" :placeholder="$t('forms.registration.fields.password.placeholder')" size="xl"
                        variant="outline"
                        v-model="state.password" type="password"/>
              </template>
            </UFormGroup>
          </div>
          <div class="flex flex-col w-[calc(47.5%-8px)]">
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="company">
              <template #label>
                <label class="inline-block mb-4"
                       for="company">{{ $t('forms.registration.fields.company.label') }}</label>
              </template>
              <template #default>
                <UInput id="company" size="xl" variant="outline"
                        :placeholder="$t('forms.registration.fields.company.placeholder')"
                        v-model="state.company"/>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="ownership">
              <template #label>
                <label class="inline-block mb-4"
                       for="ownership">{{ $t('forms.registration.fields.ownership.label') }}</label>
              </template>
              <template #default>
                <USelectMenu id="ownership"
                             :placeholder="$t('forms.registration.fields.ownership.placeholder')"
                             size="xl"
                             variant="outline"
                             value-attribute="id"
                             option-attribute="code"
                             v-model="state.ownership"
                             :options="ownerships">
                </USelectMenu>
              </template>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="agreement">
              <UCheckbox :color="mode.dark ? 'vermilion' : 'woodsmoke'" v-model="state.agreement">
                <template #label>
                  <div v-html="$t('forms.registration.fields.agreement.label')"></div>
                </template>
              </UCheckbox>
            </UFormGroup>
            <UFormGroup class="xl:w-[calc(50%-8px)] 2xl:w-full 2xl:mb-4" name="subscription">
              <UCheckbox :color="mode.dark ? 'vermilion' : 'woodsmoke'" v-model="state.subscription">
                <template #label>
                  <div v-html="$t('forms.registration.fields.subscription.label')"></div>
                </template>
              </UCheckbox>
            </UFormGroup>
            <div class="flex flex-col gap-y-3 justify-center items-center">
              <UButton type="submit"
                       size="xl">
                {{ $t('forms.registration.submit') }}
              </UButton>
              <div class="flex gap-x-2 justify-start items-center text-[12px]">
                <span>{{ $t('forms.registration.has_account') }}</span>
                <ULink class="underline underline-offset-2 dark:text-vermilion-200" to="/sign-in">
                  {{ $t('forms.registration.has_account_link') }}
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UForm>
</template>