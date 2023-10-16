import { pushRouter } from "./router.js"

export default function LinkButton({ target, state }) {
  this.state = state
  const linkButton = document.createElement('button')
  target.appendChild(linkButton)
  this.render = () => {
    linkButton.textContent = this.state.text

  }
  this.render()

  linkButton.addEventListener('click', () => pushRouter(this.state.link))
}
