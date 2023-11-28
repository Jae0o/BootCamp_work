import router from "~/routes";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    initialize({ commit }) {
      if (localStorage.getItem("isLoggedIn")) {
        commit("updateLoggedIn", true);
      }
    },
    logIn({ commit }, payload) {
      const { id, pw } = payload;
      if (id && pw) {
        localStorage.setItem("isLoggedIn", true);
        commit("updateLoggedIn", true);
        const redirect = router.currentRoute.value.query.redirect;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      }
    },
    logOut({ commit }) {
      localStorage.removeItem("isLoggedIn");
      commit("updateLoggedIn", false);
      const requiresAuth = router.currentRoute.value.meta.requiresAuth;
      if (requiresAuth) {
        router.push("/");
      }
    },
  },
};
