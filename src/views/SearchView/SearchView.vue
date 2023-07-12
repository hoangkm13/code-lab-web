<template>
    <section v-loading.fullscreen.lock="loading" class="list-container left-pane">

        <div class="container content">
            <div class="bookmarked-container">
                <h1>Search Result:</h1>
                <div class="community-content snipcss-IgCbp">
                    <div id="new-challenge-list"
                        class="b4 new-challenge-list tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
                        <div class="container">
                            <div class="content-container panes-container">
                                <div class="challenges-list">
                                    <a v-for="item in challengeList" :key="item" class="js-track-click challenge-list-item">
                                        <div class="single-item challenges-list-view-v2 first-challenge cursor">
                                            <div id="contest-challenges-problem"
                                                class="individual-challenge-card-v2 content--list-v2 track_content">
                                                <div class="content--list_body">
                                                    <div title="Bookmark" v-on:click="changeBookmarked(item.challenge.id)"
                                                        v-if="!item.isBookmark"><el-icon class="star-icon">
                                                            <Star />
                                                        </el-icon></div>
                                                    <div title="Unbookmark" v-on:click="changeBookmarked(item.challenge.id)"
                                                        v-if="item.isBookmark"><el-icon class="star-filled-icon">
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
                                                                        <span class="max-score detail-item">
                                                                            {{ item.challenge.points }}
                                                                        </span>

                                                                        <div class="preview-content"
                                                                            style="margin-top: 10px">

                                                                        </div>
                                                                    </div>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <span class="bookmark-cta">
                                                            <button class="ui-btn ui-btn-normal ui-btn-plain star-button"
                                                                aria-label="Add bookmark">
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
                                                                    <el-button
                                                                        @click="navigateToChallenge(item.challenge.id)"
                                                                        color="#f4f4f5" v-if="item.status == 'SOLVED'"
                                                                        style="width: 150px;" size="large" width="100px"
                                                                        type="success">
                                                                        SOLVED
                                                                        <el-icon>
                                                                            <Check />
                                                                        </el-icon>
                                                                    </el-button>
                                                                    <el-button
                                                                        @click="navigateToChallenge(item.challenge.id)"
                                                                        v-else style="width: 150px;" size="large"
                                                                        width="100px" type="success">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import challengeApi from "@/api/challenge-api";
import { onMounted, ref, watch } from "vue";
import bookmarkApi from "@/api/bookmark-api";

import { useRoute, useRouter } from 'vue-router'
import { Star, StarFilled } from "@element-plus/icons-vue";

const loading = ref(true)
const challengeList = ref()
const bookmarkList = ref()
let route = useRoute();
let router = useRouter();

async function getChallengeFromSearch() {
    try {
        loading.value = true
        const response = await challengeApi.searchChallenge(route.params.challengeName)
        challengeList.value = await response.result
        if (bookmarkList.value != null) {
            challengeList.value = Array.from(challengeList.value).map((item: any) => {
                let isBookmark = Array.from(bookmarkList.value).some((bookmarkItem: any) => {
                    return bookmarkItem.id === item.id // Compare objects based on their id property
                })
                return { ...item, isBookmark: isBookmark }
            })
        }
        console.log(challengeList.value);
        loading.value = false
    } catch (error) {
        console.log(error);
    }
}
async function changeBookmarked(challengeId: any) {
    try {
        const response = await bookmarkApi.changeBookmarkedChallenge(challengeId)
        await listAllBookmaredChallenge()
        await getChallengeFromSearch();
    }
    catch (error) {
        console.log(error);
    }
}
async function navigateToChallenge(challengeId: any) {
    await router.push("/challenge/solve/" + challengeId)
}

async function listAllBookmaredChallenge() {
    try {
        loading.value = true;
        const response = await bookmarkApi.listAllBookmarkedChallenges()
        bookmarkList.value = Array.from(response.result.content).length > 0 ? response.result.content : null
        loading.value = false;
    }
    catch (error) {
        console.log(error);
    }
}
onMounted(async () => {
    await listAllBookmaredChallenge()
    await getChallengeFromSearch();
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

.challenges-list,
.challenges-list-view-v2 {
    width: 100%;
}
</style>