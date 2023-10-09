function DeleteAll({ target, onEvent }) {

  const buttonElement = document.createElement('button')
  target.appendChild(buttonElement)
  buttonElement.setAttribute('class', 'navbar_deleteAll')
  buttonElement.textContent = "Delete All"

  buttonElement.addEventListener('click', () => {
    confirm("delete All ?") ? onEvent({ deleteAll: true }) : ""

  })
}
