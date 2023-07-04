<template>
  <div class="challenge-compile">
  {{challengeDetail}}
    <code-editor v-model="code"
                 :language_selector="true"
                 :languages="[['cpp', 'C++'],['python', 'Python'],['php', 'PHP']]"
                 width="100%"
                 height="100%"
                 :line-nums="true">
    </code-editor>

  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import CodeEditor from "simple-code-editor";
import ChallengeApi from "@/api/challenge-api";
import {useRoute} from "vue-router";
let route = useRoute()
let sourceCode = ref({
  submittedSourceCode:"import java.io.*;\n" +
      "import java.util.*;\n" +
      "import java.text.*;\n" +
      "import java.math.*;\n" +
      "import java.util.regex.*;\n" +
      "\n" +
      "public class main {\n" +
      "\n" +
      "    public static void main(String[] args) {\n" +
      "\n" +
      "        Scanner sc=new Scanner(System.in);\n" +
      "        int n=sc.nextInt();            \n" +
      "        String ans;\n" +
      "        if(n%2==1)ans = \"Weird\";\n" +
      "        else\n" +
      "        {\n" +
      "            if(n>=2 && n<=5)ans = \"Not Weird\";\n" +
      "            else if(n>=5 && n<=20)ans=\"Weird\";\n" +
      "            else ans = \"Not Weird\";\n" +
      "        }\n" +
      "        System.out.println(ans);\n" +
      "\n" +
      "    }\n" +
      "}"
})
let code = ref()

async function compileCode() {
  await ChallengeApi.compileChallengeCode("4188030f-5aed-48cd-9b4f-701666d5be3e", sourceCode.value)
  console.log(sourceCode.value.submittedSourceCode)
}
let challengeDetail = ref()
async function getChallengeById() {
  await ChallengeApi.getChallengeById(route.params.challengeId).then(response => challengeDetail.value = response)
}
onMounted(getChallengeById)
</script>


<style scoped>

</style>
