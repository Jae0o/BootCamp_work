function DarkMode({ target, onEvent }) {
  const buttonElement = document.createElement('button')
  target.appendChild(buttonElement)
  buttonElement.setAttribute('class', 'navbar_darkmodeButton')
  buttonElement.textContent = "DarkMode"

  buttonElement.addEventListener('click', () => {
    onEvent({ darkmodeToggle: true })
  })
}
