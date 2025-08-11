 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">
    <!-- creating position -->
    <n-card title="Creating Position" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="nameposition" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionposition" placeholder="Description" class="w-full" />
        <n-select v-model:value="selectedDivision" :options="divisiononposition" placeholder="Under Division" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitPositionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

const nameposition = ref('')
const descriptionposition = ref('')
const selectedPosition = ref(null)

const submitPositionReport = () => {
  console.log('Position Report Submitted:', nameposition.value, descriptionposition.value, selectedPosition.value)
}
const positions = [
  { label: 'Position A', value: 'positionA' },
  { label: 'Position B', value: 'positionB' },
  { label: 'Position C', value: 'positionC' },
]

</script>

<style>

</style>