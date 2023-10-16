export default function Editor({ target, state = { title: "", content: "" }, onEditing }) {
  const editorElement = document.createElement('div')
  target.appendChild(editorElement)

  this.state = state;


  editorElement.innerHTML = `
  <input type="text" name="title" style="width:600px;"/>
  <div name="content" contentEditable='true' style="width:600px;height:400px;"></div>
`

  this.setState = (newState) => {
    this.state = newState

    this.render()
  }
  this.render = () => {
    const changeLines = this.state.content.split('\n').map(line => {
      if (line.indexOf('# ') === 0) {
        return `<h1>${line.substring(2)}</h1>`
      }

      if (line.indexOf('## ') === 0) {
        return `<h2>${line.substring(3)}</h2>`
      }

      if (line.indexOf('### ') === 0) {
        return `<h3>${line.substring(3)}</h3>`
      }

      return line
    }).join("<br>")

    editorElement.querySelector('[name=title]').value = this.state.title
    editorElement.querySelector('[name=content]').innerHTML = changeLines
  }

  this.render()


  editorElement.querySelector('[name=title]').addEventListener('keyup', e => {
    const nextState = {
      ...this.state,
      title: e.target.value
    }
    this.setState(nextState)
    onEditing(this.state)
  })

  editorElement.querySelector('[name=content]').addEventListener('input', (e) => {
    const nextState = {
      ...this.state,
      content: e.target.innerText
    }
    this.setState(nextState)
    // onEditing(this.state)
  })
}
