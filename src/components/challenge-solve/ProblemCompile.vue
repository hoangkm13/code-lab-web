<template>
  <div class="challenge-compile">
    <div>
<el-button @click="compileCode" type="primary">Compile</el-button>
    </div>
    <code-editor v-model="sourceCode.submittedSourceCode"
                 :language_selector="true"
                 :languages="[['cpp', 'C++'],['python', 'Python'],['php', 'PHP']]"
                 width="100%"
                 height="100%"
                 :line-nums="true"
    >
    </code-editor>

  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import CodeEditor from "simple-code-editor";
import ChallengeApi from "@/api/challenge-api";
import { ElLoading } from 'element-plus'
let sourceCode = ref({
  submittedSourceCode: "import java.io.*;\n" +
      "import java.util.*;\n" +
      "import java.text.*;\n" +
      "import java.math.*;\n" +
      "import java.util.regex.*;\n" +
      "\n" +
      "public class main {\n" +
      "\n" +
      "\n" +
      "\n" +
      "    static int solveMeFirst(int a, int b) {\n" +
      "      return a + b;\n" +
      "      \n" +
      "\t}\n" +
      "\n" +
      " public static void main(String[] args) {\n" +
      "        Scanner in = new Scanner(System.in);\n" +
      "        int a;\n" +
      "        a = in.nextInt();\n" +
      "        int b;\n" +
      "        b = in.nextInt();\n" +
      "        int sum;\n" +
      "        sum = solveMeFirst(a, b);\n" +
      "        System.out.println(sum);\n" +
      "\t}\n" +
      "}"
})
let code = ref()

async function compileCode() {
  const loading = ElLoading.service({
    lock: true,
    text: 'Compiling',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await ChallengeApi.compileChallengeCode("4188030f-5aed-48cd-9b4f-701666d5be3e", sourceCode.value)
  await loading.close()
}

</script>


<style scoped>

</style>
