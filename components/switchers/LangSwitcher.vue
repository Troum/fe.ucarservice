<script setup lang="ts">
import {useAppStore} from "~/store/useAppStore";

const {locale, setLocale} = useI18n()
const appStore = useAppStore()

function variant(lang: string) {
  return lang === locale.value ? 'soft' : 'ghost'
}
function changeLocale(lang: string) {
  setLocale(lang)
  appStore.setLang(lang)
}
</script>

<template>
  <div
      class="w-[136px] p-[2px] flex gap-0 items-center justify-between border border-woodsmoke-900 rounded-[20px] dark:border-vermilion-200">
    <UButton
        class="w-[65px] h-[32px] px-[20px] py-[3px] text-center"
        :class="{'bg-woodsmoke-900 hover:bg-woodsmoke-900 dark:bg-vermilion-200 dark:hover:bg-vermilion-200 text-vermilion-200 dark:text-woodsmoke-900': locale === 'ru'}"
        :ui="{rounded: 'rounded-full'}"
        @click="changeLocale('ru')"
        :variant="variant('ru')">
      <span class="uppercase">{{ $t('components.langSwitcherComponent.rus') }}</span>
    </UButton>
    <UButton
        class="w-[65px] h-[32px] px-[20px] py-[3px] text-center"
        :class="{'bg-woodsmoke-900 hover:bg-woodsmoke-900 dark:bg-vermilion-200 dark:hover:bg-vermilion-200 text-vermilion-200 dark:text-woodsmoke-900': locale === 'en'}"
        :ui="{rounded: 'rounded-full'}"
        @click="changeLocale('en')"
        :variant="variant('en')">
      <span class="uppercase">{{ $t('components.langSwitcherComponent.eng') }}</span>
    </UButton>
  </div>
</template>

<style scoped lang="scss">

</style>