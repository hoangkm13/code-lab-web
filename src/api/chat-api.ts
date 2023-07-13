import request from "./base-request";

export default {
    async  getAllChatIds() {
     let username = localStorage.getItem('username')
     return await request.get("/chat/get-all-chatIds/"+ username)
    },
    async saveMessage(data:any) {
      return await request.post("/chat",data)
    }


}
