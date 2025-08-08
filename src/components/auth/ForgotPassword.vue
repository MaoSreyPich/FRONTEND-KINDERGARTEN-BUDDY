<!-- <template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-9xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Reset Password </n-gradient-text>
    </h1>
    <div class="flex items-center gap-2 w-full">
      <n-input v-model:value="email" placeholder="Enter your email" class="flex-1" />
      <n-button
        type="primary"
        size="medium"
        class="!bg-blue-600 hover:!bg-blue-700 transition-all whitespace-nowrap"
        :disabled="!email"
        @click="sendCode"
      >
        Send Code
      </n-button>
    </div>
    <n-form-item label="Verification Code">
      <n-input
        v-model:value="codeInput"
        placeholder="6-digit code"
        maxlength="6"
        class="w-full text-center"
      />
    </n-form-item>
    <n-form-item label="New Password">
      <n-input
        v-model:value="newPassword"
        type="password"
        placeholder="New password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700"
      @click="resetPassword"
    >
      Reset Password
    </n-button>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goBackToLogin">Back to Login</button>
    </div>
  </n-form> -->
  <template>
  <div class="min-h-screen  flex items-center justify-center pt-96 "><br>
  <n-form
    class=" p-8 rounded-2xl w-[400px] h-[460px] max-w-md mx-auto space-y-2 shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)] "
    label-placement="top" >
    <h1 class="text-9xl font-semibold text-center text-gray-800 "><br>
      <n-gradient-text size="32" type="success"> Reset Password </n-gradient-text>
    </h1><br>
    <br />
    <div class="flex items-center gap-2 w-full">
      <n-input v-model:value="email" placeholder="Enter your email" class="flex-1" />
      <n-button
        type="primary"
        size="medium"
        class="!bg-blue-600 hover:!bg-blue-700 transition-all whitespace-nowrap"
        :disabled="!email"
        @click="sendCode"
      >
        Send Code
      </n-button>
    </div>
    <br />
    <n-form-item label="Verification Code">
      <n-input
        v-model:value="codeInput"
        placeholder="6-digit code"
        maxlength="6"
        class="w-full text-center"
      />
    </n-form-item>
    <n-form-item label="New Password">
      <n-input
        v-model:value="newPassword"
        type="password"
        placeholder="New password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700"
      @click="resetPassword"
    >
      Reset Password
    </n-button><br>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goBackToLogin">Back to Login</button>
    </div>
  </n-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const email = ref('')
const codeInput = ref('')
const newPassword = ref('')
const code = ref('') // For storing the verification code
const message = useMessage()
const router = useRouter()

// Function to simulate sending a verification code
const sendCode = () => {
  code.value = Math.floor(100000 + Math.random() * 900000).toString()
  message.info(`Code sent: ${code.value}`)
}

// Function to handle password reset
const resetPassword = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
  if (codeInput.value === code.value && newPassword.value) {
    storedUser.password = newPassword.value
    localStorage.setItem('user', JSON.stringify(storedUser)) // Update the password in localStorage
    message.success('Password reset successful')
    setTimeout(() => {
      router.push('/auth/login') // Redirect to login page after password reset
    }, 1000)
  } else {
    message.error('Invalid code or missing new password')
  }
}

// Function to navigate back to the login page
const goBackToLogin = () => {
  router.push('/auth/login')
}
</script>
