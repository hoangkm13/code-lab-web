import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import "@/type/Page"
import HomePage from "@/view/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
});


export default router
