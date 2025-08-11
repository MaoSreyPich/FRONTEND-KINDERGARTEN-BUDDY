<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="items-center justify-center">
      <!-- bus registration -->
      <n-card title="Bus Registration" class="shadow-md">
        <div class="space-y-4">
          <n-input v-model:value="busname" placeholder="Bus Name" class="w-full text-xl" />
          <n-input v-model:value="licenseplate" placeholder="License Plate" class="w-full text-xl" />
          <n-select v-model:value="selectedDriver" :options="drivers" placeholder="Select Driver" class="w-full" />
          <n-input type="textarea" v-model:value="route" placeholder="Route" class="w-full" />
          <n-button size="small" ghost color="#AC1515" @click="submitBusRegistrationReport" class="w-full">Create</n-button>
        </div>
      </n-card>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'

const busname = ref('')
const licenseplate = ref('')
const selectedDriver = ref(null)
const route = ref('')

const drivers = [
  { label: 'Driver 1', value: 'driver1' },
  { label: 'Driver 2', value: 'driver2' },
  { label: 'Driver 3', value: 'driver3' }
]

const submitBusRegistrationReport = () => {
  console.log('Bus Registration Report Submitted:', busname.value, licenseplate.value, selectedDriver.value, route.value)
}


</script>

<style>


</style>
