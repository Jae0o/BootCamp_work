// App 앱 전체에 어떤 component 들이 다루어지는지

function App({ target, state }) {
  const appElement = document.createElement("div")
  const parentNode = target
  parentNode.appendChild(appElement);

  this.render = function () {

    new Header({ target: appElement, state });











  }

  this.render();
}