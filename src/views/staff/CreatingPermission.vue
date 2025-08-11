 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">

    <!-- creating permission -->
    <n-card title="Creating Permission" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="namepermission" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionpermission" placeholder="Description" class="w-full" />
        <n-select v-model:value="selectedDivision" :options="divisions" placeholder="Under Division" class="w-full" />
        <n-select v-model:value="selectedPosition" :options="positions" placeholder="Under Position" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitPermissionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

const namepermission = ref('')
const descriptionpermission = ref('')
const selectedDivision = ref(null)
const selectedPosition = ref(null)

const submitPermissionReport = () => {
  console.log('Permission Report Submitted:', namepermission.value, descriptionpermission.value, selectedDivision.value, selectedPosition.value)
}
const divisions = ref([
  { label: 'Division A', value: 'division-a' },
  { label: 'Division B', value: 'division-b' }
])

const positions = ref([
  { label: 'Position A', value: 'position-a' },
  { label: 'Position B', value: 'position-b' }
])

</script>

<style>

</style>