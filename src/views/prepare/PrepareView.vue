<template>
  <header class="community-header-breadcrumb snipcss-9io9h">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center content-header-wrapper">
        <div class="community-header-breadcrumb-items">
          <ol itemtype="http://schema.org/BreadcrumbList" class="community-breadcrumb text-content ellipsis">
            <li itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item">
            <span itemprop="name" class="breadcrumb-item-text">
              Prepare
            </span>
              <meta itemprop="position" content="1">
            </li>
          </ol>
          <div class="page-label-wrapper text-headline">
            <h1 class="page-label">
              Prepare
            </h1>
          </div>
        </div>
        <div class="community-header-aside">
          <div class="bookmark-body d-flex align-items-end">
            <a class="bookmark-link text-link" data-analytics="BookmarkLink" data-attr1="Dashboard"
               href="/challenges/bookmarks">
              Bookmarked Challenges
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="community-content snipcss-geHQP">
    <div class="dashboard-v2 container">
      <prepare-progress></prepare-progress>
      <prepare-certification></prepare-certification>
      <prepare-topic></prepare-topic>
    </div>
  </div>
</template>
<script setup lang="ts">
import PrepareProgress from "@/components/prepare/PrepareProgress.vue";
import PrepareCertification from "@/components/prepare/PrepareCertification.vue";
import PrepareTopic from "@/components/prepare/PrepareTopic.vue";
</script>
<style scoped>


</style>
