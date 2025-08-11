<template>
    <n-config-provider :theme-overrides="themeOverrides">
    <div class="  items-center justify-center">
    <!-- Upload Class Schedule -->
   <n-card title="Upload Class Schedule" class="shadow-md">
     <div class="space-y-4">
       <input type="file" id="classScheduleUpload" accept="image/*,.pdf" multiple @change="handleClassScheduleUpload"
         class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
       <p class="text-sm font-medium text-black-700">Image Preview:</p>
       <div class="flex flex-wrap gap-2">
         <img v-for="(src, idx) in previewSchedule" :key="idx" :src="src" alt="Schedule Preview" class="max-w-xs rounded border" />
       </div><br>
       <n-button size="small" ghost color="#AC1515" @click="submitScheduleUpload">Upload</n-button>
     </div>
   </n-card>
      </div>
  </n-config-provider>
</template>
<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect, NConfigProvider } from 'naive-ui'

// Preview for Upload Class Schedule
const previewSchedule = ref([])
function handleClassScheduleUpload(event) {
  previewSchedule.value = []
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewSchedule.value.push(e.target.result)
    }
    reader.readAsDataURL(files[i])
  }
}
function submitScheduleUpload() {
  console.log('Uploading schedule:', previewSchedule.value)
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
