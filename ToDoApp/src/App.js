import Header from "./Header.js";
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"

export default function App({ target }) {
  const appElement = document.createElement('div');
  target.appendChild(appElement)

  this.state = {
    username: "test",
    todo: [
      {
        _id: 1,
        content: 'Test List item 1',
        isCompleted: false,
      },
      {
        _id: 2,
        content: "Test List item 2",
        isCompleted: true
      },
      {
        _id: 3,
        content: "테스트 입니다.",
        isCompleted: false
      }
    ]
  }
  new Header({
    target: appElement,
    state: this.state.username
  })

  new TodoList({
    target: appElement,
    state: this.state.todo,
    onRemove: (id) => {
      console.log(id)
    },
    onToggle: (id) => {
      console.log(id)
    }
  })


  new TodoForm({
    target: appElement,
    onSubmit: (text) => {
      console.log(text)
    }
  })

}
