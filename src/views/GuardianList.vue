<template>
  <MainApp>
  <div class="first min-h-screen w-[90%] text-center justify-center font-sans antialiased">
    <div class="container mx-auto my-10 px-4 sm:px-6 lg:px-8"><br>
      
      <!-- Title -->
      <div class="mb-12">
        <p class="text-center text-5xl font-extrabold uppercase tracking-wide drop-shadow">
           GUARDIAN LIST
        </p>
      </div>

      <!-- Create Staff Button -->
       <div class="mb-8 h-10 flex justify-end">
            <n-button type="error" @click="goToguardian">+ Create Guardian</n-button>
      </div>
      <!-- Staff List -->
        <div class="staff-list overflow-x-auto mt-6 m-10">
           <table class="w-full table-auto border-collapse border-2 border-black shadow-md rounded-md text-lg">
            <thead class="bg-gray-900 text-white">
             <tr>
               <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide"> No</th>
               <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Name</th>
               <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Email</th>
               <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Role</th>
               <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide"> Actions</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-gray-700 text-[18px]">
              <tr v-for="(staff, index) in staffList" :key="index" class="hover:bg-gray-100 transition">
                <td class=" px-6 py-4 text-center">{{ index + 1 }}</td>
                <td class=" px-6 py-4 text-center">{{ staff.name }}</td>
                <td class=" px-6 py-4 text-center">{{ staff.email }}</td>
                <td class=" px-6 py-4 text-center">{{ staff.role }}</td>
                <td class="px-6 py-4 flex justify-center  gap-1">
                  <n-button size="small" ghost type="warning" @click="editStaff(staff)">Edit</n-button>
                  <n-button size="small" ghost type="error" @click="deleteStaff(staff)">Delete</n-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
  </MainApp>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import MainApp from '@/layouts/MainApp.vue'

const message = useMessage()
const router = useRouter()

function goToguardian() {
  message.info('Redirecting to Create Guardian')
  router.push('/guardian')
}

const staffList = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Staff' },
]

function editGuardian(guardian) {
  message.info(`Edit guardian: ${guardian.name}`)
}

function deleteGuardian(guardian) {
  message.warning(`Delete guardian: ${guardian.name}`)
}
</script>

<style>
.first {
  margin-left: 5%;
}
.container {
  max-width: 1230px;
  margin-left: 14%;
}

.create {
  padding-right: 30px;
  border-radius: 5px;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
}
</style>
