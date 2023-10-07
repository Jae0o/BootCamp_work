function SubmitButton({ target }) {
  const buttonElement = document.createElement("button")
  buttonElement.setAttribute('class', "footer_submitButton")
  buttonElement.textContent = "Submiit"
  target.appendChild(buttonElement)

  buttonElement.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
  })
}
