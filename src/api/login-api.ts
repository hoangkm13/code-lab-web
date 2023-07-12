import request from "./base-request";

export default {
    login(requestDto:any) {
        return request.post("/auth/login",requestDto)
    },
    signUp(requestDto: any){
        return request.post("/auth/register", requestDto)
    }
}
