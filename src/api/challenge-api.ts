import request from "./base-request";

export default {
    async getChallengeByTopicId(topicId:any) {
        return await request.get("/challenge/topic/" + topicId)
    },
    async filter(requestDto:any,list:any) {
        await request.post("/challenge/filter",requestDto).then((response) => list.value = response)
    },
    async compileChallengeCode(testCaseId:any,sourceCode:any,result:any) {
        await request.post("/challenge/submit-code-json/" + testCaseId,sourceCode).then((response:any) => {
            result.value = response.result
        })
    },
    async getChallengeById(challengeId:any) {
        return await request.get("/challenge/"+ challengeId)
    }
}
