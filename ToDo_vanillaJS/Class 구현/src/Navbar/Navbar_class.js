import NavButton from "./NavButton_class.js";

export default class Navbar {
  constructor({ target, onEvent }) {
    this.navElement = document.createElement('nav');
    this.navElement.setAttribute('class', 'navbar')
    target.appendChild(this.navElement)
    this.onEvent = onEvent


    this.render()
  }

  render() {
    // 이전 생성자 함수에서의 사용방법과 다르게 하나의 Component로 두개으 버튼을 만듬!
    new NavButton({
      target: this.navElement,
      purpose: 'DarkMode',
      className: "navbar_darkmodeButton",
      onEvent: (params) => this.onEvent(params)
    })

    new NavButton({
      target: this.navElement,
      purpose: "DeleteAll",
      className: "navbar_deleteAllButton",
      onEvent: (params) => this.onEvent(params)
    })
  }
}
