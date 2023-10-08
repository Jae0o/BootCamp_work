function ToDoListBox({ target }) {
  const ulElement = document.createElement("ul")
  target.appendChild(ulElement)

  this.listData = getItem()

  this.setSate = function (newState) {
    this.listData = newState
    this.render()
  }

  this.render = () => {
    // 렌더 될댸마다 listElement의 자식노드들을 삭제함
    ulElement.replaceChildren();

    // 렌더링 시작시 현재 주어진 list 데이터들과 List component를 이용해 
    // ListElement들을 만들고 배열에 담음
    const listElements = [...this.listData.map((list, index) => {
      const isComplete = list.isComplete
      const text = list.text
      return new List({
        isComplete,
        text,
        index
      })
    })]

    listElements.map((list) => {
      return ulElement.appendChild(list)
    })


  }

  this.render()

}
