export default {
    DASHBOARD: {
        title: "Dashboard|Code-lab",
        routerPath: "/",
        get path() {
            return process.env.VUE_APP_BASE_URL + this.routerPath
        }
    }
}
