function Title({ target }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  const h3Element = document.createElement("h3");
  target.appendChild(h3Element);

  h3Element.textContent = "Jae0 Todo List"
  h3Element.setAttribute("class", "header_title")
}
