<template>
  <div class="discussion-container">
    <div class="discussion-content">
      <div class="user-comment" >
        <div class="comment-post">
          <div class="comment-avatar">
            <el-image :src="defaultAvatar"></el-image>
          </div>
          <div class="comment-texteditor">
            <textarea v-model="saveCommentRequestDto.text" style="width: 70%;"></textarea>
          </div>
        </div>
        <div>
          <el-button @click="saveComment">Post comment</el-button>
        </div>
      </div>
      <div class="comment-container">
        <div v-for="(comment, index) in commentList" :key="index">
          <DiscussionComment
            :comment="comment"
            style="margin-bottom: 16px"
          ></DiscussionComment>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {useRoute} from "vue-router";
import DiscussionComment from "./DiscussionComment.vue";
import commentApi from "@/api/comment-api";
let route = useRoute()
const defaultAvatar = require("@/assets/logo/default-avatar-1.png");
let prop = defineProps(['commentList'])
let emits = defineEmits(['getListComment'])
let saveCommentRequestDto = ref(
    {
      challengeId:route.params.challengeId,
      text:"",
      code:""
    }
)
async function saveComment() {
    await commentApi.saveComment(saveCommentRequestDto.value)
    await emits('getListComment')
}

</script>

<style scoped>
.discussion-container {
  display: flex;
  gap: 24px;
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 100%;
  margin: 0 60px;
}
.discussion-content {
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  outline-offset: -1px;
  background-color: var(--color-white, #fff);
  color: var(--color-text-dark, #0e141e);
  padding: 30px;
}
.comment-header {
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}
.input-sort {
  width: 300px;
  margin-left: 40px;
}
.comment-avatar {
  width: 40px;
  height: 40px;
}
.comment-post {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
.request-login-container {
  margin-top: 10px;
}
.banner {
  padding: 20px;
  border: 1px solid #ffee7e;
  border-radius: 5px;
  background: #fffbe4;
  text-align: center;
  font-weight: 500;
}
.login-link {
  cursor: pointer;
  padding: 0 4px;
  color: blue;
  text-decoration: underline;
}
.right-pane {
  box-sizing: border-box;
  margin: 0 0 30px 30px;
  width: 280px;
}
.text-sec-headline-s {
  color: #738f93;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
}
.ui-icon-label {
  margin-left: 8px;
  color: blue;
  cursor: pointer;
}
.help-icon {
  color: #b7c9cc;
  cursor: pointer;
}
.link-wrapper {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}
.link-wrapper:hover > a > .help-icon {
  color: #738f93;
}
.comment-texteditor{
  width: 100%;
}
</style>
