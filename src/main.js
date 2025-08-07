import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { registerNaiveUI } from "./plugins/naiveui";

const app = createApp(App);
app.use(router);
app.use(registerNaiveUI());
app.mount("#app");
