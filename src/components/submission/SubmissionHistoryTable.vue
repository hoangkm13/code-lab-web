<template>
  <el-table :data="props.submissionList" size="large" height="500px">
    <el-table-column label="RESULT" width="180">
      <template #default="scope">
        <div class="accept-answer" v-if="scope.row.testCaseJsonResponse.verdict == 'Accepted'">
          <el-icon style="color:#1ba94c">
            <CircleCheck/>
          </el-icon>
          <p>{{ scope.row.testCaseJsonResponse.verdict }}</p>
        </div>
        <div class="wrong-answer" v-else>
          <el-icon style="color:orangered">
            <Close/>
          </el-icon>
          <p>{{ scope.row.testCaseJsonResponse.verdict }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="testCaseJsonResponse.language" label="LANGUAGE" width="180"/>
    <el-table-column prop="testCaseJsonResponse.dateTime" label="DATE SUMBIT">
      <template #default="scope">
        {{ moment(scope.row.testCaseJsonResponse.dateTime).format('yyyy-MM-DD') }}
      </template>
    </el-table-column>
    <el-table-column>
      <template #default="scope">
        <el-button type="primary"
                   @click="openDialog(scope.row.challengeSubmitJson.sourcecode,
                                      scope.row.testCaseJsonResponse.testCasesResult,
                                      scope.row.challengeSubmitJson.testCases)">
          View result
        </el-button>

      </template>
    </el-table-column>
  </el-table>
  <el-dialog
      v-model="dialogVisible"
      title="Submitted Code"
      width="50%"
      :append-to-body="true"
  >
    <vue-monaco-editor style="height: 300px;max-height: 300px" v-model:value="submittedCode" theme="vs-dark">
    </vue-monaco-editor>
    <div class="compile-result">
      <el-card>
        <div class="common-layout">
          <el-container>
            <el-aside >
              <div class="testcase-number" v-for="(value,key) in yourOutput">
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
              <div class="testcase-result" v-for="(result,key) in expectedOutput">
                <div v-if="testCaseKey == key">
                  <h5>Input:</h5>
                  <code-editor width="auto"  v-model="result.input">
                  </code-editor>
                </div>
                <div v-if="testCaseKey == key">
                  <h5>Output:</h5>
                  <code-editor width="auto" v-model="result.expectedOutput">
                  </code-editor>
                </div>
              </div>
              <div class="user-result" v-for="(result,key) in yourOutput">
                <div v-if="testCaseKey == key">
                  <h5>Your output:</h5>
                  <code-editor width="auto"  v-model="result.output">
                  </code-editor>
                </div>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-card>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Close</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import moment from "moment";
import CodeEditor from "simple-code-editor";
let props = defineProps(['submissionList'])
const dialogVisible = ref(false)
let submittedCode = ref('')

let expectedOutput = ref()
let yourOutput = ref()
let testCaseKey = ref('test1')

async function openDialog(value: any,value2:any,value3:any ) {
  submittedCode.value =  value
  yourOutput.value =  await value2
  expectedOutput.value = await value3
  dialogVisible.value = true
}

async function getTestKey(value: any) {
  testCaseKey.value = value;
}

</script>

<style scoped>
.compile-result {
  margin-top: 20px;
}

.wrong-answer {
  color: red;
  font-size: 16px
}

.right-answer {
  color: green;
  font-size: 16px
}

.accept-answer {
  display: flex;
  color: #1ba94c;
  align-items: baseline;

}

.wrong-answer {
  display: flex;
  align-items: baseline;
  color: orangered;
}
</style>
