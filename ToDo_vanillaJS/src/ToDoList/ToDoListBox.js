function ToDoListBox({ target, state, onEvent }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // list 들을 담을 ul 태그를 생성하고 app 에 append함!
  const ulElement = document.createElement("ul")
  target.appendChild(ulElement)

  // 전달받은 list들을 담음
  this.listData = state


  // 상태의 변화에따른 동작
  this.setState = function (newState) {
    // 새롭게 전달받은 list 들을 기존의 listData 에 담아준후 rendering
    this.listData = newState
    this.render()
  }

  // 이벤트 발생시의 동작
  this.setEvent = function (params) {
    // setEvent 가 실행되며 전달받은 매개변수를 이용해
    // component 매개변수로 전달받은 onEvent 호출
    onEvent(params)
  }

  this.render = () => {
    // 렌더링 될때마다 listElement의 자식노드들을 삭제함
    ulElement.replaceChildren();

    // 렌더링 시작시 현재 주어진 list 데이터들과 List component를 이용해 
    // ListElement들을 만들고 배열에 담음
    const listElements = [...this.listData.map((list) => {
      // list를 만들기 위해 필요한 data를 각각의 매개변수에 담음
      const isCompleted = list.isCompleted
      const text = list.text
      const key = list.key

      // map의 결과로 list component를 만들어 반환함
      return new List({
        isCompleted,
        text,
        key,
        onClick: (params) => this.setEvent(params)
      })
    })]

    // 만들어진 List component 들을 ul태그에 append 해줌
    listElements.forEach((list) => {
      return ulElement.appendChild(list)
    })

  }
  // 맨처음 렌더링될때를 위한 호출
  this.render()
}
