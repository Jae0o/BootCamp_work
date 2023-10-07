// header 부분의 component 를 관리할 component
function Header({ target, state }) {
  const headerElement = document.createElement("header")
  target.appendChild(headerElement)
  headerElement.setAttribute("class", "header")

  this.render = function () {

    new Title({ target: headerElement, state })

    new ListCounter({ target: headerElement, state })

  };

  this.render();
}
