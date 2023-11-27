import { createStore } from "vuex";
import message from "./message";

export default createStore({
  state() {
    return {
      msg: "Hello Store",
      count: 1,
    };
  },
  getters: {},
  mutations: {},
  modules: {
    message,
  },
});
