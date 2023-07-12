import request from "./base-request";

export default {
  async getAllNotification() {
    return request.get("/notification");
  },
  async deleteNotification(notificationId: any) {
    return request.delete("/notification/" + notificationId);
  },
  async updateNotification(notificationId: any) {
    return request.put("/notification/" + notificationId);
  }
};
