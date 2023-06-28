import request from "./base-request";

export default {
    async getChallengeByTopicId(topicId:any) {
        return await request.get("/challenge/topic/" + topicId)
    },
    async filter(requestDto:any) {
        await request.post("/challenge/filter",requestDto).then((response:any) => {
           return response.result.content
        })
    }
}
