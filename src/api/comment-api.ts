import request from "./base-request";

export default {
    getAllByChallengeId(challengeId:any) {
        return request.get("/comment/"+challengeId)
    },
    saveComment(requestDto:any) {
        return request.post("/comment",requestDto)
    },
    replyComment(requestDto:any) {
        return request.post("/comment/reply-comment",requestDto)
    },
    getListReplyComment(parentCommentId:any) {
        return request.get("/comment/get-comment-replies/"+parentCommentId)
    }
}
