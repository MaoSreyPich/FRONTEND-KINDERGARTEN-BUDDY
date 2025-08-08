<template>
  <div class="min-h-screen flex items-center justify-center pt-96">
    <br />
    <n-form
      class="p-8 rounded-2xl w-[400px] h-[460px] max-w-md mx-auto space-y-2 shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      label-placement="top"
    >
      <h1 class="text-9xl font-semibold text-center text-gray-800">
        <br />
        <n-gradient-text size="32" type="success"> Create Account </n-gradient-text>
      </h1>
      <br /><br />
      <n-form-item label="Email">
        <n-input v-model:value="email" placeholder="you@example.com" class="w-full" />
      </n-form-item>
      <n-form-item label="Name">
        <n-input v-model:value="name" placeholder="Your name" class="w-full" />
      </n-form-item>
      <n-form-item label="Password">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="click"
          placeholder="Create a password"
          class="w-full"
        />
      </n-form-item>
      <n-form-item label="Confirm Password">
        <n-input
          v-model:value="confirm_password"
          type="password"
          show-password-on="click"
          placeholder="Confirm your password"
          class="w-full"
        />
      </n-form-item>
      <n-button
        type="primary"
        block
        size="large"
        class="!bg-green-600 hover:!bg-green-700 transition-all"
        @click="handleRegister"
      >
        Register </n-button
      ><br />
      <div class="text-center text-sm text-blue-600 mt-4">
        <button class="hover:underline" @click="goToLogin">Already have an account? Login</button>
      </div>
    </n-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const name = ref('')
const password = ref('')
const confirm_password = ref('')
const message = useMessage()
const router = useRouter()

const handleRegister = async () => {
  if (!email.value || !password.value) {
    message.error('Please fill in all fields')
  } else {
    try {
      await axios.post('http://127.0.0.1:8000/api/register', {
        email: email.value,
        name: name.value,
        password: password.value,
        confirm_password: confirm_password.value,
      })
      message.success('Registration successful')
      setTimeout(() => {
        router.push('/auth/login')
      }, 1000)
    } catch (error) {
      let msg = 'Registration failed'
      const data = error.response?.data
      if (typeof data?.message === 'string') {
        msg = data.message
      } else if (typeof data?.message === 'object') {
        const firstKey = Object.keys(data.message)[0]
        msg = data.message[firstKey][0]
      }
      message.error(msg)
    }
  }
}

// Navigate to Login page
const goToLogin = () => {
  router.push('/auth/login')
}
</script>
