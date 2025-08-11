<template>
    <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center">
    <!-- Verifying Receipt -->
      <n-card title="Verifying Receipt" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="receiptid" placeholder="Receipt ID" class=" w-full " /><br>
        <n-input v-model:value="invoiceid" placeholder="Invoice ID" class=" w-full " /><br>
        <n-input v-model:value="studentname" placeholder="Student Name" class=" w-full " /><br>
        <n-input v-model:value="paymentdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class=" w-full text-xl"/><br>
        <n-input v-model:value="amountpaid" placeholder="Amount Paid" class=" w-full text-xl" /><br>
        <n-select v-model:value="selectedPaymentMethodVerifying" :options="verifyingpaymentmethods" placeholder="Payment Method" class=" w-full"/>
        <n-input v-model:value="transactionid" placeholder="Transaction ID" class=" w-full " /><br>
        <!-- 2 this get data from issuing invoice -->
        <n-input v-model:value="paidbyguardian"  format="Existing Guardian" placeholder="Existing Guardian" class=" w-full text-xl"/><br>
        <n-input v-model:value="issuedbystaff"  format="Existing Staff" placeholder="Existing Staff" class=" w-full text-xl"/><br>
        <n-select v-model:value="selectedStatusVerifying" :options="verifyingstatus" placeholder="Status" class=" w-full"/>
        <n-button size="small" ghost color="#AC1515" @click="submitVerifyingReceiptReport">Verrify</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'

const receiptid = ref('')
const invoiceid = ref('')
const studentname = ref('')
const paymentdate = ref('')
const amountpaid = ref('')
const selectedPaymentMethodVerifying = ref(null)
const transactionid = ref('')
const paidbyguardian = ref('')
const issuedbystaff = ref('')
const selectedStatusVerifying = ref(null)


const verifyingpaymentmethods = [
  { label: 'Credit Card', value: 'credit_card' },
  { label: 'Bank Transfer', value: 'bank_transfer' },
  { label: 'Cash', value: 'cash' }
]

const verifyingstatus = [
  { label: 'Verified', value: 'verified' },
  { label: 'Unverified', value: 'unverified' }
]

const submitVerifyingReceiptReport = () => {
  console.log('Verifying Receipt Report Submitted:', receiptid.value, invoiceid.value, studentname.value, paymentdate.value, amountpaid.value, selectedPaymentMethodVerifying.value, transactionid.value, paidbyguardian.value, issuedbystaff.value, selectedStatusVerifying.value)
}

</script>