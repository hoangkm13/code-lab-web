<template>
  <div  class="information">
    <el-scrollbar height="700px" >
      <div v-html="challengeDetail.issue"></div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import ChallengeApi from "@/api/challenge-api";
import {useRoute} from "vue-router";
let route = useRoute()
let challengeDetail = ref({
  createdAt: "",
  updatedAt: "",
  createdBy: "",
  updateBy: "",
  id: "",
  name: "",
  skill: "",
  difficulty: "",
  subDomain: "",
  points: "",
  issue: "",
  bonusIds: ""
})


async function getChallengeById() {
  await ChallengeApi.getChallengeById(route.params.challengeId).then((response: any) => challengeDetail.value = response.result)
}

onMounted(getChallengeById)


</script>


<style scoped>
:deep(body) {

  --hr-neutral-0: #fff;
  --color-page-background: var(--hr-neutral-0);
  --hr-neutral-10: #eaeaec;
  --color-border: var(--hr-neutral-10);
  --hr-neutral-20: #c9c9cf;
  --color-input-border: var(--hr-neutral-20);
  --hr-neutral-90: #0a0a0b;
  --color-input-text: var(--hr-neutral-90);
  --color-checkbox-border-default: var(--hr-neutral-20);
  --hr-neutral-70: #3a3a40;
  --color-checkbox-border-hover: var(--hr-neutral-70);
  --color-checkbox-border-checked: var(--hr-neutral-90);
  --color-text-dark-faded: #576871;
  --color-dialog-text: var(--color-text-dark-faded);
}

@media :deep(all) {
  :deep(div) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(div) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

@media :deep(all) {
  :deep(section) {
    display: block;
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(section) {
  display: block;
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}


@media :deep(all) {
  :deep(body) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    background: #fff;
    height: inherit;
    color: #39424e;
    font-weight: normal;
    line-height: 1.4em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
}

:deep(body) {
  border: 0;
  font: inherit;
  font-size: 1rem;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  background: #fff;
  height: inherit;
  color: var(--hr-neutral-90);
  font-weight: normal;
  line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--hr-font-family-text);
  font-style: normal;
  text-size-adjust: 100%;
}

@media :deep(all) {
  :deep(html) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    height: 100%;
    overflow: auto;
    text-size-adjust: 100%;
    background: #fff;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
}

:deep(html) {
  border: 0;
  font: inherit;
  font-size: 16px;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  height: 100%;
  overflow: auto;
  text-size-adjust: 100%;
  background: #fff;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

:deep(:root) {
  --color-bg: #f3f7f7;
  --color-shade-light: #e7eeef;
  --color-text-medium-dark: #39424e;
  --color-text-dark: #0e141e;
  --color-text-dark-faded: #576871;
  --card-shadow-1: #fff;
  --hr-neutral-0: #fff;
  --hr-neutral-10: #eaeaec;
  --hr-neutral-20: #c9c9cf;
  --hr-neutral-70: #3a3a40;
  --hr-neutral-90: #0a0a0b;
  --hr-font-family-text: "Open Sans", "OpenSans", arial, helvetica, sans-serif;
  --font-family-text: Arial, Helvetica, sans-serif;
  --font-family-input: monaco, Courier, monospace;
  --color-tab-item-active-bg: var(--card-shadow-1);
  --color-tc-result-label-text: var(--color-text-dark-faded);
}


@media :deep(all) {
  :deep(p) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
  }
}

:deep(p) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
}

:deep(p) {
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-family: var(--font-family-text);
  color: var(--color-text-dark-faded, #576871);
  font-size: 14px;
  line-height: 2;
  margin-top: 5px;
  margin-bottom: 0;
}

@media :deep(all) {
  :deep(svg:not(:root)) {
    overflow: hidden;
  }
}

:deep(svg:not(:root)) {
  overflow: hidden;
}

:deep(svg) {
  color: var(--color-text-dark, #0e141e);
}

@media :deep(all) {
  :deep(.hackdown-content p) {
    margin-top: 12px;
  }
}

:deep(.hackdown-content p) {
  margin-top: 12px;
}

@media :deep(all) {
  :deep( ul) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(ul) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

@media :deep(all) {
  :deep(.hackdown-content ul) {
    margin-left: 20px;
  }
}

:deep(.hackdown-content ul) {
  margin-left: 20px;
}

@media :deep(all) {
  :deep(strong) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    font-weight: bolder;
  }
}

:deep(strong) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  font-weight: bolder;
}

:deep(strong) {
  color: var(--color-text-dark, #0e141e);
}

@media :deep(all) {
  :deep(pre) {
    border: 0;
    font: inherit;
    font-size: 1em;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    font-family: monospace, monospace;
  }
}

:deep(pre) {
  border: 0;
  font: inherit;
  font-size: 1em;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: monospace, monospace;
}

@media :deep(all) {
  :deep(.hackdown-content pre) {
    margin-top: 12px;
    background: #f4faff;
    border: 0;
    border-radius: 2px;
  }
}

:deep(.hackdown-content pre) {
  margin-top: 12px;
  background: #f4faff;
  border: 0;
  border-radius: 2px;
}

:deep(pre) {
  font-weight: normal;
  font-family: monaco, Courier, monospace;
  font-family: var(--font-family-input);
  overflow-x: auto;
  padding: 20px;
  border: none;
  background-color: var(--color-shade-light);
  color: var(--color-text-dark, #0e141e);
  font-size: 14px;
  line-height: 20px;
}

@media :deep(all) {
  :deep(em) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(em) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

@media :deep(all) {
  :deep(span) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(span) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}


@media :deep(all) {
  :deep(li) {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
}

:deep(li) {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

:deep(li) {
  color: var(--color-text-dark-faded, #576871);
  font-size: 14px;
  line-height: 2;
}

@media :deep(all) {
  :deep(code) {
    border: 0;
    font: inherit;
    font-size: 1em;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    font-family: monospace, monospace;
  }
}

:deep(code) {
  border: 0;
  font: inherit;
  font-size: 1em;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: monospace, monospace;
}

@media :deep(all) {
  :deep(.hackdown-content code) {
    color: #454c5f;
  }
}

:deep(.hackdown-content code) {
  color: #454c5f;
}

:deep(code) {
  font-weight: normal;
  font-family: monaco, Courier, monospace;
  font-family: var(--font-family-input);
  overflow-x: auto;
  background: var(--color-bg);
  color: var(--color-text-medium-dark, #39424e);
  word-spacing: -2px;
}

.MathJax_SVG * {
  transition: none;
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
}


</style>
