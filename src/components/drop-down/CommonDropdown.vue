<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="container-header">
        <div class="common-header">
          <slot name="title"></slot>
          <slot name="action" @click="markAsReadAll()"></slot>
        </div>
      </el-header>
      <el-main class="container-content">
        <div class="content" v-if="unreadNotiLength === 0">
          <slot name="default"></slot>
        </div>
        <div v-if="unreadNotiLength > 0" v-for="noti in listNotifcation">
          <div style="display: flex; align-items: center; gap: 20px;" v-if="noti.notification.isSeen === false">
            <el-icon style="font-size: 15px; color: blue;">
              <Bell />
            </el-icon>
            <span>{{ noti.notificationTemplate.content +
              (noti.notification.privateContent ? noti.notification.privateContent : "") }}</span>
          </div>
        </div>
      </el-main>
      <el-footer class="footer">
        <a href="/notification">Show all</a></el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">

import { Bell } from "@element-plus/icons-vue";
import notificationApi from "@/api/notification-api";
import { onMounted, ref } from "vue";

const listNotifcation = ref()
const unreadNotiLength = ref()

async function getAllNotification() {
  try {
    const response = await notificationApi.getAllNotification()
    listNotifcation.value = Array.from(response.result.content).filter((noti: any) => {
      return noti.notification.isSeen === false
    })

    unreadNotiLength.value = Array.from(listNotifcation.value).length

    console.log(listNotifcation.value);
  } catch (error) {
    console.log(error);
  }
}

async function markAsReadAll() {
  try {
    const response = await notificationApi.markAsReadAll()
    console.log(response);

    await getAllNotification()
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await getAllNotification();
});
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
