import request from "./base-request";

export default {
    login(requestDto:any) {
        return request.post("/auth/login",requestDto)
    }
}
