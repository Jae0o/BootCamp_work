function SubmitButton({ target }) {
  const buttonElement = document.createElement("button")
  buttonElement.setAttribute('class', "footer_submitButton")
  buttonElement.textContent = "Submiit"
  target.appendChild(buttonElement)


}
