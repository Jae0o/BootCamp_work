<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <RouterView />
  <button @click="$router.push(`/`)">Home</button>
  <button @click="$router.push(`/about`)">About</button>
</template>

<script></script>
