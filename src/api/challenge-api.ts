import request from "./base-request";

export default {
    async getChallengeByTopicId(topicId:any) {
        return await request.get("/challenge/topic/" + topicId)
    }
}
