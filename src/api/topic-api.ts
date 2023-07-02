import request from "./base-request";

export default {
   async getAllTopic() {
        return await request.get("/topic")
    },
    async getUserTopic(topicId:any) {
       return await  request.get("/topic/"+topicId)
    },
    async getUserRanking(topicId:any) {
       return await request.get("/topic/ranking/"+topicId)
    }
}
