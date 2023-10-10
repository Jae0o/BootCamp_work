export default class List {
  constructor({ text, onClick, key, index, isCompleted }) {
    const listElement = document.createElement('li')
    listElement.setAttribute('class', 'listBox_listA')

    const inputElement = document.createElement('input')
    inputElement.setAttribute('class', 'listBox_list_checkBox_inputA')
    inputElement.setAttribute('type', 'checkbox')
    inputElement.setAttribute('id', `checkbox${index}`)
    listElement.appendChild(inputElement);

    const labelElement = document.createElement('label')
    labelElement.setAttribute('for', `checkbox${index}`)
    labelElement.setAttribute('class', "listBox_list_checkBox_labelA")
    labelElement.textContent = "ToDo"
    listElement.appendChild(labelElement)

    inputElement.addEventListener('click', () => {
      onClick({ key, onCompleted: true })
    })


    const pElement = document.createElement('p')
    listElement.appendChild(pElement)
    pElement.setAttribute('class', 'listBox_list_textA')
    pElement.textContent = text


    const buttonElement = document.createElement('button')
    buttonElement.setAttribute('class', 'listBox_list_deleteButtonA')
    buttonElement.textContent = "Delete"
    listElement.appendChild(buttonElement)
    buttonElement.addEventListener("click", () => {
      onClick({ key, onDelete: true })
    })

    if (isCompleted) {
      inputElement.setAttribute("checked", "true")
      pElement.style.textDecoration = "line-through"
      pElement.style.textDecorationThickness = "2px"
    }

    return listElement
  }
}
