import Header from "./Header.js";
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { requset } from "./Api.js";
import UserList from "./UserList.js";

export default function App({ target, state }) {

  const userListElement = document.createElement('div');
  const todoListElement = document.createElement('div');
  target.appendChild(userListElement)
  target.appendChild(todoListElement)


  this.state = {
    userList: [],
    selectedUserName: null,
    todos: [],
    isLoading: false
  }

  this.setState = (newState) => {
    this.state = newState;
    todoList.setState({
      todos: newState.todos,
      isLoading: this.state.isLoading,
      selectedUserName: this.state.selectedUserName
    })
    header.setState({
      isLoading: this.state.isLoading,
      selectedUserName: this.state.selectedUserName
    })
    userList.setState(this.state.userList ?? [])

    this.render()
  }


  this.render = () => {
    const { selectedUserName } = this.state

    todoListElement.style.display = selectedUserName ? 'block' : "none"

  }
  const userList = new UserList({
    target: userListElement,
    state: this.state.userList,
    onSelect: async (username) => {
      // history.pushState(null, null, `/ToDoApp/${username}`)
      this.setState({
        ...this.state,
        selectedUserName: username
      })
      await fetchTodo()
    }

  })


  const header = new Header({
    target: todoListElement,
    state: {
      isLoading: this.state.isLoading,
      selectedUserName: this.state.selectedUserName
    }
  })

  const todoList = new TodoList({
    target: todoListElement,
    state: {
      todos: this.state.todos,
      isLoading: this.state.isLoading,
      selectedUserName: this.state.selectedUserName
    },

    onRemove: async (id) => {
      await requset(`/${this.state.selectedUserName}/${id}`, {
        method: "DELETE"
      })
      await fetchTodo()
    },
    onToggle: async (id) => {
      const { selectedUserName } = this.state
      await requset(`/${selectedUserName}/${id}/toggle`, {
        method: "PUT"
      })
      await fetchTodo()
    }
  })


  new TodoForm({
    target: todoListElement,
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

      const { selectedUserName } = this.state
      console.log(content)
      await requset(`/${selectedUserName}`, {
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
    const { selectedUserName } = this.state

    if (selectedUserName) {
      this.setState({
        ...this.state,
        isLoading: true
      })
      const todos = await requset(`/${selectedUserName}`)
      this.setState({
        ...this.state,
        todos,
        isLoading: false
      })
    }
  }


  const fetchUserList = async () => {
    const userList = await requset('/users')
    console.log(userList)
    this.setState({
      ...this.state,
      userList
    })
  }

  const init = async () => {
    await fetchUserList()

    // const { pathname } = location

    // if (pathname.length > 9) {
    //   this.setState({
    //     ...this.state,
    //     selectedUserName: pathname.substring(9)
    //   })
    //   await fetchTodo()
    // }
  }
  init()
  this.render()
}
