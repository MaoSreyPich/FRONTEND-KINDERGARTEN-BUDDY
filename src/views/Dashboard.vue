<template>
 <MainApp>
     <div class="dashboard-container w-full px-4"><br>

    <div class="container text-center justify-center mt-10">
      <!-- Title -->
    <div class="mb-12">
    <p class="text-center text-4xl  text-black font-extrabold uppercase tracking-wide drop-shadow">Login History</p>
    </div>
   <br>
      <!-- Table -->
      <table class="w-[93%] table-auto border-collapse border-2 border-black shadow-md rounded-md text-lg ">
        <thead class="bg-gray-900 text-white">
          <tr>
            <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">No</th>
            <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Email</th>
            <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Login Time</th>
            <th class="border border-black px-6 py-4 font-bold text-center uppercase tracking-wide">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white text-gray-800 text-[17px]">
          <tr
            v-for="(entry, index) in loginHistory"
            :key="index"
            class="hover:bg-gray-100 transition"
          >
            <td class=" px-6 py-4 text-center">{{ index + 1 }}</td>
            <td class=" px-6 py-4 text-center">{{ entry.email }}</td>
            <td class=" px-6 py-4 text-center">{{ entry.time }}</td>
            <td class=" px-6 py-4 text-center">
              <span
                :class="entry.status === 'Success' ? 'text-green-600' : 'text-red-600'"
              >
                {{ entry.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table><br>

      <!-- Button -->
       <n-button ghost type="error" @click="clearHistory">🧹 Clear Login History</n-button>
    </div>
  </div>
  </MainApp>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainApp from '@/layouts/MainApp.vue'

const loginHistory = ref([])

onMounted(() => {
  const storedHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]')
  loginHistory.value = storedHistory
})

const clearHistory = () => {
  localStorage.removeItem('loginHistory')
  loginHistory.value = []
}
</script>

<style scoped>
.dashboard-container {
  max-width: 91%;
  margin-right: 90%;
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
