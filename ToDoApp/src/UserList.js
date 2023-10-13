export default function UserList({ target, onSelect, state }) {
  const userListElement = document.createElement('div')
  target.appendChild(userListElement);

  this.state = state

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    userListElement.innerHTML = `
      <h1>Users</h1>
      <ul>
        ${this.state.map(user => `
          <li data-username="${user}">${user}</li>
        `).join('')}
        <li>
          <form>
            <input type='text' placeholder=''new user name' class="newUser">
          </form>
        </li>
      </ul>
    `
  }
  this.render()

  userListElement.addEventListener('click', (e) => {
    const liElement = e.target.closest('li[data-username]')

    if (liElement) {
      const { username } = liElement.dataset
      onSelect(username)
    }
  })

  userListElement.addEventListener('submit', (e) => {
    const newUser = userListElement.querySelector('.newUser')
    const newUserValue = newUser.value
    if (newUserValue.length > 2) {
      onSelect(newUserValue)
      newUser.value = ""
    }
  })
} 
