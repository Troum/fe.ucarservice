<script setup lang="ts">

import {useTranslation} from "~/composables/useTranslation";
import PageHeading from "~/components/commons/parts/PageHeading.vue";
</script>

<template>
  <div class="flex page py-4">
    <div class="flex flex-col gap-y-12">
      <PageHeading :title="useTranslation('pages.cabinet.services.create.heading.title')"
                   :description="useTranslation('pages.cabinet.services.create.heading.description')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>