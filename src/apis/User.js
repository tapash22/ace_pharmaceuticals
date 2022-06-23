import Api from "./Api";

export default {
  register(form) {
    return Api().post("/register", form);
  },

  login(form) {
    console.log("I am form: ", form);
    return Api().post("/login", form);
  },

  logout() {
    return Api().post("/logout");
  },

  auth() {
    return Api().get("/user");
  },
};
