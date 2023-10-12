import Header from "./Header.js";
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { requset } from "./Api.js";

export default function App({ target, state }) {
  const appElement = document.createElement('div');
  target.appendChild(appElement)

  this.state = {
    username: 'jae0',
    todos: [],
    isLoading: false
  }

  this.setState = (newState) => {
    this.state = newState;
    todoList.setState({
      todos: newState.todos,
      isLoading: this.state.isLoading
    })
    header.setState({
      isLoading: this.state.isLoading,
      username: this.state.username
    })
  }



  const header = new Header({
    target: appElement,
    state: {
      isLoading: this.state.isLoading,
      username: this.state.username
    }
  })

  const todoList = new TodoList({
    target: appElement,
    state: this.state.todos,
    onRemove: async (id) => {
      await requset(`/${this.state.username}/${id}`, {
        method: "DELETE"
      })
      await fetchTodo()
    },
    onToggle: async (id) => {
      const { username } = this.state
      await requset(`/${username}/${id}/toggle`, {
        method: "PUT"
      })
      await fetchTodo()
    }
  })


  new TodoForm({
    target: appElement,
    onSubmit: async (content) => {
      // 낙관적 업데이트
      // 무조건 등록에 성공한다는 가정하에 혹시 모를 업로드 딜레이를 방지하기위해
      // 미리 등록값을 보여주고 등록이 완료된후 원래의 데이터로 한번더 보여줌 ...
      const todo = {
        content,
        isCompleted: false
      }
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          todo
        ]
      })
      // ... 여기까지 낙관적 업데이트
      // but 현재는 의미없는 부분! 왜냐면 loading 구현으로 인해 의미없게 로딩이 구현됨

      const { username } = this.state
      console.log(content)
      await requset(`/${username}`, {
        method: "POST",
        body: JSON.stringify({
          content,
          isCompleted: false
        })
      })
      await fetchTodo()
    }
  })

  const fetchTodo = async () => {
    const { username } = this.state

    if (username) {
      this.setState({
        ...this.state,
        isLoading: true
      })
      const todos = await requset(`/${username}`)
      this.setState({
        ...this.state,
        todos,
        isLoading: false
      })
    }
  }
  fetchTodo()




}
