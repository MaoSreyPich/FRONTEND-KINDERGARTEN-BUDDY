<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500">
    <transition name="popup">
      <div v-if="showPopup" class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto text-center">
        <div class="flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-600">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-green-700 mb-4">Application Submitted Successfully!</h2>
        <p class="text-gray-600 mb-4">Your application is being reviewed.</p>
        <p class="text-gray-600 mb-6">You will be notified via email or phone number.</p>
        <button class="bg-gray-500 hover:bg-gray-700  text-white font-bold underline py-5 px-10 rounded-xl transition duration-300 ease-in-out" @click="closePopup">
          Go to Enroll
        </button>
        <div class="flex items-center justify-center mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="w-10 h-10"  ><path d="M20 30h-3a2.002 2.002 0 0 1-2-2v-5h2v5h3v-5h2v-4a1.001 1.001 0 0 0-1-1h-8.72l-2-6H4a1.001 1.001 0 0 0-1 1v6h2v9h4v-7h2v7a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2v-7a2.002 2.002 0 0 1-2-2v-6a3.003 3.003 0 0 1 3-3h6.28a1.998 1.998 0 0 1 1.897 1.367L13.72 16H21a3.003 3.003 0 0 1 3 3v4a2.002 2.002 0 0 1-2 2v3a2.002 2.002 0 0 1-2 2z" fill="currentColor"></path><path d="M28 30h-2V19h3v-6a1.001 1.001 0 0 0-1-1h-4v-2h4a3.003 3.003 0 0 1 3 3v6a2.002 2.002 0 0 1-2 2h-1z" fill="currentColor"></path><path d="M7 9a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" fill="currentColor"></path><path d="M25 9a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" fill="currentColor"></path><path d="M18.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5a1.502 1.502 0 0 0-1.5-1.5z" fill="currentColor"></path></svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SuccessMessage',
  setup() {
    const showPopup = ref(true);

    const closePopup = () => {
      showPopup.value = false;
    };

    return {
      showPopup,
      closePopup,
    };
  },
};
</script>

<style>
.popup-enter-active,
.popup-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.popup-enter-from {
  transform: scale(0.5);
  opacity: 0;
}

.popup-enter-to {
  transform: scale(1);
  opacity: 1;
}

.popup-leave-from {
  transform: scale(1);
  opacity: 1;
}

.popup-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>