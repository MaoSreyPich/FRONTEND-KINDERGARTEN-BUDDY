import { createRouter, createWebHistory } from "vue-router";

// Auth
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import ForgotPassword from '../components/auth/ForgotPassword.vue';
import verify from '@/components/auth/verify.vue';

// Front page
import Home from '../components/FrontPage/Home.vue';
import AboutUs from '@/components/FrontPage/AboutUs.vue';
import Teachers from '@/components/FrontPage/Teachers.vue';
import StuApp from '@/components/FrontPage/StuApp.vue';
import ContactUs from '@/components/FrontPage/ContactUs.vue';

// General pages
import Dashboard from '@/views/Dashboard.vue';
import GuardianList from '@/views/GuardianList.vue';
import Guardian from '@/views/guardian/Guardian.vue';
import Teacher from '@/views/TeacherList.vue';
import Staff from '@/views/StaffList.vue';

// Teacher pages
import StudentPerformance from '@/views/teacher/StudentPerformance.vue';
import HealthRecord from '@/views/teacher/HealthRecord.vue';
import UploadClassSchedule from '@/views/teacher/UploadClassSchedule.vue';
import UploadCurriculum from '@/views/teacher/UploadCurriculum.vue';

// Staff pages
import CreatingClassroom from '@/views/staff/CreatingClassroom.vue';
import CreatingEvent from '@/views/staff/CreatingEvent.vue';
import CreatingDivision from '@/views/staff/CreatingDivision.vue';
import CreatingPosition from '@/views/staff/CreatingPosition.vue';
import CreatingPermission from '@/views/staff/CreatingPermission.vue';
import BusRegistration from '@/views/staff/BusRegistration.vue';
import StudentBusAssignment from '@/views/staff/StudentBusAssignment.vue';
import IssuingInvoice from '@/views/staff/IssuingInvoice.vue';
import VerifyingReceipt from '@/views/staff/VerifyingReceipt.vue';
import RegisterAuthorisedPerson from '@/views/staff/RegisterAuthorisedPerson.vue';
import AssignAuthorizedStudent from '@/views/staff/AssignAuthorizedStudent.vue';
import TeacherRegistration from '@/views/staff/TeacherRegistration.vue';
import StaffRegistration from '@/views/staff/StaffRegistration.vue';
import StudentRegistration from '@/views/staff/StudentRegistration.vue';
import RoleCreating from '@/views/staff/RoleCreating.vue';
import UserRoleAssignment from '@/views/staff/UserRoleAssignment.vue';

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  // Auth
  { path: '/auth/login', name: 'login', component: LoginForm },
  { path: '/auth/register', name: 'register', component: RegisterForm },
  { path: '/auth/forgot-password', name: 'forgot-password', component: ForgotPassword },
  { path: '/auth/verify', name: 'verify', component: verify },

  // Front page
  { path: '/frontpage/home', name: 'home', component: Home },
  { path: '/frontpage/aboutus', name: 'aboutus', component: AboutUs },
  { path: '/frontpage/teachers', name: 'teachers', component: Teachers },
  { path: '/frontpage/contactus', name: 'contactus', component: ContactUs },
  { path: '/frontpage/stuapp', name: 'StuApp', component: StuApp },

  // General views
  { path: '/guardian-list', name: 'GuardianList', component: GuardianList },
  { path: '/guardian', name: 'Guardian', component: Guardian },
  { path: '/teacher-list', name: 'TeacherList', component: Teacher },
  { path: '/staff-list', name: 'StaffList', component: Staff },

  // Teacher routes
  { path: '/teacher/student-performance', name: 'StudentPerformance', component: StudentPerformance },
  { path: '/teacher/health-record', name: 'HealthRecord', component: HealthRecord },
  { path: '/teacher/upload-class-schedule', name: 'UploadClassSchedule', component: UploadClassSchedule },
  { path: '/teacher/upload-curriculum', name: 'UploadCurriculum', component: UploadCurriculum },

  // Staff routes
  { path: '/staff/creating-classroom', name: 'CreatingClassroom', component: CreatingClassroom },
  { path: '/staff/creating-event', name: 'CreatingEvent', component: CreatingEvent },
  { path: '/staff/creating-division', name: 'CreatingDivision', component: CreatingDivision },
  { path: '/staff/creating-position', name: 'CreatingPosition', component: CreatingPosition },
  { path: '/staff/creating-permission', name: 'CreatingPermission', component: CreatingPermission },
  { path: '/staff/bus-registration', name: 'BusRegistration', component: BusRegistration },
  { path: '/staff/student-bus-assignment', name: 'StudentBusAssignment', component: StudentBusAssignment },
  { path: '/staff/issuing-invoice', name: 'IssuingInvoice', component: IssuingInvoice },
  { path: '/staff/verifying-receipt', name: 'VerifyingReceipt', component: VerifyingReceipt },
  { path: '/staff/register-authorised-person', name: 'RegisterAuthorisedPerson', component: RegisterAuthorisedPerson },
  { path: '/staff/assign-authorized-student', name: 'AssignAuthorizedStudent', component: AssignAuthorizedStudent },
  { path: '/staff/teacher-registration', name: 'TeacherRegistration', component: TeacherRegistration },
  { path: '/staff/staff-registration', name: 'StaffRegistration', component: StaffRegistration },
  { path: '/staff/student-registration', name: 'StudentRegistration', component: StudentRegistration },
  { path: '/staff/role-creating', name: 'RoleCreating', component: RoleCreating },
  { path: '/staff/user-role-assignment', name: 'UserRoleAssignment', component: UserRoleAssignment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
