export default function Header({ target, state }) {
  const headerElement = document.createElement('h3');
  target.appendChild(headerElement)
  this.state = state

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    const { isLoading, selectedUserName } = this.state

    headerElement.innerHTML = `${selectedUserName} 의 Todo ${isLoading ? "로딩중입니다" : ""}`


  }

  this.render()
}
