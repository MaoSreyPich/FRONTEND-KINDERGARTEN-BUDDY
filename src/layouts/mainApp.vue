<template>
  <n-space vertical>
    <!-- LAYOUT -->
    <n-layout has-sider style="height: 100vh">
      <n-layout-sider
        v-if="!isMobile"
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="collapsed"
        :width="260"
        :native-scrollbar="false"
        :inverted="inverted"
        style="border-right: 1px solid gray"
      >
        <div class="flex flex-col">
          <div class="flex items-center gap-4 px-7 pt-5">
            <img
              class="w-8 h-8"
              src="../assets/logo/naivelogo-BdDVTUmz.svg"
              alt="LOGO-IMG"
            />
            <span
              class="text-xl"
              :class="inverted ? 'text-white' : 'text-black'"
            >
              Naive UI
            </span>
          </div>
          <n-divider class="px-4" />
          <div class="mt-[-15px] px-1">
            <n-menu
              v-model:value="activeMenu"
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              :router="true"
              @update:value="handleMenuClick"
            />
          </div>
        </div>
      </n-layout-sider>

      <n-layout>
        <!-- Header -->
        <n-layout-header
          :inverted="inverted"
          bordered
          class="flex justify-between items-center pr-4 pl-5 h-19"
          :style="{
            borderBottom: '1px solid',
            borderColor: inverted ? 'red' : 'gray',
          }"
        >
          <n-tooltip placement="bottom" trigger="hover" v-if="isMobile">
            <template #trigger>
              <n-button
                style="width: 35px; height: 35px"
                @click="sidebarVisible = true"
              >
                <n-icon size="24" :color="inverted ? 'white' : 'black'">
                  <component :is="MenuIcon" />
                </n-icon>
              </n-button>
            </template>
            <span> MENU </span>
          </n-tooltip>

          <!-- Search Input -->
          <div class="w-60 md:w-80">
            <n-input size="large" placeholder="Search">
              <template #prefix>
                <n-icon :component="SearchIcon" />
              </template>
            </n-input>
          </div>

          <!-- Dark/Light Mode -->
          <div class="flex gap-5">
            <n-button
              circle
              style="width: 35px; height: 35px"
              @click="toggleDarkMode"
            >
              <template #icon>
                <n-icon size="22" :color="inverted ? 'white' : 'gold'">
                  <component :is="inverted ? MoonIcon : SunnyIcon" />
                </n-icon>
              </template>
            </n-button>

            <n-dropdown :options="options">
              <n-button
                circle
                shape="square"
                style="width: 35px; height: 35px; padding: 0"
              >
                <div>
                  <img
                    src="../assets/images/869fa2c01de5e66849a63adbff52cc79.jpg"
                    alt="USER-IMG"
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      border-radius: 50%;
                    "
                  />
                </div>
              </n-button>
            </n-dropdown>
          </div>
        </n-layout-header>
        <!-- End Header -->

        <!-- Main Content -->
        <n-layout-content class="p-4 flex-1">
            <router-view />
        </n-layout-content>
        <!-- End Main Content -->
      </n-layout>
    </n-layout>
    <!-- Drawer Sidebar (Mobile Only) -->
    <n-drawer
      v-model:show="sidebarVisible"
      placement="left"
      :width="260"
      :native-scrollbar="false"
      :style="{
        backgroundColor: inverted ? 'black' : 'white',
      }"
    >
      <div class="flex flex-col">
        <div class="flex items-center gap-4 px-7 pt-5">
          <img
            class="w-8 h-8"
            src="../assets/logo/naivelogo-BdDVTUmz.svg"
            alt="LOGO-IMG"
          />
          <span class="text-xl" :class="inverted ? 'text-white' : 'text-black'">
            Naive UI
          </span>
        </div>
        <n-divider class="px-4" />
        <div class="mt-[-15px] px-1">
          <n-menu
            v-model:value="activeMenu"
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :router="true"
          />
        </div>
      </div>
    </n-drawer>
  </n-space>
</template>

<script>
import {
  PeopleSharp as PeopleIcon,
  Person as PersonIcon,
  Settings as SettingIcon,
  StorefrontSharp as StorefrontIcon,
  Newspaper as NewspaperIcon,
  Moon as MoonIcon,
  Sunny as SunnyIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
  AddCircleSharp as AddNew,
} from "@vicons/ionicons5";

