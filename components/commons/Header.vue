<script setup lang="ts">
import {useLoggedIn} from "~/composables/useLoggedIn";
import {useApiService} from "~/services/useApiService";
import {useAppStore} from "~/store/useAppStore";
import {useRoute, useRouter} from "vue-router";
import ThemeSwitcher from "~/components/switchers/ThemeSwitcher.vue";
import LangSwitcher from "~/components/switchers/LangSwitcher.vue";
import Logo from "~/components/commons/Logo.vue";
import Menu from "~/components/commons/Menu.vue";

const {signOut} = useApiService()
const isLoggedIn = useLoggedIn()
const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const isCabinet = computed((): boolean => {
  return route.path.includes('cabinet')
})
async function logout() {
  await signOut()
      .then(() => {
        appStore.setToken(null)
      })
      .then(() => {
        appStore.setUser(null)
      })
      .then(() => {
        router.push({path: "/sign-in"})
      })
}

</script>

<template>
  <div class="container w-[100vw] max-w-[100vw] h-[72px] flex justify-between items-center fixed z-[10] top-0 left-[50%] translate-x-[-50%] px-8 py-2"
       :class="{'border-b border-woodsmoke-900 dark:border-vermilion-200': isCabinet}">
    <div class="flex justify-start items-center gap-x-4">
      <ThemeSwitcher/>
      <template v-if="false">
        <LangSwitcher/>
      </template>
    </div>
    <ULink to="/" class="absolute top-[2.5%] left-[50%] translate-x-[-50%] ">
      <Logo class="max-w-[80px] text-woodsmoke-900 dark:text-vermilion-200"/>
    </ULink>
    <div class="flex justify-start items-center gap-x-4">
      <template v-if="isLoggedIn">
        <Menu />
        <UButton :ui="{rounded: 'rounded-full'}"
                 @click="logout"
                 size="xl"
                 variant="outline">
          Выход
        </UButton>
      </template>
      <template v-else>
        <UButton :ui="{rounded: 'rounded-full'}"
                 to="/sign-in"
                 size="xl"
                 variant="outline">
          Вход
        </UButton>
        <UButton :ui="{rounded: 'rounded-full'}"
                 size="xl"
                 to="/sign-up">
          Регистрация
        </UButton>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>