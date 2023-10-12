export default function TodoList({ target, state, onToggle, onRemove }) {
  const todoElement = document.createElement('div');
  target.appendChild(todoElement)

  this.state = state

  this.setState = (newState) => {

    this.state = newState;
    this.render()
  }

  this.render = () => {
    const { isLoading, todos } = this.state

    if (!isLoading && this.state.length === 0) {
      todoElement.innerHTML = "none"
      return
    }
    todoElement.innerHTML = `
      <ul>
        ${todos.map(({ _id, content, isCompleted }) => `
      <li data-id="${_id}" class='todo_item'>
        ${isCompleted ? `<s>${content}</s>` : content}
        <button class="removeButton">delete</button>
      </li>
      `
    ).join("")}
      </ul>
    `
    todoElement.addEventListener('click', (e) => {
      // 현재의 자신을 기준으로 상위에서 가장 가까운 태그를 찾음
      const liElement = e.target.closest('li')

      if (liElement) {
        const { id } = liElement.dataset
        const { className } = e.target
        if (className === 'removeButton') {
          onRemove(id)
          return
        }
        onToggle(id)
      }

    })
  }

  this.render()
}
