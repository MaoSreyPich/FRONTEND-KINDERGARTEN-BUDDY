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
        <n-layout-content>
          <div class="p-4 flex-1">
            <router-view />
          </div>
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
</script>
<style>
.n-layout-sider .n-layout-toggle-button {
  display: none;
}
.n-button {
  padding: 0;
}
</style>
