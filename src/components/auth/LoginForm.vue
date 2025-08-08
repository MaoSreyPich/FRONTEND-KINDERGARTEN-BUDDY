<template>
  <div class="bg-gray-200 w-full min-h-screen flex justify-center items-center">
    <n-card
      title="Welcome Back"
      class="card rounded-2xl shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      hoverable
    >
      <n-form class="form w-[400px] h-auto space-y-6" label-placement="top">
        <h1 class="text-4xl font-semibold text-center text-gray-800">
          <n-gradient-text size="32" type="success">LOGIN</n-gradient-text>
        </h1>

        <n-form-item label="Email">
          <n-input
            v-model:value="email"
            type="email"
            size="large"
            placeholder="you@example.com"
            class="field"
            @keydown.enter="handleLogin"
          />
        </n-form-item>

        <n-form-item label="Password">
          <n-input
            v-model:value="password"
            type="password"
            size="large"
            show-password-on="click"
            placeholder="Your password"
            class="field"
            @keydown.enter="handleLogin"
          />
        </n-form-item>

        <n-button
          type="primary"
          size="large"
          class="!bg-green-600 hover:!bg-green-700 transition-all btn-login"
          @click="handleLogin"
        >
          Login
        </n-button>

        <div class="text-center text-sm text-blue-600 mt-4">
          <button class="hover:underline" @click="goToRegister">
            Don't have an account? Register
          </button>
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
.btn-login {
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
}
.field {
  border-radius: 10px;
}
</style>

<script>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'LoginTemplate',
  setup() {
    const email = ref('')
    const password = ref('')
    const message = useMessage()
    const router = useRouter()
    const store = useStore()

    const handleLogin = async () => {
      if (!email.value || !password.value) {
        message.error('Please fill in all fields')
        return
      }
      try {
        await store.dispatch('user/login', {
          email: email.value,
          password: password.value,
        })
        message.success('Login successful')
        router.push('/dashboard')
      } catch (error) {
        message.error(
          error.response?.data?.message ||
            'Invalid credentials. Please check your email and password.',
        )
      }
    }

    const goToRegister = () => {
      router.push('/auth/register')
    }

    return {
      email,
      password,
      handleLogin,
      goToRegister,
    }
  },
}
</script>
