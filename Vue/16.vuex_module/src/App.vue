<template>
  <h1>{{ message }}</h1>
  <h1></h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState("message", ["message"]),
  },
};
</script>
