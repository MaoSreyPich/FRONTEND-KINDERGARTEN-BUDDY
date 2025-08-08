import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../components/dashBoard.vue";
import staff from "../components/staffContent.vue";
import user from "../components/userContent.vue";
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import ForgotPassword from '../components/auth/ForgotPassword.vue'
import verify from '@/components/auth/verify.vue'
import Home from '../components/FrontPage/Home.vue'
import AboutUs from '@/components/FrontPage/AboutUs.vue'
import Teachers from '@/components/FrontPage/Teachers.vue'
import StuApp from '@/components/FrontPage/StuApp.vue'
import ContactUs from '@/components/FrontPage/ContactUs.vue'
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
    {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/auth/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/auth/verify',
    name: 'verify',
    component: verify,
  },
    {
    path: '/frontpage/home',
    name: 'home',
    component: Home,
  },
    {
    path: '/frontpage/aboutus',
    name: 'aboutus',
    component: AboutUs,
  },
  {
    path: '/frontpage/teachers',
    name: 'teachers',
    component: Teachers,
  },
  {
    path: '/frontpage/contactus',
    name: 'contactus',
    component: ContactUs,
  },
  {
    path: '/frontpage/stuapp',
    name: 'StuApp',
    component: StuApp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
