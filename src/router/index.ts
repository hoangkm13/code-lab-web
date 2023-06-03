import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Page from "@/type/Page"
import HomePage from "@/views/HomePage.vue";

const LoginView = () => import("@/views/Login/LoginView.vue")
const routes: Array<RouteRecordRaw> = [
    {
        path: Page.DASHBOARD.routerPath,
        component: HomePage,
        meta: {
            title: Page.DASHBOARD.title,

        }
    },
    {
        path: Page.LOGIN.routerPath,
        component: LoginView,
        meta: {
            title: Page.LOGIN.title,

        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
});

router.afterEach((to, from) => {
    (document as any).title = to.meta.title;
});



export default router
