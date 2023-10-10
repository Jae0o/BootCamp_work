function Form({ target, onSubmit }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // form tag 생성과 app에 append 함
  const formElement = document.createElement("form");
  target.appendChild(formElement)
  formElement.setAttribute("class", "form")

  // 만약 submit 이벤트가 발생했을때의 이벤트 리스너 등록!
  formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    // submit 시점의 input value 값을 받기위해 input을 참음
    const inputElement = document.querySelector(".form_input")
    // 해당 Input의 value를 따로 변수에 담음
    const newText = inputElement.value
    // text가 빈값 / 예외를 위한 조건
    if (newText === 0 || newText) {
      // 정상값이라면 component에서 전달받은 매개변수 함수를 호출하고 인수로 newText 전달
      onSubmit(newText)
    }
    // 적용 완료후 input창을 빈값으로 만듬
    inputElement.value = ""
  })

  // 처음 렌더링을 위해
  this.render = function () {
    // input rendering
    new InputText({ target: formElement })
    // button rendering
    new SubmitButton({ target: formElement })
  }
  this.render()
}
