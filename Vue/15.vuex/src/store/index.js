import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      msg: "Hello Store",
      count: 1,
    };
  },
  getters: {
    reversedMsg(state) {
      return state.msg.split("").reverse().join("");
    },
  },
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  },
  actions: {
    fetchTodo(context) {
      const todo = fetch("https://jsonplaceholder.typicode.com/todos/1") //
        .then((res) => res.json());
      console.log(todo);
      context.commit("updateMsg", todo.title);
    },
  },
});
