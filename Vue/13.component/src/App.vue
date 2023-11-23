<template>
  <h1>{{ msg }}</h1>
  <Hello :message="msg" @helloEvent="eventHandler" />
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "App Component Data",
    };
  },
  methods: {
    eventHandler() {
      this.sendMSG = this.sendMSG.split("").reverse().join("");
    },
  },
};
</script>
