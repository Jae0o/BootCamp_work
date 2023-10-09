function Navbar({ target, onEvent }) {
  const navElement = document.createElement("nav")
  target.appendChild(navElement)
  navElement.setAttribute('id', 'navbar')

  this.render = function () {
    new DarkMode({
      target: navElement,
      // 다크 모드 이벤트를 App까지 전달해줄 함수!
      onEvent
    })

    new DeleteAll({
      target: navElement,
      // Delete All 이벤트를 App까지 전달해줄 함수!
      onEvent
    })
  }

  this.render()
}