import { NIcon, NTag, NButton } from "naive-ui";
import {
  defineComponent,
  h,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from 'vue-router';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  setup() {
    const inverted = ref(false);
    const route = useRoute();
    const activeMenu = ref(route.path);
    const toggleDarkMode = () => {
      inverted.value = !inverted.value;
    };

    const isMobile = ref(false);
    const sidebarVisible = ref(false);
    const collapsed = ref(false);

    const handleResize = () => {
      const width = window.innerWidth;
      isMobile.value = width <= 1024;
      if (!isMobile.value) {
        sidebarVisible.value = false;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const handleMenuClick = () => {
      if (isMobile.value) {
        sidebarVisible.value = false;
      }
    };

    const menuOptions = [
      {
        label: "Dashboard",
        key: "/dashboard",
        icon: renderIcon(StorefrontIcon),
        path: "/dashboard",
      },
      {
        label: "Staff",
        key: "/staff",
        icon: renderIcon(PeopleIcon),
        path: "/staff",
        children: [
          { label: 'Creating Classroom', key: 'creating-classroom', icon: null, route: '/staff/creating-classroom' },
          { label: 'Creating Event', key: 'creating-event', icon: null, route: '/staff-panel/creating-event' },
          { label: 'Creating Division', key: 'creating-division', icon: null, route: '/staff-panel/creating-division' },
          { label: 'Creating Position', key: 'creating-position', icon: null, route: '/staff-panel/creating-position' },
          { label: 'Creating Permission', key: 'creating-permission', icon: null, route: '/staff-panel/creating-permission' },
          { label: 'Bus Registration', key: 'bus-registration', icon: null, route: '/staff-panel/bus-registration' },
          { label: 'Student Assignment to Bus', key: 'student-bus-assignment', icon: null, route: '/staff-panel/student-bus-assignment' },
          { label: 'Issuing Invoice', key: 'issuing-invoice', icon: null, route: '/staff-panel/issuing-invoice' },
          { label: 'Verifying Receipt', key: 'verifying-receipt', icon: null, route: '/staff-panel/verifying-receipt' },
          { label: 'Register Authorised Person', key: 'register-authorised-person', icon: null, route: '/staff-panel/register-authorised-person' },
          { label: 'Authorized Person Assignment to Student', key: 'assign-authorized-student', icon: null, route: '/staff-panel/assign-authorized-student' },
          { label: 'Teacher Registration', key: 'teacher-registration', icon: null, route: '/staff-panel/teacher-registration' },
          { label: 'Staff Registration', key: 'staff-registration', icon: null, route: '/staff-panel/staff-registration' },
          { label: 'Student Registration', key: 'student-registration', icon: null, route: '/staff-panel/student-registration' },
          { label: 'Role Creating', key: 'role-creating', icon: null, route: '/staff-panel/role-creating' },
          { label: 'User Assignment to Role', key: 'user-role-assignment', icon: null, route: '/staff-panel/user-role-assignment' }
        ],
      },
      {
        label: "Teacher",
        key: "/teacher",
        icon: renderIcon(PersonIcon),
        path: "/teacher",
        children: [
        { label: 'Student Performance', key: 'student-performance', icon: null, route: '/teacher-panel/student-performance' },
        { label: 'Health Record', key: 'health-record', icon: null, route: '/teacher-panel/health-record' },
        { label: 'Upload Class Schedule', key: 'upload-class-schedule', icon: null, route: '/teacher-panel/upload-class-schedule' },
        { label: 'Upload Curriculum', key: 'upload-curriculum', icon: null, route: '/teacher-panel/upload-curriculum' }
        ]
      },
      {
        label: "Guardian",
        key: "/guardian",
        icon: renderIcon(PeopleIcon),
        path: "/guardian",
        route: '/guardian-list',
      },
      {
        label: "Attendance",
        key: "Attendance",
        icon: renderIcon(NewspaperIcon),
      },
      {
        label: "User",
        key: "/user",
        icon: renderIcon(PersonIcon),
        path: "/user",
      },
      {
        label: "Setting",
        key: "Setting",
        icon: renderIcon(SettingIcon),
      },
      {
        label: "Dance Dance Dance",
        key: "Dance Dance Dance",
        icon: renderIcon(NewspaperIcon),
        children: [
          {
            type: "group",
            label: "People",
            key: "people",
            children: [
              {
                label: "Narrator",
                key: "narrator",
                icon: renderIcon(PersonIcon),
              },
              {
                label: "Sheep Man",
                key: "sheep-man",
                icon: renderIcon(PersonIcon),
              },
            ],
          },
        ],
      },
    ];

    const options = [
      {
        label: "Profile",
        key: "profile",
        icon: renderIcon(UserIcon),
      },
      {
        label: "Edit Profile",
        key: "editProfile",
        icon: renderIcon(EditIcon),
      },
      {
        label: "Logout",
        key: "logout",
        icon: renderIcon(LogoutIcon),
      },
    ];

    watch(
      () => route.path,
      (newPath) => {
        activeMenu.value = newPath; // keep menu in sync with route
      }
    );

    return {
      inverted,
      collapsed,
      isMobile,
      sidebarVisible,
      menuOptions,
      MoonIcon,
      SunnyIcon,
      SearchIcon,
      MenuIcon,
      PersonIcon,
      AddNew,
      toggleDarkMode,
      handleMenuClick,
      options,
      activeMenu,
    };
  },
});
// Theme for black border on focus/hover
const themeOverrides = {
  Input: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
  },
  Select: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
  }
}
</script>
<style>
.n-layout-sider .n-layout-toggle-button {
  display: none;
}
.n-button {
  padding: 0;
}
:deep(.n-input:hover .n-input__state-border),
:deep(.n-input:focus-within .n-input__state-border),
:deep(.n-select:hover .n-base-selection .n-base-selection__border),
:deep(.n-select:focus-within .n-base-selection .n-base-selection__border) {
  border-color: black !important;
  box-shadow: 0 0 0 1px black !important;
  border-width: 1px;
  border-radius: 6px;
}
</style>
