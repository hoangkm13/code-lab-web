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
    <el-menu-item index="1">
      <h3 class="dashboard-page">CodeLab</h3>
    </el-menu-item>
    <el-menu-item index="2">Prepare</el-menu-item>
    <el-menu-item index="3">Certify</el-menu-item>
    <el-menu-item index="4">Compete</el-menu-item>
    <div class="flex-grow"/>
    <div class="user-action">
      <el-input
          v-model="input"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
      />
    </div>
    <el-icon class=" user-action icon">
      <Message/>
    </el-icon>
    <el-icon class="user-action icon">
      <Bell/>
    </el-icon>
    <div class="user-action icon-divine">|</div>
    <div class="user-action icon">
      <el-icon><Grid /></el-icon>
    </div>
    <div class="user-action icon">
      <el-icon><UserFilled /></el-icon>
    </div>
  </el-menu>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Bell, Grid, Message, Search, UserFilled} from "@element-plus/icons-vue";

let input = ref()
const activeIndex2 = ref('1')

// eslint-disable-next-line @typescript-eslint/no-var-requires
let imageSrc = require('@/assets/logo/logo-black (1).png')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style scoped>
.dashboard-page {
  font-weight: bold;
  font-size: 18px;
  margin-right: 5px;
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
  padding: 0 20px;
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
  cursor:pointer;
}
.logo-images {
  width: 50px;
  height: 50px;
}
</style>
