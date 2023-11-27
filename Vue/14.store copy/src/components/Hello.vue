<template>
  <h1>{{ msg }}</h1>
  <h3 @click="decreaseCount">{{ reverseMsg }}</h3>
  <button @click="fetchTodo">get Todo !</button>
</template>

<script>
import { state, mutations, actions, getters } from "~/store/index";

export default {
  data() {
    return state;
  },
  computed: {
    reverseMsg: getters.reverseMsg,
  },
  methods: {
    decreaseCount: mutations.decreaseCount,
    fetchTodo: actions.fetchTodo,
  },
};
</script>
