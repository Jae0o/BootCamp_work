<template>
  <div class="todo-creator shadow">
    <TheIcon
      active
      @click="createTodo">
      add
    </TheIcon>
    <input
      :value="title"
      placeholder="새로운 할일을 작성하세요?"
      @input="title = ($event.target as HTMLInputElement).value"
      @keydown.enter="createTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheIcon from "~/components/TheIcon.vue";
import { useTodoStore } from "~/store/todos";

const todoStore = useTodoStore();
const title = ref("");

async function createTodo() {
  if (!title.value.trim()) return;

  try {
    await todoStore.createTodo({
      title: title.value
    });

    title.value = "";
  } catch (e) {
    console.log(e);
  }
}
</script>

<style scoped lang="scss">
.todo-creator {
  height: var(--item-height);
  position: relative;
  :deep(.the-icon) {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    left: 24px;
  }
  input {
    padding: 0 10px 0 80px;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    border: none;
    outline: none;
    border-radius: 6px;
    &::placeholder {
      color: #ccc;
    }
  }
}
</style>
