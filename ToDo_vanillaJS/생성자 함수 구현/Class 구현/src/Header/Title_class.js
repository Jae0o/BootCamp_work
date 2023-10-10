export default class Title {
  constructor({ target }) {
    this.titleElement = document.createElement('h3')
    this.titleElement.setAttribute('class', 'header_titleA')
    this.titleElement.textContent = "Jae0's ToDo List - class 사용 버전"
    target.appendChild(this.titleElement)
  }
}
