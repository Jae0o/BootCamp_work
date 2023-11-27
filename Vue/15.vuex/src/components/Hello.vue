<template>
  <h1>{{ msg }}</h1>
  <h1>{{ reversedMsg }}</h1>
  <h2>{{ count }}</h2>
  <button @click="increaseCount">Increase!!</button>
  <button @click="fetchTodo">Update Msg</button>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg;
    },
    count() {
      return this.$store.state.count;
    },
    reversedMsg() {
      return this.$store.getters.reversedMsg;
    },
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount");
    },
    fetchTodo() {
      this.$store.dispatch("fetchTodo");
    },
  },
};
</script>
