<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "~/store/todos";

const todoStore = useTodoStore();
todoStore.fetchTodos();
</script>

<style lang="scss" scoped></style>
