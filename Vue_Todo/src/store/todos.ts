import { defineStore } from "pinia";
import axios from "axios";

export type Todos = Todo[];
export interface Todo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface CreateTodoPayload {
  title: string;
}

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todos
  }),
  getters: {},
  actions: {
    async fetchTodos() {
      const { data } = await axios.post("/api/todos", {
        method: "GET"
      });

      this.todos = data;
    },
    async createTodo({ title }: CreateTodoPayload) {
      await axios.post("/api/todos", {
        method: "POST",
        data: {
          title
        }
      });
    }
  }
});
