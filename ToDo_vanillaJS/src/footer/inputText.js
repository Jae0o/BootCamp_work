function InputText({ target }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  const inputElement = document.createElement('input')
  target.appendChild(inputElement)
  inputElement.setAttribute("class", "footer_input")
  inputElement.setAttribute("type", "text")
}
