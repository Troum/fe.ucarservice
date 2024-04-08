<script setup lang="ts">

import {defineAsyncComponent, markRaw} from "vue"
import {useAppStore} from "~/store/useAppStore";
import ThemeSwitcher from "~/components/switchers/ThemeSwitcher.vue";
import LangSwitcher from "~/components/switchers/LangSwitcher.vue";

const appStore = useAppStore()

function openRegistration() {
  const modalComponent = markRaw(defineAsyncComponent(() => import("~/components/forms/Registration.vue")))
  appStore.setDialog({show: true, data: modalComponent })
}
</script>

<template>
<div class="container h-[72px] flex justify-between items-center fixed z-[10] top-0 left-[50%] translate-x-[-50%]">
  <div class="flex justify-start items-center gap-x-4">
    <ThemeSwitcher />
    <LangSwitcher />
  </div>
  <div class="flex justify-start items-center gap-x-4">
    <UButton :ui="{rounded: 'rounded-full'}"
             class="transition-all border border-[#2F2E34] text-[#2F2E34] hover:bg-[#D65C39] dark:hover:bg-transparent dark:border-[#D65C39] dark:text-[#FFF] px-3 py-2"
             variant="ghost">
      Вход
    </UButton>
    <UButton :ui="{rounded: 'rounded-full'}"
             @click="openRegistration()"
             class="transition-all border border-[#2F2E34] text-[#FFF] bg-[#2F2E34] hover:bg-[#2F2E34] dark:bg-[#D65C39] dark:hover:bg-[rgba(214,92,57,0.75)] dark:border-[#D65C39] dark:text-[#FFF] px-3 py-2"
             variant="ghost">
      Регистрация
    </UButton>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>