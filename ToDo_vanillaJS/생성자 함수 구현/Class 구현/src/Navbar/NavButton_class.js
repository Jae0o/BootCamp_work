export default class NavButton {
  constructor({ target, purpose, className, onEvent }) {
    this.buttonElement = document.createElement('button')
    this.buttonElement.setAttribute('class', className)
    this.buttonElement.textContent = purpose
    target.appendChild(this.buttonElement)

    this.buttonElement.addEventListener('click', () => {
      onEvent({ purpose })
    })
  }
}
