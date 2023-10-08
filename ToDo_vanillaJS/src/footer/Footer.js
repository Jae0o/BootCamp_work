function Footer({ target, onSubmit }) {
  const footerElement = document.createElement("form");
  target.appendChild(footerElement)
  footerElement.setAttribute("class", "footer")

  footerElement.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputElement = document.querySelector(".footer_input")

    onSubmit(inputElement.value)

    inputElement.value = ""
  })

  this.render = function () {
    new InputText({ target: footerElement })
    new SubmitButton({ target: footerElement })
  }

  this.render()
}
