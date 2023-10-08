function List({ isComplete, text, index }) {
  const listElement = document.createElement('li')

  const completeButton = document.createElement('button')
  listElement.appendChild(completeButton)

  const pElement = document.createElement("p")
  listElement.appendChild(pElement)
  pElement.textContent = text

  const deleteButton = document.createElement('button')
  listElement.appendChild(deleteButton)

  return listElement
}
// isComplete를 어떻게 바꿀것인가..

// 삭제는 ?
