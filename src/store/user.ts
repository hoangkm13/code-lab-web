import { defineStore } from "pinia";
import LoginApi from "@/api/login-api";
import ProfileDetailApi from "@/api/profile-api";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as null | any,
  }),
  actions: {
    async signIn(request: any): Promise<void> {
      this.user = await LoginApi.login(request);
      const token: string = this.user.result.token;
      localStorage.setItem("user", JSON.stringify(this.user.result));
      localStorage.setItem("token", token);
    }
  },
});
