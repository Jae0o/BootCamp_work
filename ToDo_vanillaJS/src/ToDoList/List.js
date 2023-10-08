function List({ isCompleted, text, key, onDelete, onToggle }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  const listElement = document.createElement('li')

  // isComplete 관련

  const completeCheckBox = document.createElement('input')
  completeCheckBox.setAttribute("type", "checkbox")
  listElement.appendChild(completeCheckBox)
  completeCheckBox.addEventListener("click", () => {
    onToggle({ key, isCompleted })
  })

  const pElement = document.createElement("p")
  listElement.appendChild(pElement)
  pElement.textContent = text





  //  delete button
  const deleteButton = document.createElement('button')
  listElement.appendChild(deleteButton)
  deleteButton.textContent = "Delete"

  deleteButton.addEventListener('click', () => {
    const deleteTarget = { key }
    onDelete({ deleteTarget })
  })






  if (isCompleted) {
    completeCheckBox.setAttribute("checked", "true")
    pElement.style.textDecoration = "line-through"
  }

  return listElement
}

