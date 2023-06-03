import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import "@/type/Page"
import HomePage from "@/view/HomePage.vue";
const LoginView = () => import("@/views/Login/LoginView.vue")
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/login",
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
});


export default router
