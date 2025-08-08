import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { registerNaiveUI } from "./plugins/naiveui";

import 'primeicons/primeicons.css'
import axios from 'axios'
import { getAuthorization } from '@/plugins/authentication'

axios.interceptors.request.use((config) => {
  const token = getAuthorization()
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
const app = createApp(App);
app.use(router);
app.use(registerNaiveUI());
app.mount("#app");
