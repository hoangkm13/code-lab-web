<template>
  <section v-loading.fullscreen.lock="loading" class="list-container left-pane">
    <div>
      <div class="challenges-list">
        <a v-for="item in challengeList" :key="item" class="js-track-click challenge-list-item">
          <div class="single-item challenges-list-view-v2 first-challenge cursor">
            <div id="contest-challenges-problem" class="individual-challenge-card-v2 content--list-v2 track_content">
              <div class="content--list_body">
                <div title="Bookmark" v-on:click="changeBookmarked(item.challenge.id)" v-if="!item.isBookmark"><el-icon
                    class="star-icon">
                    <Star />
                  </el-icon></div>
                <div title="Unbookmark" v-on:click="changeBookmarked(item.challenge.id)" v-if="item.isBookmark"><el-icon
                    class="star-filled-icon">
                    <StarFilled />
                  </el-icon>
                </div>
                <header class="content--list_header-v2">
                  <div class="challenge-name-details">
                    <div class="pull-left inline-block">
                      <h4 class="challengecard-title">
                        {{ item.challenge.name }}
                        <div class="card-details pmT">
                          <span class="difficulty easy detail-item">
                            {{ item.challenge.difficulty }},
                          </span>
                          <span class="skill detail-item">
                            {{ route.params.topicName }},
                          </span>
                          <span class="max-score detail-item">
                            {{ item.challenge.points }}
                          </span>

                          <div class="preview-content" style="margin-top: 10px">

                          </div>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <span class="bookmark-cta">
                    <button class="ui-btn ui-btn-normal ui-btn-plain star-button" aria-label="Add bookmark">
                      <div class="ui-content align-icon-right">
                        <span class="ui-text" aria-hidden="false">
                          <i class="js-bookmark star-icon ui-icon-star">
                          </i>
                        </span>
                      </div>
                    </button>
                  </span>
                  <div>
                    <div>

                      <div>
                        <el-button @click="navigateToChallenge(item.challenge.id)" color="#f4f4f5"
                          v-if="item.status == 'SOLVED'" style="width: 150px;" size="large" width="100px" type="success">
                          SOLVED
                          <el-icon>
                            <Check />
                          </el-icon>
                        </el-button>
                        <el-button @click="navigateToChallenge(item.challenge.id)" v-else style="width: 150px;"
                          size="large" width="100px" type="success">
                          START CHALLENGE
                        </el-button>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div class="__react_component_tooltip place-top type-dark" data-id="tooltip">
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import challengeApi from "@/api/challenge-api";
import { Star, StarFilled } from "@element-plus/icons-vue";
import bookmarkApi from "@/api/bookmark-api";


let challengeList = ref()
let bookmarkList = ref()
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

    if (bookmarkList.value != null) {
      challengeList.value = Array.from(challengeList.value).map((item: any) => {
        let isBookmark = Array.from(bookmarkList.value).some((bookmarkItem: any) => {
          return bookmarkItem.id === item.id // Compare objects based on their id property
        })
        return { ...item, isBookmark: isBookmark }
      })
    }

    loading.value = false
  } catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false
  }
}

async function listAllBookmaredChallenge() {
  try {
    const response = await bookmarkApi.listAllBookmarkedChallenges()
    bookmarkList.value = Array.from(response.result.content).length > 0 ? response.result.content : null
    console.log(bookmarkList.value);
  }
  catch (error) {
    console.log(error);
  }
}

async function changeBookmarked(challengeId: any) {
  try {
    const response = await bookmarkApi.changeBookmarkedChallenge(challengeId)
    await listAllBookmaredChallenge()
    await getChallengeList()
  }
  catch (error) {
    console.log(error);
  }
}

async function filter(fieldValue: any) {
  let responseList = ref()
  try {
    loading.value = true
    request.value.fieldValues = await fieldValue
    await challengeApi.filter(request.value, responseList);
    challengeList.value = await responseList.value.result.content
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false
  }
}
async function navigateToChallenge(challengeId: any) {
  await router.push("/challenge/solve/" + challengeId)
}
onMounted(async () => {
  await listAllBookmaredChallenge()
  await getChallengeList()
})
defineExpose({
  filter
})
</script>
<style scoped>
.star-icon,
.star-filled-icon {
  font-size: 25px;
}

.content--list_body {
  display: flex;
  align-items: center;
  gap: 20px;
}

.content--list_header-v2 {
  width: 100%;
}
</style>
