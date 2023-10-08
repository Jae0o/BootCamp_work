function List({ isComplete, text, key, onDelete }) {
  const listElement = document.createElement('li')

  const completeButton = document.createElement('button')
  listElement.appendChild(completeButton)

  const pElement = document.createElement("p")
  listElement.appendChild(pElement)
  pElement.textContent = text

  //  delete button
  const deleteButton = document.createElement('button')
  listElement.appendChild(deleteButton)
  deleteButton.textContent = "Delete"

  deleteButton.addEventListener('click', () => {
    onDelete({ key })
  })

  return listElement
}
// isComplete를 어떻게 바꿀것인가..

// 삭제는 ?
