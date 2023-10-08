function InputText({ target }) {
  const inputElement = document.createElement('input')
  target.appendChild(inputElement)
  inputElement.setAttribute("class", "footer_input")
  inputElement.setAttribute("type", "text")
}
