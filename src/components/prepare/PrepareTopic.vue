<template>

  <section class="dashboard-section dashboard-topics" id="topics">
    <div class="dashboard-section-header">
      <h2 class="text-para-headline bold dashboard-section-title">
        Prepare By Topics
      </h2>
    </div>
    <div class="dashboard-section-grid">
      <div class="dashboard-topics-card ui-card ui-layer-2">
        <div class="card-content">
          <ul class="topics-list">
            <li class="topic-card" v-for="topic in topics" :key="topic.id">
              <a data-analytics="SelectTopic" data-event-label="SelectTopic" data-event-category="HRC Interview Prep"
                 :data-attr1="topic.name.toLowerCase()" data-attr11="false" data-cd-topic-slug="algorithms" class="topic-link"
                 :href="'challenge/topicName=' + topic.name + '&topicId=' + topic.id +'&img=' + extractImageName(topic.imageUrl) ">
                <div class="topic-item bold">
                  <img :src="topic.imageUrl" alt="" height="24">
                  <div class="topic-name" data-automation="algorithms">
                    {{topic.name}}
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue";
import topicApi from "@/api/topic-api";

let topics = ref()

async function getAllTopics() {
  try {
    const response = await topicApi.getAllTopic();
    topics.value = response.result;
  } catch (error) {
    console.error(error);
  }
}
 function extractImageName(imageUrl:any) {
  const urlParts =  imageUrl.split("/");
  const fileName =  urlParts[urlParts.length - 1];
  return fileName
}

onMounted(async () => await getAllTopics())
</script>
<style scoped>

</style>
