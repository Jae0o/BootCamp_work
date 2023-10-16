export default function Editor({ target, state = { title: "", content: "" }, onEditing }) {
  const editorElement = document.createElement('div')
  target.appendChild(editorElement)

  this.state = state;

  let isInitialize = false

  this.setState = (newState) => {
    this.state = newState
    editorElement.querySelector('[name=title]').value = this.state.title
    editorElement.querySelector('[name=content]').value = this.state.content
    this.render()
  }
  this.render = () => {
    if (!isInitialize) {
      editorElement.innerHTML = `
      <input type="text" name="title" value="${this.state.title}" style="width:600px;"/>
      <textarea name="content" style="width:600px;height:400px;">${this.state.content}</textarea>
    `
    }
    isInitialize = true
  }

  editorElement.addEventListener('keyup', (e) => {
    const { target } = e
    const name = target.getAttribute("name")

    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value
      }

      this.setState(nextState)

      onEditing(this.state)
    }
  })
  this.render()
}
