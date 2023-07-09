<template>
  <div class="compile-result">
    <el-card v-if="resultAfterCompile.status !== ''" class="box-card">
      <div class="common-layout">
        <el-container>
          <el-aside width="200px">
            <div class="testcase-number" v-for="(value,key) in resultAfterCompile.yourOutput">
              <el-button text @click="getTestKey(key)">
                <div v-if="value.verdict == 'Accepted'">
                  <el-icon style="color:green;font-size:16px">
                    <CircleCheck/>
                  </el-icon>
                  <span class="right-answer">{{ key }}</span>
                </div>
                <div v-else>
                  <el-icon style="color:red;font-size:16px">
                    <Lock/>
                  </el-icon>
                  <span class="wrong-answer">{{ key }}</span>
                </div>
              </el-button>
            </div>
          </el-aside>
          <el-main>
            <div class="testcase-result" v-for="(result,key) in resultAfterCompile.expectedOutput">
              <div v-if="testCaseKey == key">
                <h5>Input:</h5>
                <code-editor v-model="result.input">
                </code-editor>
              </div>
              <div v-if="testCaseKey == key">
                <h5>Output:</h5>
                <code-editor v-model="result.expectedOutput">
                </code-editor>
              </div>
            </div>
            <div class="user-result" v-for="(result,key) in resultAfterCompile.yourOutput">
              <div v-if="testCaseKey == key">
                <h5>Your output:</h5>
                <code-editor v-model="result.output">
                </code-editor>
              </div>
            </div>
          </el-main>

        </el-container>
      </div>
    </el-card>
  </div>

  <div class="challenge-compile">
    <el-select @change="changeLanguage" v-model="language" class="m-2" placeholder="Select language" size="large">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
    <vue-monaco-editor
        style="height: 600px;max-height: 600px"
        v-model:value="sourceCode.submittedSourceCode"
        theme="vs-dark"
    />
  </div>
  <div class="button-container">
    <el-button @click="compileCode" class="submit-button" type="success">Submit code</el-button>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
import ChallengeApi from "@/api/challenge-api";
import {ElLoading} from 'element-plus'
import PrescriptApi from "@/api/prescript-api";
import testcaseApi from "@/api/testcase-api";
import CodeEditor from "simple-code-editor";

let testCaseKey = ref('test1')
let filteredPrescript = ref([
  {
    challengeId: "",
    id: "",
    language: "",
    preContent: ""
  }]);

let resultAfterCompile = ref({
  status: "",
  expectedOutput:"" as any,
  yourOutput: "" as any
})
let sourceCode = ref({
  submittedSourceCode: ""
})
let language = ref('')
let preScriptList = ref([])
let route = useRoute()
let testCaseTemplate = ref()

const options = [
  {
    value: 'JAVA',
    label: 'Java',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'PYTHON',
    label: 'Python',
  },
]


async function compileCode() {
  let compileResult = ref()
  const loading = ElLoading.service({
    lock: true,
    text: 'Compiling',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await ChallengeApi.compileChallengeCode(testCaseTemplate.value.id, sourceCode.value, compileResult)
  let objet1 = await ref(testCaseTemplate.value)
  let object2 = await ref(compileResult.value)
  let mergedObj = await ref({...objet1.value, ...object2.value});
  resultAfterCompile.value.status = mergedObj.value.verdict
  resultAfterCompile.value.expectedOutput = mergedObj.value.challengeSubmitJson['testCases']
  resultAfterCompile.value.yourOutput = mergedObj.value.testCasesResult
  console.log(resultAfterCompile.value)
  await loading.close()
}


async function getAllPrescript() {
  await PrescriptApi.getAllPrescript().then((response: any) => {
    preScriptList.value = response.result
  })
}

async function changeLanguage() {
  filteredPrescript.value = preScriptList.value.filter((script: any) => script.language === language.value.toUpperCase());
  sourceCode.value.submittedSourceCode = filteredPrescript.value[0].preContent;
}

async function getTestKey(value: any) {
  testCaseKey.value = value;
}

onMounted(async () => {
  await getAllPrescript();
  await testcaseApi.getTestCaseByChallengeId(route.params.challengeId).then((response: any) => {
    testCaseTemplate.value = response.result;
  })
  filteredPrescript.value = preScriptList.value.filter((script: any) => script.language == 'JAVA');
  sourceCode.value.submittedSourceCode = filteredPrescript.value[0].preContent;
})
</script>


<style scoped>
.submit-button {
  width: 200px;
  height: 40px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.wrong-answer {
  color: red;
  font-size: 16px
}

.right-answer {
  color: green;
  font-size: 16px
}
</style>
