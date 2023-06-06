<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <menu-header></menu-header>
      </el-header>
      <el-main>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import MenuHeader from "@/components/menu-header/MenuHeader.vue"

</script>
<style scoped>
:deep(header.el-header) {
  padding: 0;
}
</style>
