import request from "./base-request";

export default {
    async getAllPrescript() {
        return request.get("/prescript");
    },


};
