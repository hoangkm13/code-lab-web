import { defineStore } from "pinia";
import LoginApi from "@/api/login-api";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null , // Define the type of 'user' property
    }),

    actions: {
        async signIn(requestDto: any) {
            return await LoginApi.login(requestDto).then((response:any) => {
                this.user = response;

            });
        },
    },
});


