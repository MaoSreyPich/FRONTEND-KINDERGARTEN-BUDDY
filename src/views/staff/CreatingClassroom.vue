 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">
    <!-- creating classroom -->
    <n-card title="Creating Classroom" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="classname" placeholder="Class Name" class="w-full text-xl " :style="customInputStyle" />
        <n-button size="small" ghost color="#AC1515" @click="submitClassroomReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 
const classname = ref('')

const submitClassroomReport = () => {
console.log('Classroom Report Submitted:', classname.value)
}
</script>

<style>

</style>