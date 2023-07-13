import { defineStore } from "pinia";
import LoginApi from "@/api/login-api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as null | any,
  }),
  actions: {
    async signIn(request: any): Promise<void> {
      this.user = await LoginApi.login(request);
      const token: string = this.user.result.token;
      const username = this.user.result.user.username
      localStorage.setItem("user", JSON.stringify(this.user.result));
      localStorage.setItem('username',username)
      localStorage.setItem("token", token);
      console.log(localStorage.getItem('username'))
    }
  },
});
