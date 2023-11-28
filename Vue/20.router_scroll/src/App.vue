<template>
  <header>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </header>
  <section>
    <RouterView />
  </section>
</template>

<script></script>

<style scoped>
  header {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    border: 1px solid red;
  }

  section {
    margin-top: 80px;
  }
</style>
