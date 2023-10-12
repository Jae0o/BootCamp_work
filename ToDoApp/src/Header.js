export default function Header({ target, state }) {
  const headerElement = document.createElement('h1');
  target.appendChild(headerElement)
  this.state = state

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    const { isLoading, username } = this.state
    headerElement.innerHTML = `${username} 의 Todo ${isLoading ? "로딩중입니다" : ""}`


  }

  this.render()
}
