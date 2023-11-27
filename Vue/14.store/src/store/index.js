import { reactive } from "vue";

export const state = reactive({
  msg: "Hello World",
  count: 0,
});

// 계산된 데이터
export const getters = {
  reverseMsg() {
    return state.msg.split("").reverse().join("");
  },
};

// 데이터를 수정하는 용도일뿐 추가 적인 로직은 안들어가는것이 좋음
export const mutations = {
  increaseCount() {
    state.count += 1;
  },
  decreaseCount() {
    state.count -= 1;
  },
  updateMsg(newMsg) {
    state.msg = newMsg;
  },
};

// mutation 에서 다루는것 외의 모든 메소드
export const actions = {
  async fetchTodo() {
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1") //
      .then((res) => res.json());
    // 데이터를 갱신을 할때는 별도의 mutation을 통해
    mutations.updateMsg(todo.title);
  },
};

// 이렇게 분리 할때의 장점은 추적이 매우 쉬워짐
