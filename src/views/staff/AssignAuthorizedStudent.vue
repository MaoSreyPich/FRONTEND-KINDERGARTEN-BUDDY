<template>
    <n-config-provider :theme-overrides="themeOverrides">
    <div class=" items-center justify-center">
      <!-- Authorized Person Assignment to Student-->
       <n-card title="Authorized Person Assignment to Student" class="shadow-md">
          <div class="space-y-4">
             <n-select v-model:value="selectedStudent" :options="students" placeholder="Select Students" class=" w-full"/>
             <n-select v-model:value="selectedAuthorizedPerson" :options="authorisedperson" placeholder="Select Authorised Person" class=" w-full"/>
             <n-input v-model:value="relationshiptoStudent" placeholder="Relationship to Student" class=" w-full  text-xl" /><br>
             <n-button size="small" ghost color="#AC1515" type="primary" @click="submitStudentBusAssignmentReport">Submit</n-button>
           </div>
       </n-card>
    </div>
    </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'
const selectedStudent = ref(null)
const selectedAuthorizedPerson = ref(null)
const relationshiptoStudent = ref('')

const authorisedperson = [
  { label: 'Authorized Person A', value: 'authorizedA' },
  { label: 'Authorized Person B', value: 'authorizedB' },
  { label: 'Authorized Person C', value: 'authorizedC' }
]
const submitStudentBusAssignmentReport = () => {
  console.log('Student Authorized Person Assignment Report Submitted:', selectedStudent.value, selectedAuthorizedPerson.value, relationshiptoStudent.value)
}
</script>