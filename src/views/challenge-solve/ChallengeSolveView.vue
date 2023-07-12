<template>
  <div class="challenge-solve-container">
    <div class="feature-tab">
      <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="tabClick">
        <el-tab-pane label="Problem" name="problem">
          <problem-screen></problem-screen
          >
        </el-tab-pane>
        <el-tab-pane label="Submissions" name="submission">
          <el-card>
            <submission-history-table :submission-list="subMissionList"></submission-history-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Discussions" name="discussion">
          <challenge-discussion @get-list-comment="getListComment"  :comment-list="commentList" :reply-comments="replyCommentList"></challenge-discussion>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import type {TabsPaneContext} from 'element-plus'
import {useRoute} from "vue-router";
import ProblemScreen from "@/components/challenge-solve/ProblemScreen.vue";
import ChallengeDiscussion from "@/components/challenge-solve/discussion/ChallengeDiscussion.vue";
import SubmissionHistoryTable from "@/components/submission/SubmissionHistoryTable.vue";
import testcaseApi from "@/api/testcase-api";
import commentApi from "@/api/comment-api";



let activeName = ref('problem')
let subMissionList = ref([])
let commentList = ref()

let route = useRoute()
async function getListComment() {
  await commentApi.getAllByChallengeId(route.params.challengeId).then((response: any) => {
    commentList.value = response.result.content
  })
}

async function tabClick(tab: TabsPaneContext) {
  if (tab.paneName == 'submission') {
    await testcaseApi.getListSubmission(route.params.challengeId).then((response: any) => {
      subMissionList.value = response.result
    })
  }
  if (tab.paneName == 'discussion') {
     await getListComment()

  }
}
</script>
<style scoped></style>
