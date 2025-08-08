<template>
   <div class="bg-gray-200 w-full min-h-screen flex justify-center items-center">
    <n-card
      title="Card Segmented Demo"
      class="card rounded-2xl shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      hoverable
    >
        <h1 class="text-9xl font-semibold text-center text-gray-800">
          <br />
          <n-gradient-text size="32" type="success"> Student Application </n-gradient-text>
        </h1>
         <br />
      <n-form class="grid grid-cols-1 md:grid-cols-2 gap-6" label-placement="top">
  
        <!-- Student Info -->
        <n-form-item label="First Name">
          <n-input v-model:value="form.studentFirstName" size="large" />
        </n-form-item>

        <n-form-item label="Last Name">
          <n-input v-model:value="form.studentLastName" size="large" />
        </n-form-item>

        <n-form-item label="Gender">
  <n-select
    v-model:value="form.studentGender"
    :options="[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ]"
    placeholder="Select gender"
  />
</n-form-item>

        <n-form-item label="Age">
          <n-input v-model:value="form.studentAge" size="large" type="number" />
        </n-form-item>

        <n-form-item label="Place of Birth">
          <n-input v-model:value="form.placeOfBirth" size="large" />
        </n-form-item>

  
 <n-form-item label="Date of Birth">
  <n-input v-model:value="admissiondatestd" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" place holder="" class=" w-full"/>
</n-form-item>



        <n-form-item label="Health Note" class="md:col-span-2">
          <n-input v-model:value="form.healthNote" type="textarea" />
        </n-form-item>

        <n-form-item label="Special Requests" class="md:col-span-2">
          <n-input v-model:value="form.specialRequests" type="textarea" />
        </n-form-item>

        <!-- Father Info -->
        <n-form-item label="Father First Name">
          <n-input v-model:value="form.father.firstName" />
        </n-form-item>
        <n-form-item label="Father Last Name">
          <n-input v-model:value="form.father.lastName" />
        </n-form-item>
        <n-form-item label="Father Job">
          <n-input v-model:value="form.father.job" />
        </n-form-item>
        <n-form-item label="Father Age">
          <n-input v-model:value="form.father.age" type="number" />
        </n-form-item>

        <!-- Mother Info -->
        <n-form-item label="Mother First Name">
          <n-input v-model:value="form.mother.firstName" />
        </n-form-item>
        <n-form-item label="Mother Last Name">
          <n-input v-model:value="form.mother.lastName" />
        </n-form-item>
        <n-form-item label="Mother Job">
          <n-input v-model:value="form.mother.job" />
        </n-form-item>
        <n-form-item label="Mother Age">
          <n-input v-model:value="form.mother.age" type="number" />
        </n-form-item>

        <!-- Guardian Info -->
        <n-form-item label="Guardian First Name">
          <n-input v-model:value="form.guardian.firstName" />
        </n-form-item>
        <n-form-item label="Guardian Last Name">
          <n-input v-model:value="form.guardian.lastName" />
        </n-form-item>
        <n-form-item label="Guardian Job">
          <n-input v-model:value="form.guardian.job" />
        </n-form-item>
        <n-form-item label="Guardian Age">
          <n-input v-model:value="form.guardian.age" type="number" />
        </n-form-item>
        <n-form-item label="Guardian Gender">
  <n-select
    v-model:value="form.guardianGender"
    :options="[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' }
    ]"
    placeholder="Select gender"
  />
</n-form-item>
        <n-form-item label="Guardian Relationship to Student">
          <n-input v-model:value="form.guardian.relationship" />
        </n-form-item>
        <n-form-item label="Guardian Address" class="md:col-span-2">
          <n-input v-model:value="form.guardian.address" type="textarea" />
        </n-form-item>

        <!-- Contact Info -->
        <n-form-item label="Current Address" class="md:col-span-2">
          <n-input v-model:value="form.currentAddress" type="textarea" />
        </n-form-item>
        <n-form-item label="Phone Number">
          <n-input v-model:value="form.phone" type="tel" />
        </n-form-item>
        <n-form-item label="Email">
          <n-input v-model:value="form.email" type="email" />
        </n-form-item>

        <!-- Services -->


<!-- <n-form-item label="Services Needed">
  <n-checkbox-group v-model:value="form.services">
    <n-checkbox value="bus">Need Bus</n-checkbox>
    <n-checkbox value="meal">Need Meal Plan</n-checkbox>
  </n-checkbox-group>
</n-form-item> -->

        <!-- Status -->
        <n-form-item label="Application Status">
          <n-select
            v-model:value="form.status"
            :options="[
              { label: 'Pending', value: 'pending' },
              { label: 'Accepted', value: 'accepted' },
              { label: 'Rejected', value: 'rejected' }
            ]"
          />
        </n-form-item>

        <!-- Submit Button -->
        <div class="md:col-span-2">
         <n-button
          type="primary"
          block
          size="large"
          class="!bg-green-600 hover:!bg-green-700 transition-all"
          @click="handleRegister"
        >
          Submit </n-button
        ><br />
        </div>
      </n-form>
    </n-card>
  </div>
</template>
<style scoped>
.card {
  padding: 20px;
}
.form {
  background: transparent;
  padding-bottom: 15px;
}
</style>
<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import axios from 'axios'

const message = useMessage()

const form = ref({
  studentFirstName: '',
  studentLastName: '',
  studentGender: false,
  studentAge: null,
  placeOfBirth: '',
  dateOfBirth: '',
  healthNote: '',
  specialRequests: '',
  father: {
    firstName: '',
    lastName: '',
    job: '',
    age: null,
  },
  mother: {
    firstName: '',
    lastName: '',
    job: '',
    age: null,
  },
  guardian: {
    firstName: '',
    lastName: '',
    job: '',
    age: null,
    gender: false,
    relationship: '',
    address: '',
  },
  currentAddress: '',
  phone: '',
  email: '',
  needBus: false,
  needMealPlan: false,
  status: 'pending',
})

const handleSubmit = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/student-application', form.value)
    message.success('Application submitted successfully!')
  } catch (error) {
    message.error('Submission failed. Check console.')
    console.error(error)
  }
}

</script>
