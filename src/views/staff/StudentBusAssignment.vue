<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="items-center justify-center">
      <!-- student assignment to bus -->
      <n-card title="Student Assignment to Bus" class="shadow-md">
        <div class="space-y-4">
          <n-select v-model:value="selectedStudent" :options="studentstobus" placeholder="Select Student" class="w-full" />
          <n-select v-model:value="selectedBus" :options="busnumber" placeholder="Select Bus" class="w-full" />
          <n-button size="small" ghost color="#AC1515" @click="submitStudentBusAssignmentReport" class="w-full">Submit</n-button>
        </div>
      </n-card>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'

const selectedStudent = ref(null)
const selectedBus = ref(null)

const studentstobus = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' }
]

const busnumber = [
  { label: 'Bus 101', value: 'bus101' },
  { label: 'Bus 102', value: 'bus102' },
  { label: 'Bus 103', value: 'bus103' }
]

const submitStudentBusAssignmentReport = () => {
  console.log('Student Bus Assignment Report Submitted:', selectedStudent.value, selectedBus.value)
}

</script>

<style>


</style>
