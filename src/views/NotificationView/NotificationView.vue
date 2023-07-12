<template>
    <section v-loading.fullscreen.lock="loading" class="list-container left-pane">
        <div class="container content">
            <div class="notification-container">
                <h1>Notifications</h1>
                <div v-if="listNotifcation">
                    <div v-for="noti in listNotifcation" class="notification">
                        <div v-if="noti.notification.isSeen === false" v-on:click="markAsRead(noti.notification.id)">
                            <el-icon title="Mark as read" class="uncheck-icon">
                                <CircleCheck />
                            </el-icon>
                        </div>
                        <div v-if="noti.notification.isSeen === true"><el-icon class="check-icon">
                                <CircleCheck />
                            </el-icon></div>
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                            <h4 class="notification-title cursor">{{ noti.notificationTemplate.content +
                                (noti.notification.privateContent ? noti.notification.privateContent : "") }}</h4>
                            <div class="notification-actions">
                                <span class="small notification-timestamp">Posted On: {{ noti.notification.createdAt
                                }}</span>
                                <span>
                                    <button type="button" class="btn btn-outline-danger"
                                        v-on:click="deleteNotifcation(noti.notification.id)"><el-icon :size="20">
                                            <Delete />
                                        </el-icon>Delete</button>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div v-if="!listNotifcation">
                    <h4 class="notification-title">No new notifications yet, but don't worry, we'll let you know as soon as
                        there's an update!</h4>
                </div>
            </div>

        </div>
    </section>
</template>
<script lang="ts" setup>
import notificationApi from "@/api/notification-api";
import { onMounted, ref } from "vue";
import { CircleCheck } from "@element-plus/icons-vue";

const listNotifcation = ref()
const loading = ref(true)

async function getAllNotification() {
    try {
        loading.value = true
        const response = await notificationApi.getAllNotification()
        listNotifcation.value = response.result.content
        listNotifcation.value.forEach((element: any) => {
            let createdDate = new Date(element.notification.createdAt);
            let updatedDate = new Date(element.notification.updatedAt);
            element.notification.createdAt = createdDate.toDateString() + " at " + createdDate.toLocaleTimeString()
            element.notification.updatedAt = updatedDate.toDateString() + " at " + updatedDate.toLocaleTimeString()
        });;
        console.log(listNotifcation.value);
        loading.value = false
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

async function deleteNotifcation(notificationId: any) {
    try {
        const response = await notificationApi.deleteNotification(notificationId);
        console.log(response);
        await getAllNotification();
    } catch (error) {
        console.log(error)
    }
}

async function markAsRead(notificationId: any) {
    try {
        const response = await notificationApi.updateNotification(notificationId);
        console.log(response);

        await getAllNotification();
    } catch (error) {
        console.log(error);
    }
}


onMounted(async () => {
    await getAllNotification();
});
</script>
<style>
.notification-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notification-title,
.notification-timestamp {
    font-weight: 300;
}

.notification-timestamp {
    width: 200px;
    font-size: 14px;
    color: #666;
}

.notification {
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.notification-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn {
    display: flex;
    align-items: center;
    gap: 5px;
}

.check-icon,
.uncheck-icon {
    font-size: 20px;
}

.uncheck-icon:hover {
    color: green;
    cursor: pointer;
}

.check-icon {
    color: green;
}
</style>