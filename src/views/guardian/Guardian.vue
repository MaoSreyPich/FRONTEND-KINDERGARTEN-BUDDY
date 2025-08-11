<template>
  <MainApp>
    <div class="flex w-full min-h-screen bg-gray-10">
      <div class="flex-1 flex flex-col items-center p-6">
        <br />
        <div class="mt-6">
          <p class="text-center text-5xl font-extrabold uppercase tracking-wide drop-shadow text-black-700">
            Guardian
          </p>
        </div>
        <br />

        <!-- Form/Card Section -->
        <div class="w-[40%] p-6 rounded-xl shadow-lg space-y-8">
          <n-config-provider :theme-overrides="themeOverrides">
            <div class="items-center justify-center">
              <n-card title="Guardian Registration" class="shadow-md">
                <div class="space-y-4">
                  <n-select v-model:value="GuardianUserID" :options="userid" placeholder="UserID" class="w-full" />
                  <n-input v-model:value="Guardianfristname" placeholder="First Name" class="w-full text-xl" />
                  <n-input v-model:value="Guardianlastname" placeholder="Last Name" class="w-full text-xl" />
                  <n-input v-model:value="Guardianage" placeholder="Age" class="w-full text-xl" />
                  <n-select v-model:value="selectedGender" :options="gender" placeholder="Gender" class="w-full" />
                  <n-input v-model:value="hireDate" type="date" placeholder="" class="w-full text-xl" />
                  <n-select v-model:value="selectedOccupation" :options="positions" placeholder="Occupation" class="w-full" />
                  <n-input v-model:value="phoneNumber" placeholder="Phone Number" class="w-full text-xl" />
                  <n-input v-model:value="email" placeholder="Email" class="w-full text-xl" />
                  <n-input v-model:value="address" placeholder="Address" class="w-full text-xl" />
                  <n-input v-model:value="relationship" placeholder="Relationship" class="w-full text-xl" />

                  <!-- File Upload -->
                  <label for="profilePictureStaff" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
                  <input
                    type="file"
                    id="profilePictureStaff"
                    accept="image/*,.pdf,.doc,.docx"
                    multiple
                    @change="handleProfilePictureUpload"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  />

                  <!-- Image Preview -->
                  <p class="text-sm font-medium text-black-700 mb-1">Image Previews:</p>
                  <div class="flex flex-wrap gap-2">
                    <img
                      v-for="(src, idx) in previewImages"
                      :key="idx"
                      :src="src"
                      alt="Preview"
                      class="max-w-xs rounded-lg"
                    />
                  </div>

                  <!-- Submit Button -->
                  <n-button size="small" ghost color="#AC1515" @click="submitGuardianForm">Create</n-button>
                </div>
              </n-card>
            </div>
          </n-config-provider>
        </div>
      </div>
    </div>
  </MainApp>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'
import MainApp from '@/layouts/MainApp.vue'

// Reactive form values
const GuardianUserID = ref(null)
const Guardianfristname = ref('')
const Guardianlastname = ref('')
const Guardianage = ref('')
const selectedGender = ref(null)
const hireDate = ref('')
const selectedOccupation = ref(null)
const phoneNumber = ref('')
const email = ref('')
const address = ref('')
const relationship = ref('')
const previewImages = ref([])

// Gender, position, and user ID options
const gender = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]


const positions = [
  { label: 'Business', value: 'business' },
  { label: 'Farmer', value: 'farmer' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Other', value: 'other' }
]

const userid = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' }
]

// File upload and preview
function handleProfilePictureUpload(event) {
  const files = event.target.files
  previewImages.value = []

  Array.from(files).forEach(file => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => {
        previewImages.value.push(reader.result)
      }
      reader.readAsDataURL(file)
    }
  })
}

// Submit function
function submitGuardianForm() {
  console.log('Guardian Form Data:', {
    GuardianUserID: GuardianUserID.value,
    Guardianfristname: Guardianfristname.value,
    Guardianlastname: Guardianlastname.value,
    Guardianage: Guardianage.value,
    selectedGender: selectedGender.value,
    hireDate: hireDate.value,
    selectedOccupation: selectedOccupation.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    address: address.value,
    relationship: relationship.value
  })
}
  
// Theme for black border on focus/hover
const themeOverrides = {
  Input: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
  },
  Select: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
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
