import request from "./base-request";

export default {
   async getAllTopic() {
        return await request.get("/topic")
    }
}
