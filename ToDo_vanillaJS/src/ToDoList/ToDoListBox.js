function ToDoListBox({ target, state, onEvent }) {
  const ulElement = document.createElement("ul")
  target.appendChild(ulElement)
  console.log(state)
  this.listData = state


  // 상태의 변화에따른 동작
  this.setState = function (newState) {
    this.listData = newState
    this.render()
  }

  // 이벤트 발생시의 동작
  this.setEvent = function (params) {
    onEvent(params)
  }



  this.render = () => {
    // 렌더 될댸마다 listElement의 자식노드들을 삭제함
    ulElement.replaceChildren();

    // 렌더링 시작시 현재 주어진 list 데이터들과 List component를 이용해 
    // ListElement들을 만들고 배열에 담음
    const listElements = [...this.listData.map((list) => {
      const isComplete = list.isComplete
      const text = list.text
      const key = list.key

      return new List({
        isComplete,
        text,
        key,
        onDelete: (lists) => this.setEvent(lists),
        onCompleted: (target) => this.setEvent(target)

      })
    })]

    listElements.map((list) => {
      return ulElement.appendChild(list)
    })


  }

  this.render()

}
