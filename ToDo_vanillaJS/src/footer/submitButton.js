function SubmitButton({ target }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  const buttonElement = document.createElement("button")
  buttonElement.setAttribute('class', "footer_submitButton")
  buttonElement.textContent = "Submiit"
  target.appendChild(buttonElement)


}
