import SyncTaskManager from "./SyncTaskManager.js";
import TodoList from "./TodoList.js";
import { request } from "./api.js";

export default function App({ target }) {
  const tasks = new SyncTaskManager();

  const handleTodoDrop = async (todoId, updateValue) => {
    const nextTodos = [...this.state.todos];
    const index = nextTodos.findIndex((todo) => todo._id === todoId);
    nextTodos[index].isCompleted = updateValue;

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    /* TaskQueue 에서 사용 */
    // tasks.addTask(async () => {
    //   await request(`/${todoId}/toggle`, {
    //     method: "PUT",
    //   });
    // });

    /* SyncTask 에서 사용 */
    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: "PUT",
    });
  };

  const handleTodoRemove = (todoId) => {
    const nextTodos = [...this.state.todos];
    const index = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos.splice(index, 1);

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.removeTask(`/${todoId}`);

    tasks.addTask({
      url: `/${todoId}`,
      method: "DELETE",
    });
  };

  this.state = {
    todos: [],
  };

  this.setState = (newState) => {
    this.state = newState;

    const { todos } = this.state;

    inCompletedTodoList.setState({
      ...inCompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const inCompletedTodoList = new TodoList({
    target,
    state: {
      title: "완료되지 않은 일들",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, false),
    onRemove: handleTodoDrop,
  });

  const completedTodoList = new TodoList({
    target,
    state: {
      title: "완료된 일들",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, true),
    onRemove: handleTodoRemove,
  });

  const fetchTodos = async () => {
    const todos = await request("");

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "변경 내용 동기화";
  target.appendChild(buttonElement);

  buttonElement.addEventListener("click", (e) => tasks.run());
}
