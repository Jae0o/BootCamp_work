export default function TodoList({ target, state, onDrop, onRemove }) {
  const todolistElement = document.createElement("div");
  target.appendChild(todolistElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const { title, todos = [] } = this.state;
    todolistElement.innerHTML = `
      <h2>${title}</h2>
      <ul draggable="true">
        ${todos
          .map(
            (todo) =>
              `<li data-id="${todo._id}" draggable="true">${todo.content}<button>x</button></li>`
          )
          .join("")}
      </ul>
      ${todos.length === 0 ? "설정된 일이 없습니다" : ""}
    `;
  };

  this.render();

  todolistElement.addEventListener("dragstart", (e) => {
    const li = e.target.closest("li");

    e.dataTransfer.setData("todo", li.dataset.id);
  });

  todolistElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });

  todolistElement.addEventListener("drop", (e) => {
    e.preventDefault();
    const droppedTodoId = e.dataTransfer.getData("todo");

    const { todos } = this.state;

    if (!todos.find((todo) => todo._id === droppedTodoId)) {
      onDrop(droppedTodoId);
    }
  });

  todolistElement.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const li = e.target.closest("li");
      if (li) {
        onRemove(li.dataset.id);
      }
    }
  });
}
