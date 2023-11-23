<template>
  <h1 @click="$emit('helloEvent')">{{ message }}</h1>
</template>

<script>
export default {
  props: {
    message: String,
  },
  emits: ["helloEvent"],
};
</script>
