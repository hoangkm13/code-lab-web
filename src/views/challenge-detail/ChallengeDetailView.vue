<template>
  <challenge-header> </challenge-header>
  <div class="community-content snipcss0-0-0-1 snipcss-IgCbp">
    <div id="new-challenge-list"
         class="b4 new-challenge-list tether-target-attached-top snipcss0-1-1-2 tether-element-attached-top tether-element-attached-center tether-target-attached-center">
      <div class="container snipcss0-2-2-3">
        <header class="challenge-list-header clearfix snipcss0-3-3-4">
        </header>
        <div class="content-container panes-container snipcss0-3-3-5">
          <challenge-list ref="challengeList"></challenge-list>
          <challenge-filter @filter="filter"></challenge-filter>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import ChallengeHeader from "@/components/challenges/ChallengeHeader.vue";
import ChallengeList from "@/components/challenges/ChallengeList.vue";
import ChallengeFilter from "@/components/challenges/ChallengeFilter.vue";

let challengeList = ref(ChallengeList)
function filter(filedValue:any) {
  challengeList.value.filter(filedValue)

}

</script>
<style scoped>

</style>

