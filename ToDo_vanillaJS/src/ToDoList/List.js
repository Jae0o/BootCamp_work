function List({ isComplete, text, key, onDelete, onCompleted }) {
  const listElement = document.createElement('li')
  console.log(isComplete)
  // isComplete 관련

  const completeCheckBox = document.createElement('input')
  completeCheckBox.setAttribute("type", "checkbox")
  listElement.appendChild(completeCheckBox)
  completeCheckBox.addEventListener("click", () => {
    onCompleted({ key, isComplete })
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

  if (isComplete) {
    completeCheckBox.setAttribute("checked", "true")
    pElement.style.textDecoration = "line-through"
  }

  return listElement
}

