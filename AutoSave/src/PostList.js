export default function PostList({ target, onPostClick, state }) {
  const postElement = document.createElement("div")
  target.appendChild(postElement)

  this.state = state

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    postElement.innerHTML = `
      <ul>
        ${this.state.map(post => `
          <li data-id="${post.id}"> ${post.title}</di>
        `).join("")}
      </ul>
    `
  }

  this.render()


}
