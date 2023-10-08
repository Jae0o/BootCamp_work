function InputText({ target }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }
  // 사용자의 입력값을 받기위한 input type = text 생성과 form에 append
  const inputElement = document.createElement('input')
  target.appendChild(inputElement)
  inputElement.setAttribute("class", "form_input")
  inputElement.setAttribute("type", "text")
}
