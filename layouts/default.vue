<script setup lang="ts">
import {ref} from "vue";
import type {BubbleInterface} from "~/interfaces/components/BubbleInterface";
import Header from "~/components/commons/Header.vue";
import Bubbles from "~/components/commons/bubbles/Bubbles.vue";
import Modal from "~/components/modals/Modal.vue";

const bubbles = ref<BubbleInterface[]>([
  {
    name: 'one',
    background: 'radial-gradient(circle at center, rgba(255,0,187, 0.8) 0%, rgba(100,0,255,0) 50%) no-repeat'
  },
  {
    name: 'two',
    background: 'radial-gradient(circle at center, rgba(131,58,180, 0.8) 0%, rgba(252,176,69, 0) 50%) no-repeat'
  }
])

</script>

<template>
  <div class="transform transition-all duration-700 relative container w-[100vw] max-w-[100vw] min-h-[100vh] bg-gradient-to-tr from-[#FF3F00] to-[#701B07] dark:bg-gradient-to-b dark:from-[#2F2E34] dark:to-[#090909]">
    <Bubbles :bubbles="bubbles"/>
    <Header />
    <slot/>
    <Modal />
  </div>
</template>

<style scoped lang="scss">

</style>