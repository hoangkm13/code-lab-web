<template>
  <div class="challenge-solve-container">
    <div class="feature-tab">
      <el-tabs  type="card" class="demo-tabs">
        <el-tab-pane label="Problem"><problem-screen></problem-screen></el-tab-pane>
        <el-tab-pane label="Submissions"><submission-history-table></submission-history-table></el-tab-pane>
        <el-tab-pane label="Leaderboard">Config</el-tab-pane>
        <el-tab-pane label="Discussions">Role</el-tab-pane>
        <el-tab-pane label="Editorial">Editorial</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ProblemScreen from "@/components/challenge-solve/ProblemScreen.vue";
import SubmissionHistoryTable from "@/components/submission/SubmissionHistoryTable.vue";

</script>
<style scoped>

</style>
