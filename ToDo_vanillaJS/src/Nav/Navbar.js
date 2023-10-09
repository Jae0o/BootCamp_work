function Navbar({ target, onEvent }) {
  const navElement = document.createElement("nav")
  target.appendChild(navElement)
  navElement.setAttribute('id', 'navbar')

  this.setState = () => {

  }

  this.render = function () {
    new DarkMode({
      target: navElement,
      onEvent: function (params) {
        onEvent(params)
      }
    })
  }

  this.render()
}
