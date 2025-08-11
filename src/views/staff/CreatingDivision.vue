 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">
    <!-- creating division -->
    <n-card title="Creating Division" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="namedivision" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptiondivision" placeholder="Description" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitDivisionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

const namedivision = ref('')
const descriptiondivision = ref('')

const submitDivisionReport = () => {
  console.log('Division Report Submitted:', namedivision.value, descriptiondivision.value)
}
const divisions = [
  { label: 'Division A', value: 'divisionA' },
  { label: 'Division B', value: 'divisionB' },
  { label: 'Division C', value: 'divisionC' },
]

</script>

<style>

</style>