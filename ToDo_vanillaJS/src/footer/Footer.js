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

    // 예외 적용해야함

    // submit 시점의 input value 값을 받기위해 input을 참음
    const inputElement = document.querySelector(".form_input")
    // 이후 value를 compoenet가 매개변수로 받아온 onSubmit 함수의 인수로 전달후 함수 호출함
    onSubmit(inputElement.value)

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
