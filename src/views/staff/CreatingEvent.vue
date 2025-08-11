 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">

    <!-- creating event -->
    <n-card title="Creating Event" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="eventname" placeholder="Event Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input v-model:value="eventdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="w-full text-xl" :style="customInputStyle" />
        <n-input v-model:value="typeofevent" placeholder="Type of Event" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionevent" placeholder="Description" class="w-full" />
        <n-select v-model:value="selectedUser" :options="eventsendtouser" placeholder="Sent To" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitEventReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 
const classname = ref('')
const eventname = ref('')
const eventdate = ref('')
const typeofevent = ref('')
const descriptionevent = ref('')
const selectedUser = ref(null)
const submitEventReport = () => {
  console.log('Event Report Submitted:', eventname.value, eventdate.value, typeofevent.value, descriptionevent.value, selectedUser.value)
}
const eventsendtouser = [
  { label: 'Student', value: 'student' },
  { label: 'Guardian', value: 'guardian' },
  { label: 'Parent', value: 'parent' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Staff', value: 'staff' },
]

</script>

<style>

</style>