import request from "./base-request";

export default {
    getProfileDetail() {
        return request.get("/auth")
    }
}
