export default {
    DASHBOARD: {
        title: "Dashboard",
        routerPath: "/",
        get path() {
            return process.env.VUE_APP_BASE_URL + this.routerPath
        }
    },
    LOGIN : {
        title: "Login",
        routerPath: "/login",
        get path() {
            return process.env.VUE_APP_BASE_URL + this.routerPath
        }
    }
}
