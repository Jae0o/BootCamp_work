export default class InputText {
  constructor({ target }) {

    this.inputElement = document.createElement('input')
    this.inputElement.setAttribute('type', 'text')
    this.inputElement.setAttribute('class', 'form_input')
    target.appendChild(this.inputElement)
  }
}
