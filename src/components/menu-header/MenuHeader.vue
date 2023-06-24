<!--suppress TypeScriptValidateTypes -->
<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      :ellipsis="false"
  >
    <div class="logo">
      <img class="logo-images" :src="imageSrc" alt="Logo">
    </div>
    <h3 class="dashboard-page">CodeLab</h3>
    <el-menu-item index="1">Prepare</el-menu-item>
    <el-menu-item index="2">Certify</el-menu-item>
    <el-menu-item index="3">Compete</el-menu-item>
    <div class="flex-grow"/>
    <div class="user-action">
      <el-input
          v-model="input"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
      />
    </div>
    <el-dropdown trigger="click">
      <el-icon class=" user-action icon">
        <Message/>
      </el-icon>
      <template #dropdown>
        <common-dropdown>
          <template #title>Messages</template>
          <template #default>You have no unread message</template>
        </common-dropdown>
      </template>
    </el-dropdown>
    <el-dropdown trigger="click">
      <el-icon class="user-action icon">
        <Bell/>
      </el-icon>
      <template #dropdown>
        <div class="notification-dropdown">
          <common-dropdown>
            <template #title>
              Notifications
            </template>
            <template #action>
              <a class="archive-all-style" href="">Archive all</a>
            </template>
            <template #default>You have no unread notifications</template>
          </common-dropdown>
        </div>
      </template>
    </el-dropdown>
    <div class="user-action icon-divine">|</div>
    <feature-dropdown></feature-dropdown>
    <el-dropdown trigger="click">
      <div class="user-action icon user-avatar">
        <svg viewBox="0 0 24 24" width="1em" height="1em" class=" ui-svg-icon" fill="currentColor">
          <path
              d="M21 23c-.6 0-1-.4-1-1v-2.2c0-1.9-1.6-3.4-3.5-3.4h-9c-1.9 0-3.5 1.5-3.5 3.4V22c0 .6-.5 1-1 1s-1-.4-1-1v-2.2c0-3 2.5-5.4 5.5-5.4h9c3 0 5.5 2.4 5.5 5.4V22c0 .6-.5 1-1 1zm-9-11.1c-3 0-5.4-2.4-5.4-5.4S9 1 12 1s5.4 2.4 5.4 5.4-2.4 5.5-5.4 5.5zM12 3c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4S13.9 3 12 3z"></path>
        </svg>
      </div>
      <template #dropdown>
        <div class="user-dropdown-information">
          <el-dropdown-menu>
            <el-dropdown-item style="display: flex;justify-content: center">
              <el-button class="count-button"  type="primary">Hackos: 341</el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="profile">
                <div class="title">Profile</div>
                <div class="profile-process">
                  <el-progress :width="45" type="circle" :percentage="50" color="rgb(27, 169, 76)"/>
                </div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="profile">
                <div class="title">Dark Mode</div>
              </div>
              <div class="profile-process">
                <el-switch
                    v-model="value"
                    style="--el-switch-on-color: #13ce66;"
                />
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Leaderboard</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Settings</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Bookmarks</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Network</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Submissions</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Administration</div>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div class="profile">
                <div class="title">Logout</div>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </div>
      </template>
    </el-dropdown>
  </el-menu>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import CommonDropdown from "@/components/drop-down/CommonDropdown.vue";
import FeatureDropdown from "@/components/drop-down/FeatureDropdown.vue";
import {Bell, Message, Search} from "@element-plus/icons-vue";

const activeIndex2 = ref('1')
let value = ref(true)
let input = ref()
// eslint-disable-next-line @typescript-eslint/no-var-requires
let imageSrc = require('@/assets/logo/logo-black (1).png')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
:deep(.el-progress__text) {
 font-size: 13px !important;
}
.dashboard-page {
  background: #000000;
  font-weight: bold;
  font-size: 18px;
  margin-right: 5px;
  color: white;
  align-self: center;
}

.icon {
  color: #ffffff;
  font-size: 1.7rem;
  align-self: center;
}

li {
  align-self: center !important;
}

.user-action {
  align-self: center;
  margin: 0 15px;
}

.user-action:hover {
  cursor: pointer;
  font-size: 1.9rem;
}

.icon-divine {
  color: #ffffff;
  font-size: 1rem;
  align-self: center;
}

.flex-grow {
  flex-grow: 1;
}

.logo {
  padding: 0 20px;
  cursor: pointer;
}

.logo-images {
  width: 50px;
  height: 50px;
}

.notification-dropdown :deep(.common-header) {
  display: flex;
  justify-content: space-between;
}

.archive-all-style {
  color: #ffffff;
  text-decoration: none;
}

.archive-all-style:hover {
  cursor: pointer;
  text-decoration: underline;
}

.user-avatar {
  border-radius: 50%;
  background-color: #e7eeef;
  text-align: center;
  display: flex;
  width: 35px;
  justify-content: center;
  padding: 7px;
  height: 32px;
  align-items: center;
  color: #000000;
  margin-right: 30px;
  font-size: 1rem !important;
}

.user-dropdown-information {
  width: 210px;
}

.profile {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 800;
}
.count-button{
  display: flex !important;
  width: 160px;
  justify-content: center;

}
</style>
