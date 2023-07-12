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
          <a class="comment-name">{{ comment.username }}</a>
          <div class="comment-icon">
            <el-icon><Clock /></el-icon>
          </div>
          <div class="comment-day">{{ comment.createdAt }}</div>
          <div class="total-comment" v-if="closeComment">
            {{ comment.count }} comments
          </div>
        </div>
        <div v-if="!closeComment">
          <div>
            {{ comment.text }}
          </div>
          <div class="code-background" v-html="comment.code">
          </div>
          <div class="comment-info">
            <div class="comment-info-button">
              <el-icon><ArrowDown /></el-icon>
            </div>
            <el-button
                v-if="comment.isParent == true"
                text
              type="primary"
              @click="addCommentContainer(true)"
              >Add Comment</el-button
            >
          </div>
          <div v-if="openAddComment" class="text-editor">
            <textarea v-model="saveCommentRequestDto.text" style="width: 100%"></textarea>
            <div>
              <el-button @click="replyComment"
                >Add Comment</el-button
              >
              <el-button @click="addCommentContainer(false)">Close</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="child in replyCommentList" :key="child">
        <discussion-comment :comment="child"></discussion-comment>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import {defineProps, onMounted, ref} from "vue";
import commentApi from "@/api/comment-api";
import {useRoute} from 'vue-router'
const defaultAvatar = require("@/assets/logo/default-avatar.jpg");
let route = useRoute()
const props = defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  }

});
let saveCommentRequestDto = ref({
      parentId: props.comment.id,
      challengeId:route.params.challengeId,
      text:"",
})

const closeComment = ref(false);
const openAddComment = ref(false);
const closeContainer = () => {
  closeComment.value = !closeComment.value;
};

const addCommentContainer = (value:any) => {
  openAddComment.value = value;
};
let replyCommentList = ref()
async function getReplyComments() {
  await commentApi.getListReplyComment(props.comment.id).then((response:any) => {
    replyCommentList.value = response.result
  })
}
async function replyComment() {
  await commentApi.replyComment(saveCommentRequestDto.value)
  await getReplyComments()
  openAddComment.value = false
}
onMounted(getReplyComments)
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
  width: 100%;
}
.user-comment {
  position: relative;
  margin: 16px 0 0 40px;
  padding: 0 16px 16px 16px;
  border-left: 1px solid #979faf;
}
.text-editor {
  display: flex;
  flex-direction: column;
  background: #f8f9fb;
}
.code-background {
  background-color: gray;
}
</style>
