<template>
    <div class="container content">
        <div class="bookmarked-container">
            <h1>Bookmarked List:</h1>
            <div class="community-content snipcss-IgCbp">
                <div id="new-challenge-list"
                    class="b4 new-challenge-list tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
                    <div class="container">
                        <div class="content-container panes-container">
                            <div class="challenges-list" v-if="challengeList">
                                <a v-for="item in challengeList" :key="item" class="js-track-click challenge-list-item">
                                    <div class="single-item challenges-list-view-v2 first-challenge cursor">
                                        <div id="contest-challenges-problem"
                                            class="individual-challenge-card-v2 content--list-v2 track_content">
                                            <div class="content--list_body">
                                                <div title="Unbookmark" v-on:click="changeBookmarked(item.challenge.id)"><el-icon
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
                                                                <el-button @click="navigateToChallenge(item.challenge.id)"
                                                                    color="#f4f4f5" v-if="item.challenge.status == 'SOLVED'"
                                                                    style="width: 150px;" size="large" width="100px"
                                                                    type="success">
                                                                    SOLVED
                                                                    <el-icon>
                                                                        <Check />
                                                                    </el-icon>
                                                                </el-button>
                                                                <el-button @click="navigateToChallenge(item.challenge.id)" v-else
                                                                    style="width: 150px;" size="large" width="100px"
                                                                    type="success">
                                                                    START CHALLENGE
                                                                </el-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div v-if="challengeList === null">
                                <h4 class="notification-title">You currently have no bookmarked challenges. To bookmark a
                                    challenge, simply click on the bookmark star icon next to the challenge name</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { StarFilled } from "@element-plus/icons-vue";
import bookmarkApi from "@/api/bookmark-api";

let route = useRoute();
let router = useRouter();
let challengeList = ref();

async function listAllBookmaredChallenge() {
    try {
        const response = await bookmarkApi.listAllBookmarkedChallenges()
        challengeList.value = Array.from(response.result.content).length > 0 ? response.result.content : null
        console.log(challengeList);
    }
    catch (error) {
        console.log(error);
    }
}

async function changeBookmarked(challengeId: any) {
    try {
        const response = await bookmarkApi.changeBookmarkedChallenge(challengeId)
        console.log(response);

        await listAllBookmaredChallenge()
    }
    catch (error) {
        console.log(error);
    }
}

async function navigateToChallenge(challengeId: any) {
    await router.push("/challenge/solve/" + challengeId)
}

onMounted(async () => {
    await listAllBookmaredChallenge();
});
</script>
<style scoped>
.bookmarked-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.challenges-list {
    width: 100%;
}

.content--list_body {
    display: flex;
    align-items: center;
    gap: 20px;
}

.content--list_header-v2 {
    width: 100%;
}

.star-filled-icon {
    font-size: 25px;
}

.notification-title {
    font-weight: 300;
}
</style>
