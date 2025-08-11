<template>
  <MainApp>
     <div class="dashboard-container w-full px-4"><br>

    <div class="container text-center justify-center mt-10">
        
        <!-- Title -->
        <div class="mb-12">
          <p class="text-center text-4xl text-black font-extrabold uppercase tracking-wide drop-shadow">
             STAFF LIST
          </p>
        </div>

        <!-- Create Staff Button -->
         <div class="mb-8 h-10 flex justify-end">
              <n-button type="error" @click="goToStaffR">+ Create Staff</n-button>
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
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import MainApp from '@/layouts/MainApp.vue'



const message = useMessage()
const router = useRouter()

function goToStaffR() {
  message.info('Redirecting to Create Staff')
  router.push('/auth/staffregister')
}

const staffList = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', position: 'Team Lead' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', position: 'Operations Manager' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Staff', position: 'Sales Associate' },
]

function editStaff(staff) {
  message.info(`Edit staff: ${staff.name}`)
}

function deleteStaff(staff) {
  message.warning(`Delete staff: ${staff.name}`)
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

table, th, td {
  border: 1px solid rgb(59, 59, 59) !important;
  border-collapse: collapse !important;
}
 td {
  padding: 5px;
  text-align: center;
}
td:hover {
    background-color: #f1f1f1;
  }
</style>
