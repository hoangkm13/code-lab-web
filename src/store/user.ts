import {defineStore} from "pinia";
import LoginApi from "@/api/login-api";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null as null | any,

    }),
    actions: {
        async signIn(request: any): Promise<void> {
            this.user = await LoginApi.login(request);
            const token: string = await this.user.result.token
            await localStorage.setItem("user", JSON.stringify(this.user.result))
            await localStorage.setItem("token", token);

        },
    },
});
