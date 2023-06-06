<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="container-header">
        <div class="common-header">
            <slot name="title"></slot>
            <slot name="action"></slot>
        </div>
      </el-header>
      <el-main class="container-content">
        <div class="content">
            <slot></slot>
        </div>
      </el-main>
      <el-footer class="footer">Show all</el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">


</script>
<style scoped>
.container {
  width: 420px;
}
.container-header {
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
}
.content {
  padding: 35px;
  border: 2px dashed #b7c9cc;
  text-align: center;
  font-size: 14px;
}
.footer {
  display: flex;
  border-top: 1px solid #b7c9cc;
  height: 30px;
  font-size: 15px;
  font-weight: bolder;
  justify-content: center;
  padding: 17px;
  align-items: center;

}
</style>
