<template>
  <div class="discussion-container">
    <div class="discussion-content">
      <div class="comment-header">
        <div>Sort {{ sortParams.comments }} Dicusstions, By:</div>
        <div>
          <el-select
            v-model="sortParams.orderBy"
            class="m-2"
            placeholder="Select"
          >
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="input-sort">
          <el-input
            v-model="sortParams.keyword"
            placeholder="Search comments..."
          ></el-input>
        </div>
      </div>
      <div class="user-comment" v-if="isLogin">
        <div class="comment-post">
          <div class="comment-avatar">
            <el-image :src="defaultAvatar"></el-image>
          </div>
          <div class="comment-texteditor">
            <textarea style="width: 70%;"></textarea>
          </div>
        </div>
        <div>
          <el-button>Post comment</el-button>
        </div>
      </div>
      <div v-else>
        <div class="request-login-container">
          <div class="banner">
            <p>
              Please<!-- -->
              <a class="login-link">Login</a>
              <!-- -->in order to post a comment
            </p>
          </div>
        </div>
      </div>
      <div class="comment-container">
        <div v-for="(comment, index) in comments" :key="index">
          <DiscussionComment
            :comment="comment"
            style="margin-bottom: 16px"
          ></DiscussionComment>
        </div>
      </div>
    </div>
    <div class="discussion-help">
      <aside class="right-pane challenge-sidebar">
        <div class="challenge-sidebar-help">
          <h2 class="text-sec-headline-s">Need Help?</h2>
          <hr class="hr-line-light" />
          <div class="mlB">
            <div class="link-wrapper">
              <a
                ><el-icon class="help-icon"><Reading /></el-icon
                ><span class="ui-icon-label">View editorial</span></a
              >
            </div>
            <div class="link-wrapper">
              <a
                ><el-icon class="help-icon"><TrophyBase /></el-icon
                ><span class="ui-icon-label">View top submissions</span></a
              >
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DiscussionComment from "./DiscussionComment.vue";

const defaultAvatar = require("@/assets/logo/default-avatar.jpg");

const isLogin = ref(true);
const comments = ref([
  {
    name: "A",
    day: "1 day ago",
    content:
      "Test case 7 input array is const a = [4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]; there are 24 4s and 25 5s in the input. So the expected return value should be 49. Not 50 as given.",
    count: 4,
    children: [
      {
        name: "A1",
        day: "1 day ago",
        content: "aksljdaslkjdaskl;",
        children: [
          {
            name: "A3",
            day: "1 day ago",
            content: "Child 3",
          },
        ],
      },
      { name: "A2", day: "1 day ago", content: "aslkdjaskljdas" },
    ],
  },
  {
    name: "B",
    day: "22/06/2023",
    content: "int[] arr = new int[100];",
    count: 1,
  },
  {
    name: "C",
    day: "1 day ago",
    content: "fun pickingNumbers(a: Array<Int>): Int ",
    count: 1,
  },
  {
    name: "D",
    day: "1 day ago",
    content:
      "How come {1 2 2 1 2} will become subarray, it should be multiset right?",
    count: 1,
  },
]);
const sortParams = ref({
  comments: 0,
  orderBy: 0,
  keyword: "",
});
const sortOptions = ref([
  {
    value: 0,
    label: "recency",
  },
  {
    value: 1,
    label: "votes",
  },
]);
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
