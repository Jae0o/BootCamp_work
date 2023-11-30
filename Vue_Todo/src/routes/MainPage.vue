<template>
  <h1>main Page</h1>
</template>

<script setup lang="ts">
(async () => {
  const res = await fetch("/api/hello", {
    method: "POST"
  });
  const test = res.json();
  console.log(test);
})();
</script>
