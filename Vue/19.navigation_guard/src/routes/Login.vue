<template>
  <form @submit.prevent="">
    <input
      v-model="userID"
      placeholder="ID"
      type="text" />
    <input
      v-model="userPW"
      placeholder="PW"
      type="password" />
    <button @click="logIn">Login !</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        userID: "",
        userPW: "",
      };
    },
    methods: {
      logIn() {
        this.$store.dispatch("user/logIn", {
          id: this.userID,
          pw: this.userPW,
        });
      },
    },
  };
</script>
