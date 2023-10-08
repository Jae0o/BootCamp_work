function SubmitButton({ target }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }
  // Submit을 도와줄 button 생성
  const buttonElement = document.createElement("button")
  buttonElement.setAttribute('class', "form_submitButton")
  buttonElement.textContent = "Submiit"
  target.appendChild(buttonElement)


}
