function List({ isCompleted, index, text, key, onClick }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // list를 넣어줌
  const listElement = document.createElement('li')
  listElement.setAttribute('class', 'listBox_list')

  /* isCompleted 관련 부분 */

  // input type = checkbox 태그를 만들고 li에 append
  const inputElement = document.createElement('input')
  inputElement.setAttribute("type", "checkbox")
  inputElement.setAttribute('class', "listBox_list_checkBox_input")
  // label 지정을 위해 id 지정
  inputElement.setAttribute('id', `checkbox${index}`)
  // checkboxElement.appendChild(inputElement)
  listElement.appendChild(inputElement)

  // label 태그 생성과 해당 label을 input과 이어주기 위해 작업
  const labelElement = document.createElement("label")
  labelElement.textContent = "ToDo"
  labelElement.setAttribute('class', "listBox_list_checkBox_label")
  labelElement.setAttribute('for', `checkbox${index}`)
  listElement.appendChild(labelElement)

  // checkbox에 이벤트리스너를 할당함
  inputElement.addEventListener("click", () => {
    // 클릭 발생시 인수로 전달받은 onClick이 실행되고, 
    // 해당 함수의 인수로 현재 발생한 component 가 가지고있는 key와 
    // isCompeleted 롤 조작하기위한것임을 알리기위한 isCompleted를 같이 전달함
    onClick({ key, isCompleted })
  })

  /* text */

  // list의 text를 출력하기위한 P태그 생성과 li에 append
  const pElement = document.createElement("p")
  listElement.appendChild(pElement)
  pElement.textContent = text
  pElement.setAttribute('class', 'listBox_list_text')




  /* delete 버튼 관련 */

  // button 태그 생성과 li에 append
  const deleteButton = document.createElement('button')
  listElement.appendChild(deleteButton)
  deleteButton.textContent = "Delete"
  deleteButton.setAttribute("class", "listBox_list_deleteButton")
  // 클릭 이벤트를 등록함!
  deleteButton.addEventListener('click', () => {
    // 해당 이벤트가 삭제인지를 확인하기위해 isDelete를 같이 전달함
    onClick({ key, isDelete: true })
  })

  // 렌더링 당시 만약 isCompleted가 true라면
  if (isCompleted) {
    // checkbox checked !
    inputElement.setAttribute("checked", "true")
    // text에 삭선 긋기!
    pElement.style.textDecoration = "line-through"
    pElement.style.textDecorationColor = "#F4991A"
    pElement.style.textDecorationThickness = "2px"
  }

  return listElement
}

