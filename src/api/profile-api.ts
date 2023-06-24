import request from "./base-request";

export default {
  async getProfileDetail() {
    return request.get("/auth");
  },
  async updateProfile(userId: string, requestDto: any) {
    return request.putForm("/auth/" + userId, requestDto);
  },
};
