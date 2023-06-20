<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <problem-information></problem-information>
      </el-aside>
      <el-main>
        <problem-compile></problem-compile>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import ProblemInformation from '@/components/challenge-solve/ProblemInformation.vue'
import ProblemCompile from "@/components/challenge-solve/ProblemCompile.vue";
</script>


<style scoped>

</style>
