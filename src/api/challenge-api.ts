import request from "./base-request";

export default {
    async getChallengeByTopicId(topicId:any) {
        return await request.get("/challenge/topic/" + topicId)
    },
    async filter(requestDto:any,list:any) {
        await request.post("/challenge/filter",requestDto).then((response) => list.value = response)
    }
}
