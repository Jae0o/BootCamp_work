import List from './List_class.js'

export default class TodoListBox {
  constructor({ target, state, onEvent }) {
    this.ulElement = document.createElement('ul');
    target.appendChild(this.ulElement)
    this.ulElement.setAttribute('class', 'listBox')

    this.listData = state
    this.onEvent = onEvent

    this.render()
  }

  render() {
    this.ulElement.replaceChildren()

    const listElements = [...this.listData.map((list, index) => {
      const text = list.text
      const key = list.key
      const isCompleted = list.isCompleted

      return new List({
        text,
        key,
        isCompleted,
        index,
        onClick: (params) => this.onEvent(params)
      })

    })]

    listElements.forEach((list) => {
      this.ulElement.appendChild(list)
    })
  }

  setState(newState) {
    this.listData = newState;
    this.render()
  }
}
