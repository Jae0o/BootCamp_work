export default function Header({ target, state }) {
  const headerElement = document.createElement('h1');
  target.appendChild(headerElement)
  this.state = state

  this.render = () => {
    headerElement.innerHTML = `${this.state} 의 Todo`

  }

  this.render()
}
