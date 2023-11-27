<template>
  <h1>{{ msg }}</h1>
  <h3 @click="increaseCount">{{ count }}</h3>
</template>

<script>
import { state, mutations } from "~/store/index";

export default {
  data() {
    return state;
  },
  methods: {
    increaseCount: mutations.increaseCount,
  },
};
</script>

<style>
h1 {
  border: 1px solid red;
}
</style>
