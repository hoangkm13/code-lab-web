import request from "./base-request";

export default {
  async listAllBookmarkedChallenges() {
    return request.get("/challenge/bookmarked");
  },
  async changeBookmarkedChallenge(challengeId: any){
    return request.post("/challenge/bookmarked/" + challengeId)
  }
};
