<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1 class="login-title">Welcome Back</h1>
        <p class="login-subtitle">Sign in to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="you@example.com"
            class="form-input"
            required
            @keydown.enter="handleLogin"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <div class="password-input-wrapper">
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Enter your password"
              class="form-input"
              required
              @keydown.enter="handleLogin"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="password-toggle"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            <span class="checkmark"></span>
            Remember me
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button
          type="submit"
          class="login-button"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Log In</span>
          <span v-else class="loading-spinner">
            <svg class="spinner" viewBox="0 0 50 50">
              <circle class="path" cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"></circle>
            </svg>
            Loggin in...
          </span>
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ResponsiveLoginForm',
  setup() {
    const email = ref('')
    const password = ref('')
    const rememberMe = ref(false)
    const showPassword = ref(false)
    const isLoading = ref(false)

    const handleLogin = async () => {
      if (!email.value || !password.value) {
        alert('Please fill in all fields')
        return
      }

      isLoading.value = true

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Simulate success/failure
        if (email.value === 'admin@example.com' && password.value === 'password') {
          alert('Login successful! Redirecting to dashboard...')
          console.log('Login data:', {
            email: email.value,
            password: password.value,
            rememberMe: rememberMe.value
          })
        } else {
          alert('Invalid credentials. Please check your email and password.')
        }
      } catch (error) {
        alert('Login failed. Please try again.')
        console.error('Login error:', error)
      } finally {
        isLoading.value = false
      }
    }

    const goToRegister = () => {
      alert('Redirecting to registration page...')
      // router.push('/auth/register')
    }

    return {
      email,
      password,
      rememberMe,
      showPassword,
      isLoading,
      handleLogin,
      goToRegister
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.login-container {
  position: relative; /* Required for the pseudo-element */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.login-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/img/bg/pexels-cottonbro-3662628.jpg') center center/cover no-repeat;
  filter: blur(8px); /* Adjust the blur amount as needed */
  z-index: -1; /* Sends the pseudo-element behind the content */
}

.login-card {
  background: rgb(136, 55, 55);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(137, 5, 5, 0.3);
  padding: 40px;
  width: 100%;
  max-width: 450px;
  position: relative;
  overflow: hidden;
}

.login-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #890505, #a30606, #890505);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #890505;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #890505, #a30606);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-subtitle {
  color: #4e4e4e;
  font-size: 1rem;
  font-weight: 400;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #494949;
  font-size: 0.95rem;
}

.form-input {
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #0f4c89;
  width: 100%; /* Ensures full width */
}

.form-input:focus {
  outline: none;
  border-color: #890505;
  background-color: rgb(0, 0, 0);
  box-shadow: 0 0 0 4px rgba(137, 5, 5, 0.1);
}

.form-input::placeholder {
  color: rgb(148, 148, 148); /* Change placeholder text color */
  opacity: 1; /* Ensure the placeholder is fully opaque */
}

.password-input-wrapper {
  position: relative;
  width: 100%; /* Ensures the password input also takes full width */
}

.password-toggle {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #7f7f7f;
  transition: color 0.2s ease;
}

.password-toggle:hover {
  color: #890505;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
}

.remember-me {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #818181;
}

.remember-me input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.remember-me input[type="checkbox"]:checked + .checkmark {
  background-color: #890505;
  border-color: #890505;
}

.remember-me input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.forgot-password {
  color: #890505;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-password:hover {
  color: #a30606;
  text-decoration: underline;
}

.login-button {
  background: linear-gradient(135deg, #890505, #a30606);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(137, 5, 5, 0.3);
}

.login-button:active:not(:disabled) {
  transform: translateY(0);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.spinner {
  width: 20px;
  height: 20px;
  animation: rotate 1s linear infinite;
}

.path {
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e7eb;
}

.divider span {
  background-color: white;
  color: #d1d1d1;
  padding: 0 16px;
  font-size: 0.9rem;
}

.register-link {
  text-align: center;
  margin-top: 16px;
}

.register-link p {
  color: #767676;
  font-size: 0.95rem;
  margin: 0;
}

.register-button {
  color: #890505;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.register-button:hover {
  color: #a30606;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 640px) {
  .login-container {
    padding: 16px;
  }

  .login-card {
    padding: 24px;
    border-radius: 16px;
  }

  .login-title {
    font-size: 2rem;
  }

  .form-input {
    padding: 14px 16px;
    font-size: 16px; /* Prevents zoom on iOS */
  }

  .login-button {
    padding: 14px 20px;
    font-size: 1rem;
  }

  .form-options {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 20px;
  }

  .login-title {
    font-size: 1.75rem;
  }

  .login-subtitle {
    font-size: 0.9rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .login-card {
    background: #ffffff;
    color: #526f8d;
  }

  .form-label {
    color: #da0000;
  }

  .form-input {
    background-color: #ebebeb;
    border-color: #d6d6d6;
    color: #121212;
  }

  .form-input:focus {
    background-color: #e5e5e5;
  }

  .login-subtitle {
    color: #8e8e8e;
  }

  .divider::before {
    background-color: #9d9d9d;
  }

  .divider span {
    background-color: #ffffff;
  }

  .register-link p {
    color: #9ca3af;
  }
}
</style>