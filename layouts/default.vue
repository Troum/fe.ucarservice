<script setup lang="ts">
import Header from "~/components/commons/Header.vue";
import Modal from "~/components/modals/Modal.vue";
import Alert from "~/components/commons/Alert.vue";


</script>

<template>
  <UContainer class="transform transition-all duration-700 relative container w-[100vw] max-w-[100vw] min-h-[100vh] bg-gradient-to-tr from-vermilion-50 to-vermilion-200 dark:bg-gradient-to-b dark:from-woodsmoke-600 dark:to-woodsmoke-900 px-0 lg:px-0 xl:px-0">
    <Header />
    <slot/>
    <Modal />
    <Alert />
  </UContainer>
</template>

<style scoped lang="scss">

</style>