import TodoList from "./TodoList.js"

const data = [
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

const appElement = document.querySelector('#app')
new TodoList({
  target: appElement,
  state: data,
  onRemove: (id) => {
    console.log(id)
  },
  onToggle: (id) => {
    console.log(id)
  }
})
