function DarkMode({ target, onEvent }) {
  const buttonElement = document.createElement('button')
  target.appendChild(buttonElement)
  buttonElement.textContent = "DarkMode"

  buttonElement.addEventListener('click', () => {
    onEvent({ isDarkMode: true })
  })
}
