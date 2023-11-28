<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <RouterView />
  <button
    v-if="!isLoggedIn"
    @click="logIn">
    Log In !
  </button>
  <button
    v-else
    @click="logOut">
    Log Out !
  </button>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.state.user.isLoggedIn;
      },
    },
    created() {
      this.$store.dispatch("user/initialize");
    },
    methods: {
      logIn() {
        this.$router.push("/login");
      },
      logOut() {
        this.$store.dispatch("user/logOut");
      },
    },
  };
</script>
