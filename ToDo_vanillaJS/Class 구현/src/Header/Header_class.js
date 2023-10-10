import ListCount from "./ListCount_class.js";
import Title from "./Title_class.js";

export default class Header {
  constructor({ target, count }) {
    this.headerElement = document.createElement('header');
    this.headerElement.setAttribute("class", "header")
    target.appendChild(this.headerElement)

    this.state = count

    this.render()
  }

  render() {
    this.headerElement.replaceChildren()

    new Title({ target: this.headerElement })
    new ListCount({
      target: this.headerElement,
      state: this.state
    })
  }

  setState(newState) {
    this.state = newState;
    this.render()
  }
}
