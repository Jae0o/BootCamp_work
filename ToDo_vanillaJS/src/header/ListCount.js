function ListCounter({ target, state }) {
  const pElement = document.createElement("p");
  target.appendChild(pElement);
  pElement.setAttribute("class", "header_listCounter")

  this.render = function () {
    pElement.textContent = `total list : ${state.listCount}`
  }
  this.render()
}