 <template>
    <n-config-provider :theme-overrides="themeOverrides">
  <div class=" items-center justify-center ">
    <!--Role creating -->
      <n-card title="Role creating" class="shadow-md">
      <div class="space-y-4">
          <n-input v-model:value="nameRolecreating" placeholder="Name" class=" w-full text-xl" /><br>
          <n-input v-model:value="guardnamerolecreating" placeholder="Guard Name" class=" w-full text-xl" /><br>
          <n-input v-model:value="tagrolecreating" placeholder=" Tag" class=" w-full text-xl" /><br>
          <n-button size="small" ghost color="#AC1515" @click="submitRoleReport" >Create</n-button>
      </div>
      </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

const nameRolecreating = ref('')
const guardnamerolecreating = ref('')
const tagrolecreating = ref('')

const submitRoleReport = () => {
  console.log('Role Created:', nameRolecreating.value, guardnamerolecreating.value, tagrolecreating.value)
}

</script>
