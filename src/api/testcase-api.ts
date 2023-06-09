import request from "./base-request";

export default {
    async getTestCaseByChallengeId(challengeId:any) {
        return request.get("/test-case/" + challengeId + "/template")
    },
    async getListSubmission(challengeId:any) {
        return request.get("/test-case/" + challengeId)
    }
};
