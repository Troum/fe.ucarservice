<script setup lang="ts">

import SignUp from "~/components/forms/SignUp.vue";
import {useAppFetch} from "~/composables/useAppFetch";
import type {Ownership} from "~/interfaces/pages/signup/Ownership";

const {data: ownerships} = await useAppFetch<Ownership[]>('/ownerships')

</script>

<template>
<div class="flex min-h-[100vh] w-full items-center justify-center">
  <SignUp :ownerships="ownerships"/>
</div>
</template>

<style scoped lang="scss">

</style>