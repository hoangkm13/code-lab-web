export default {
  DASHBOARD: {
    title: "Dashboard",
    routerPath: "/",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  LOGIN: {
    title: "Login",
    routerPath: "/login",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  PROFILE: {
    title: "Your profile",
    routerPath: "/profile",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  NOTIFICATION: {
    title: "Notification",
    routerPath: "/notification",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  PREPARE: {
    title: "Prepare",
    routerPath: "/prepare",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  CHALLENGE: {
    title: "Challenge",
    routerPath: "/challenge",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  CHALLENGE_DETAIL: {
    title: "Challenge-detail",
    routerPath: "topicName=:topicName&topicId=:topicId&img=:link",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
  CHALLENGE_SOLVE: {
    title: "Challenge-solve",
    routerPath: "solve/:challengeId",
    get path() {
      return process.env.VUE_APP_BASE_URL + this.routerPath;
    },
  },
};
