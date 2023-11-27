<template>
  <h1>{{ msg }}</h1>
  <Hello />
  <World />
</template>

<script>
import Hello from "~/components/Hello";
import World from "./components/World.vue";
export default {
  components: {
    Hello,
    World,
  },
  data() {
    return {
      msg: "App Component Data",
    };
  },
};
</script>
