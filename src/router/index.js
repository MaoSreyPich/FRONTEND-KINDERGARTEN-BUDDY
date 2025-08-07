import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../components/dashBoard.vue";
import staff from "../components/staffContent.vue";
import user from "../components/userContent.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: dashboard,
  },
  {
    path: "/staff",
    name: "Staff",
    component: staff,
  },
  {
    path: "/user",
    name: "User",
    component: user,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
