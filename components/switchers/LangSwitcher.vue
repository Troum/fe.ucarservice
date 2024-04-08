<script setup lang="ts">
import {useAppStore} from "~/store/useAppStore";

const {locale, setLocale} = useI18n()
const appStore = useAppStore()
function changeLocale(lang: string) {
  setLocale(lang)
  appStore.setLang(lang)
}
</script>

<template>
  <div class="w-[136px] p-[2px] flex gap-0 items-center justify-between border border-[#2F2E34] rounded-[20px] dark:border-[#D65C39]">
    <UButton class="drop-shadow-none w-[65px] h-[32px] px-[20px] py-[3px] bg-transparent text-[#2F2E34] dark:text-white dark:focus:text-white dark:hover:text-[#3C4145] text-center"
             :class="{'bg-[#2F2E34] text-white hover:bg-[#2F2E34] hover:text-white dark:bg-[#D65C39] dark:hover:bg-[#D65C39] dark:hover:text-white': locale === 'ru', 'hover:bg-transparent hover:text-[#3C4145] dark:hover:bg-transparent dark:hover:text-white': locale !== 'ru'}"
             :ui="{rounded: 'rounded-full'}"
             @click="changeLocale('ru')"
             variant="ghost">
      <span class="uppercase">{{ $t('components.langSwitcherComponent.rus') }}</span>
    </UButton>
    <UButton class="drop-shadow-none w-[65px] h-[32px] px-[20px] py-[3px] bg-transparent text-[#2F2E34] dark:text-white dark:focus:text-white dark:hover:text-[#3C4145] text-center"
             :class="{'bg-[#2F2E34] text-white hover:bg-[#2F2E34] hover:text-white dark:bg-[#D65C39] dark:hover:bg-[#D65C39] dark:hover:text-white': locale === 'en', 'hover:bg-transparent hover:text-[#3C4145] dark:hover:bg-transparent dark:hover:text-white': locale !== 'en'}"
             :ui="{rounded: 'rounded-full'}"
             @click="changeLocale('en')"
             variant="ghost">
      <span class="uppercase">{{ $t('components.langSwitcherComponent.eng') }}</span>
    </UButton>
  </div>
</template>

<style scoped lang="scss">

</style>