<template>
  <n-modal v-model:show="localShow" title="Create New Classroom" :mask-closable="false">
    <div>
      <p>Put your form here later</p>
      <n-button @click="closeModal">Close</n-button>
    </div>
  </n-modal>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['update:show'])

const localShow = ref(props.show)

watch(() => props.show, val => {
  localShow.value = val
})

watch(localShow, val => {
  emit('update:show', val)
})

function closeModal() {
  localShow.value = false
}
</script>
