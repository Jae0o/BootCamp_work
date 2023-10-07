function Footer({ target }) {
  const footerElement = document.createElement("form");
  target.appendChild(footerElement)
  footerElement.setAttribute("class", "footer")

  this.render = function () {
    new InputText({ target: footerElement })
    new SubmitButton({ target: footerElement })
  }

  this.render()
}
