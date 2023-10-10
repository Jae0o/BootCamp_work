export default class SubmitButton {
  constructor({ target }) {

    this.buttonElement = document.createElement('button');
    this.buttonElement.setAttribute('class', 'form_submitButtonA')
    this.buttonElement.textContent = "Submit"
    target.appendChild(this.buttonElement)
  }
}
