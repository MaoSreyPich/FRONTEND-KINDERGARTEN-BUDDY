<template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class=" items-center justify-center ">
        <!-- Staff Registration-->
        <n-card title="Staff Registration" class="shadow-md">
          <div class="space-y-4">
              <n-select v-model:value="selectedStaffUserID" :options="userid" placeholder="UserID" class=" w-full"/>
              <n-input v-model:value="stafffristname" placeholder="First Name" class=" w-full  text-xl" /><br>
              <n-input v-model:value="stafflastname" placeholder="Last Name" class=" w-full  text-xl" /><br>
              <n-input v-model:value="staffage" placeholder="Age" class=" w-full  text-xl" /><br>
              <n-select v-model:value="selectedStaffGender" :options="gender" placeholder="Gender" class=" w-full"/>
              <n-input v-model:value="staffhiredate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class=" w-full text-xl"/><br>
              <n-select v-model:value="selectedStaffPosition" :options="positions" placeholder="Position" class=" w-full"/>
              <n-input v-model:value="staffphonenumber" placeholder="Phone Number" class=" w-full  text-xl" /><br>
              <n-input v-model:value="staffemail" placeholder="Email" class=" w-full  text-xl" /><br>
              <n-input v-model:value="staffaddress" placeholder="Address" class=" w-full  text-xl" /><br>
              <n-input v-model:value="staffemploymentstatus" placeholder="Employment Status" class=" w-full  text-xl" /><br>
              <n-select v-model:value="selectedStaffStatus" :options="status" placeholder="Status" class=" w-full"/>
              <label for="profilePictureStaff" class="block mb-2 text-sm font-medium text-black-700">Profile Pictures:</label>
              <input type="file" id="profilePictureStaff" accept="image/*,.pdf,.doc,.docx" multiple @change="handleProfilePictureStaffUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
              <p class="text-sm font-medium text-black-700 mb-1">Image Previews:</p>
              <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewStaff" :key="idx" :src="src" alt="Staff Preview" class="max-w-xs" /></div><br>
              <n-button tize="small" ghost color="#AC1515" @click="submitStaffRegisterReport">Create</n-button>
         </div>
        </n-card>
  </div>
  </n-config-provider>
</template>

<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 
const selectedStaffUserID = ref(null)
const stafffristname = ref('')
const stafflastname = ref('')
const staffage = ref('')
const selectedStaffGender = ref(null)
const staffhiredate = ref('')
const selectedStaffPosition = ref(null)
const staffphonenumber = ref('')
const staffemail = ref('')
const staffaddress = ref('')
const staffemploymentstatus = ref('')
const selectedStaffStatus = ref(null)

const previewStaff = ref([])
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
const handleProfilePictureStaffUpload = (e) => handleMultipleFilePreview(e.target.files, previewStaff)
const positions = [
  { label: 'Manager', value: 'manager' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Administrator', value: 'administrator' }
]
const gender = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]
const userid = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' }
]
const status = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' }
]
const submitStaffRegisterReport = () => {
  console.log('Staff Registration Report Submitted:', selectedStaffUserID.value, stafffristname.value, stafflastname.value, staffage.value, selectedStaffGender.value, staffhiredate.value, selectedStaffPosition.value, staffphonenumber.value, staffemail.value, staffaddress.value, staffemploymentstatus.value, selectedStaffStatus.value)
}

</script>
