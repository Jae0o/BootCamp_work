import Form from './Form/Form_class.js';
import Header from './Header/Header_class.js';
import Navbar from './Navbar/Navbar_class.js';
import { darkmodeToggle, getDarkmode, setDarkmode } from './Stores/DarkMode.js';
import { completedToggle, deleteALL, deleteList, getCount, getList, setList } from './Stores/LocalStorage_class.js';
import TodoListBox from './TodoList/TodoListBox_class.js'

export default class App {
  constructor({ target }) {
    this.appElement = document.createElement('div');
    target.appendChild(this.appElement)
    this.appElement.setAttribute('class', 'appA')

    this.state = getList()
    const Listcount = getCount()
    const isDark = getDarkmode()
    darkmodeToggle(isDark)

    console.log(isDark)


    const header = new Header({
      target: this.appElement,
      count: Listcount
    });

    const navbar = new Navbar({
      target: this.appElement,
      onEvent: (params) => {
        if (params.purpose === 'DarkMode') {
          const isDark = setDarkmode()
          darkmodeToggle(isDark)
        }

        if (params.purpose === 'DeleteAll' && confirm("delete ALL??")) {
          const newState = deleteALL()
          todoList.setState(newState)
          const newCount = getCount()
          header.setState(newCount)
        }
      }
    });

    const todoList = new TodoListBox({
      target: this.appElement,
      state: this.state,
      onEvent: (params) => {

        if (params.onDelete) {
          const newState = deleteList(params.key)
          todoList.setState(newState)
        }

        if (params.onCompleted) {
          const newState = completedToggle(params.key)
          todoList.setState(newState)
        }


        const newCount = getCount()
        header.setState(newCount)
      }
    })

    new Form({
      target: this.appElement,
      onSubmit: (newText) => {
        setList(newText)
        const newStaet = getList()
        todoList.setState(newStaet)
        const newCount = getCount()
        header.setState(newCount)
      }
    })
  }
}
