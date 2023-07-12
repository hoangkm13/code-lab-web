import request from "./base-request";

export default {
    async getAllChatIds(sender:any) {
     return await request.get("/get-all-chatIds/"+ sender)
    }
}
