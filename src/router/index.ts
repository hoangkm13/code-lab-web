import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Page from "@/type/Page";
import HomePage from "@/views/HomePage.vue";
import PrepareView from "@/views/prepare/PrepareView.vue";
import ChallengeView from "@/views/challenge/ChallengeView.vue";
import ChallengeDetailView from "@/views/challenge-detail/ChallengeDetailView.vue";
import ChallengeSolveView from "@/views/challenge-solve/ChallengeSolveView.vue";
import ProfileDetail from "@/views/ProfileDetail/ProfileDetail.vue";

const LoginView = () => import("@/views/login/LoginView.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: Page.DASHBOARD.routerPath,
    component: HomePage,
    meta: {
      title: Page.DASHBOARD.title,
    },
    children: [
      {
        path: Page.PREPARE.routerPath,
        component: PrepareView,
        meta: {
          title: Page.PREPARE.title,
        },
      },
      {
        path: Page.CHALLENGE.routerPath,
        component: ChallengeView,
        meta: {
          title: Page.CHALLENGE.title,
        },
        children: [
          {
            path: Page.CHALLENGE_DETAIL.routerPath,
            component: ChallengeDetailView,
            meta: {
              title: Page.CHALLENGE_DETAIL.title,
            },
          },
          {
            path: Page.CHALLENGE_SOLVE.routerPath,
            component: ChallengeSolveView,
            meta: {
              title: Page.CHALLENGE_SOLVE.title,
            },
          },
        ],
      },
      {
        path: Page.PROFILE.routerPath,
        component: ProfileDetail,
        meta: {
          title: Page.PREPARE.title,
        },
      },
    ],
  },
  {
    path: Page.LOGIN.routerPath,
    component: LoginView,
    meta: {
      title: Page.LOGIN.title,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  (document as any).title = to.meta.title;
});

export default router;
