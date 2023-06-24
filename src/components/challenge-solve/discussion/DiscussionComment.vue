<template>
  <div class="user-comment">
    <div class="close-container" @click="closeContainer">
      <el-icon v-if="!closeComment"><RemoveFilled /></el-icon>
      <el-icon v-else><CirclePlusFilled /></el-icon>
    </div>
    <div class="comment-container">
      <div class="comment-avatar">
        <el-image
          :src="defaultAvatar"
          style="width: 40px; height: 40px"
        ></el-image>
      </div>
      <div class="comment-text">
        <div class="comment-header">
          <a class="comment-name">{{ comment.name }}</a>
          <div class="comment-icon">
            <el-icon><Clock /></el-icon>
          </div>
          <div class="comment-day">{{ comment.day }}</div>
          <div class="total-comment" v-if="closeComment">
            {{ comment.count }} comments
          </div>
        </div>
        <div v-if="!closeComment">
          <div>
            {{ comment.content }}
          </div>
          <div class="comment-info">
            <div>0</div>
            <div class="comment-info-button">
              <el-icon><ArrowDown /></el-icon>
            </div>
            <el-button link type="primary">Add Comment</el-button>
            <el-button link type="primary">Permalink</el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!closeComment">
      <div v-for="child in comment.children" :key="child">
        <discussion-comment :comment="child"></discussion-comment>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const defaultAvatar = require("@/assets/logo/default-avatar.jpg");

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  },
});
const closeComment = ref(false);
const closeContainer = () => {
  closeComment.value = !closeComment.value;
  console.log("closeComment", closeComment.value);
};
</script>

<style scoped>
.total-comment {
  padding: 8px 12px;
  margin-left: 12px;
  border: 1px solid #979faf;
}
.close-container {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: -8px;
  background: white;
}
.comment-info-button {
  margin: 0 8px;
  border-right: 1px solid #979faf;
  padding-right: 8px;
}
.comment-info {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}
.comment-day {
  color: #979faf;
}
.comment-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 4px;
}
.comment-name {
  color: blue;
  cursor: pointer;
}
.comment-header {
  display: flex;
  align-items: center;
}
.comment-container {
  display: flex;
  gap: 12px;
}
.comment-text {
  display: flex;
  gap: 12px;
  flex-direction: column;
}
.user-comment {
  position: relative;
  margin: 16px 0 0 40px;
  padding: 0 16px 16px 16px;
  border-left: 1px solid #979faf;
}
</style>
