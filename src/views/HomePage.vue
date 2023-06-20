<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <menu-header></menu-header>
      </el-header>
      <el-main>
        {{userStore}}
        <router-view></router-view>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import MenuHeader from "@/components/menu-header/MenuHeader.vue"

const userStore = useUserStore()
</script>
<style scoped>
:deep(header.el-header) {
  padding: 0;
}

</style>
