<script setup lang="ts">

import ThemeSwitcher from "~/components/switchers/ThemeSwitcher.vue";
import LangSwitcher from "~/components/switchers/LangSwitcher.vue";
import {useLoggedIn} from "~/composables/useLoggedIn";
import {useApiService} from "~/services/useApiService";
import {useAppStore} from "~/store/useAppStore";
import {useRouter} from "vue-router";

const {signOut} = useApiService()
const isLoggedIn = useLoggedIn()
const appStore = useAppStore()
const router = useRouter()

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
  <div class="container h-[72px] flex justify-between items-center fixed z-[10] top-0 left-[50%] translate-x-[-50%]">
    <div class="flex justify-start items-center gap-x-4">
      <ThemeSwitcher/>
      <template v-if="false">
        <LangSwitcher/>
      </template>
    </div>
    <div class="flex justify-start items-center gap-x-4">
      <template v-if="isLoggedIn">
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