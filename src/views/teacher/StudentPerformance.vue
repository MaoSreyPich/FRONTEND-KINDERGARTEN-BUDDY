<template>
    <n-config-provider :theme-overrides="themeOverrides">
    <div class="  items-center justify-center">
  <!-- Student Performance -->
  <n-card title="Student Performance Report" class="shadow-md">
    <div class="space-y-4">
      <n-select v-model:value="selectedStudent" :options="studentOptions" placeholder="Select Student" class="w-full" />
      <n-input v-model:value="term" placeholder="Term" class="w-full text-xl" />
      <!-- Subject block -->
      <div class="w-full border p-4 rounded-md space-y-4">
        <n-input v-model:value="subjectName" placeholder="Subject Name" class="w-full text-xl" />
        <n-input v-model:value="progress" placeholder="Progress" class="w-full text-xl" />
        <n-button size="small" ghost class="w-full" @click="createMoreSubject">Create More Subject</n-button>
      </div>
      <n-input v-model:value="finalComment" type="textarea" placeholder="Final Comment" class="w-full" />
      <n-button size="small" ghost color="#AC1515" @click="submitStudentPerformance" class="w-full">Submit</n-button>
    </div>
  </n-card>
      </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect, NConfigProvider } from 'naive-ui'

const selectedStudent = ref(null)
const students = [
  { label: 'Existing Student', value: 'existing' },
  { label: 'New Student', value: 'new' }
]
const studentOptions = students

const term = ref('')
const subjectName = ref('')
const progress = ref('')
const finalComment = ref('')

function submitStudentPerformance() {
  console.log('Performance submitted')
}

function createMoreSubject() {
  console.log('More subject added:', subjectName.value, progress.value)
}


const themeOverrides = {
  Input: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black'
  },
  Select: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black'
  }
}
</script>

<style scoped>
:deep(.n-input:hover .n-input__state-border),
:deep(.n-input:focus-within .n-input__state-border),
:deep(.n-select:hover .n-base-selection .n-base-selection__border),
:deep(.n-select:focus-within .n-base-selection .n-base-selection__border) {
  border-color: black !important;
  box-shadow: 0 0 0 1px black !important;
  border-width: 1px;
  border-radius: 6px;
}
</style>
