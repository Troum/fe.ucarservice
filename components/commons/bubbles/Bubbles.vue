<script setup lang="ts">
import type {PropType, StyleValue} from "vue";
import type {BubbleInterface} from "~/interfaces/components/BubbleInterface";
import {onMounted} from "vue";
import gsap from "gsap";
import {useWindowSize} from "@vueuse/core";

const {width, height} = useWindowSize()

const props = defineProps({
  bubbles: {
    type: Array as PropType<BubbleInterface[]>
  },
  circleSize: {
    type: String,
    default: '80%'
  }
})

function bubbleStyle(bubble: BubbleInterface): StyleValue {
  return {
    background: bubble.background,
    position: 'absolute',
    width: `${props.circleSize}`,
    mixBlendMode: 'hard-light',
    height: `${props.circleSize}`,
    top: `calc(${Math.floor(Math.random() * (height.value / 25)) + 1}% - ${props.circleSize} / 2)`,
    left: `calc(${Math.floor(Math.random() * (width.value / 25)) + 1}% - ${props.circleSize} / 2 + ${Math.floor(Math.random() * 25) + 1}%)`,
  }
}

onMounted(() => {
  gsap.to('.bubble', {
        keyframes: [
          {x: Math.floor(Math.random() * (width.value / 25)) + 1, duration: 5, ease: 'sine.out'},
          {y: Math.floor(Math.random() * (height.value / 25)) + 1, duration: 5},
        ],
        repeat: -1,
        ease: 'expo.inOut',
        yoyo: true,
        stagger: 1
      }
  )

})

</script>

<template>
  <div class="bubbles-container">
    <template v-for="bubble of bubbles">
      <div :class="`bubble bubble-${bubble.name}`"
           :style="bubbleStyle(bubble)"></div>
    </template>
  </div>
</template>

<style scoped lang="scss">

:root {
  --blending: hard-light;
}

@media (prefers-color-scheme: light) {
  .bubbles-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>