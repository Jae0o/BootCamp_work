function Footer({ target, onSubmit }) {
  const footerElement = document.createElement("form");
  target.appendChild(footerElement)
  footerElement.setAttribute("class", "footer")

  footerElement.addEventListener("submit", (e) => {
    e.preventDefault()

    // 예외 적용해야함

    const inputElement = document.querySelector(".footer_input")
    onSubmit(inputElement.value)

    // 적용 완료후 input창 빈값으로
    inputElement.value = ""
  })

  this.render = function () {
    // input rendering
    new InputText({ target: footerElement })
    // button rendering
    new SubmitButton({ target: footerElement })
  }
  this.render()
}
