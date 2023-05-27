<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1">
      <template #title>
        <el-image></el-image>
      </template>
      <h3 class="dashboard-page">CodeLab</h3>
    </el-menu-item>
    <el-menu-item index="2">Info</el-menu-item>
    <el-menu-item index="3">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style>
.dashboard-page {
  font-weight: bold;
  font-size: 18px;
}
</style>
