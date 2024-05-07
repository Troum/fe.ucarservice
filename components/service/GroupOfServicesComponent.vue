<script setup lang="ts">
import type {PropType} from "vue";
import type {GroupInterface} from "~/interfaces/models/GroupInterface";
import GroupCardBody from "~/components/commons/parts/GroupCardBody.vue";

const emits = defineEmits(['select:group', 'unselect:group']);

const props = defineProps({
  group: {
    type: Object as PropType<GroupInterface>,
    required: true
  }
})

function selectUnselectGroup(e: any) {
  const group = e.currentTarget
  if (group.classList.contains('selected')) {
    e.currentTarget.classList.remove('selected')
    emits('unselect:group', props.group?.id)
  } else {
    e.currentTarget.classList.add('selected')
    emits('select:group', props.group?.id)
  }

}

</script>

<template>
  <UCard class="w-[calc((100%/3)-4px*3)] hover:cursor-pointer"
         @click="selectUnselectGroup">
    <GroupCardBody :group="group"/>
  </UCard>
</template>

<style scoped lang="scss">
.selected {
  border: 1px solid #000 !important;
}
</style>