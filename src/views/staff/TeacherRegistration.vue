<template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">
   <!-- Teacher Registration-->
      <n-card title="Teacher Registration" class="shadow-md">
      <div class="space-y-4">
          <n-select v-model:value="selectedTeacherRegistrationStaffID" :options="staffidteacher" placeholder="Existing Staffs" class=" w-full"/>
          <n-input v-model:value="role" placeholder="Role in Class" class=" w-full  text-xl" /><br>
          <n-select v-model:value="selectedTeacherRegistrationClassassignment" :options="classassignmentteacher" placeholder="Existing Classes" class=" w-full"/>
          <label for="qualificationsTeacher" class="block mb-2 text-sm font-medium text-black-700">Qualifications:</label>
          <input type="file" id="qualificationsTeacher" accept="image/*,.pdf,.doc,.docx" multiple @change="handleTeacherUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewTeacher" :key="idx" :src="src" alt="Teacher Preview" class="max-w-xs" /></div><br>
          <n-button size="small" ghost color="#AC1515" @click="submitTeacherRegisterReport">Register</n-button>
      </div>
      </n-card>
    </div>
      </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'

const selectedTeacherRegistrationStaffID = ref(null)
const role = ref('')
const selectedTeacherRegistrationClassassignment = ref(null)
const previewTeacher = ref([])

function handleMultipleFilePreview(files, previewRef) {
  previewRef.value = []
  Array.from(files).forEach(file => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => {
        previewRef.value.push(reader.result)
      }
      reader.readAsDataURL(file)
    }
  })
}
const handleTeacherUpload = (e) => handleMultipleFilePreview(e.target.files, previewTeacher)

const staffidteacher = [
  { label: 'Staff A', value: 'staffA' },
  { label: 'Staff B', value: 'staffB' },
  { label: 'Staff C', value: 'staffC' }
]
const classassignmentteacher = [
  { label: 'Class 1', value: 'class1' },
  { label: 'Class 2', value: 'class2' },
  { label: 'Class 3', value: 'class3' }
]

const submitTeacherRegisterReport = () => {
  console.log('Teacher Registration Report Submitted:', selectedTeacherRegistrationStaffID.value, role.value, selectedTeacherRegistrationClassassignment.value)
}
</script>