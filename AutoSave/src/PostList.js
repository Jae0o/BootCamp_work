import { pushRouter } from "./router.js"

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


  postElement.addEventListener('click', (e) => {
    const liElement = e.target.closest('li')

    if (liElement) {
      const { id } = liElement.dataset
      pushRouter(`/posts/${id}`)
    }
  })

  this.render()


}
