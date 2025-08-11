<template>
  <div class="container w-[40%] justify-center items-center ">
    <n-config-provider :theme-overrides="themeOverrides">
    <div class=" items-center justify-center">
  <!-- Health Record -->
     <n-card title="Health Record" class="shadow-md">
       <div class="space-y-4">
         <n-select v-model:value="healthStudent" :options="students" placeholder="Select Student" class="w-full" />
         <n-input v-model:value="incidentType" placeholder="Incident Type" class="w-full text-xl" />
         <n-input v-model:value="healthDetail" type="textarea" placeholder="Detail" class="w-full" />
         <n-button size="small" ghost color="#AC1515" class="w-full" @click="submitHealthRecord">Submit</n-button>
       </div>
     </n-card>
      </div>
  </n-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect, NConfigProvider } from 'naive-ui'

const healthStudent = ref(null)
const incidentType = ref('')
const healthDetail = ref('')

function submitHealthRecord() {
  console.log('Health record submitted')
}
const students = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' }
]
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
