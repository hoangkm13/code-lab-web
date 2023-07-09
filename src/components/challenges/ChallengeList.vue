<template>
  <section v-loading.fullscreen.lock="loading" class="list-container left-pane snipcss0-4-5-6">
    <div class="snipcss0-5-6-35">
      <div class="challenges-list snipcss0-6-35-36">
        <a v-for="item in challengeList" :key="item"
           class="js-track-click challenge-list-item snipcss0-7-36-37">
          <div class="single-item challenges-list-view-v2 first-challenge cursor snipcss0-8-37-38">
            <div id="contest-challenges-problem"
                 class="individual-challenge-card-v2 content--list-v2 track_content snipcss0-9-38-39">
              <div class="content--list_body snipcss0-10-39-40">
                <header class="content--list_header-v2 snipcss0-11-40-41">
                  <div class="challenge-name-details snipcss0-12-41-42">
                    <div class="pull-left inline-block snipcss0-13-42-43">
                      <h4 class="challengecard-title snipcss0-14-43-44">
                        {{ item.challenge.name }}
                        <div class="card-details pmT snipcss0-15-44-45">
                                <span class="difficulty easy detail-item snipcss0-16-45-46">
                                  {{ item.challenge.difficulty }},
                                </span>
                          <span class="skill detail-item snipcss0-16-70-72">
                                  {{ route.params.topicName }},
                          </span>
                          <span class="max-score detail-item snipcss0-16-45-47">
                                  {{ item.challenge.points }}
                                </span>

                          <div class="preview-content" style="margin-top: 10px">

                          </div>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <span class="bookmark-cta snipcss0-12-41-49">
                          <button class="ui-btn ui-btn-normal ui-btn-plain star-button snipcss0-13-49-50"
                                  aria-label="Add bookmark">
                            <div class="ui-content align-icon-right snipcss0-14-50-51">
                              <span class="ui-text snipcss0-15-51-52" aria-hidden="false">
                                <i class="js-bookmark star-icon ui-icon-star snipcss0-16-52-53">
                                </i>
                              </span>
                            </div>
                          </button>
                        </span>
                  <div>
                    <div>

                      <div>
                        <el-button @click="navigateToChallenge(item.challenge.id)" color="#f4f4f5" v-if="item.status == 'SOLVED'" style="width: 150px;" size="large"
                                   width="100px" type="success">
                          SOLVED
                          <el-icon>
                            <Check/>
                          </el-icon>
                        </el-button>
                        <el-button @click="navigateToChallenge(item.challenge.id)" v-else style="width: 150px;" size="large" width="100px" type="success">
                          START CHALLENGE
                        </el-button>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div class="__react_component_tooltip place-top type-dark snipcss0-9-38-61" data-id="tooltip">
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>

</template>
<script setup lang="ts">
import {ref, onMounted, defineExpose} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import challengeApi from "@/api/challenge-api";
import { ElLoading } from 'element-plus'
let challengeList = ref()
const loading = ref(true)
let request = ref({
  page: 1,
  size: 4,
  challenges: [] as any,
  fieldValues: null
})

let route = useRoute();
let router = useRouter();
async function getChallengeList() {
  try {
    loading.value = true
    const response = await challengeApi.getChallengeByTopicId(route.params.topicId) as any;
    challengeList.value = await response.result.content
    for (let item of response.result.content) {
      request.value.challenges.push(item.challenge)
    }
    loading.value = false
  } catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false
  }
}

async function filter(fieldValue: any) {
  let responseList = ref()
  try {
    loading.value = true
    request.value.fieldValues = await fieldValue
    await challengeApi.filter(request.value,responseList);
    challengeList.value =  await responseList.value.result.content
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false
  }
}
async function navigateToChallenge(challengeId:any) {
  await router.push("/challenge/solve/" +challengeId)
}
onMounted(async () => {
  await getChallengeList()
})
defineExpose({
  filter
})
</script>
<style scoped>

</style>
