// header 부분의 component 를 관리할 component container
function Header({ target, state }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // header 태그의 생성과 전달받은 app 요소로 append 함!
  const headerElement = document.createElement("header")
  target.appendChild(headerElement)
  headerElement.setAttribute("class", "header")

  // 상태의 변화에따른 동작을 다룸
  this.setState = (newState) => {
    this.render(newState)
  }

  // TodoList의 제목 title component 호출
  this.render = function (state) {
    headerElement.replaceChildren()
    new Title({ target: headerElement })

    // List들의 갯수를 알려줄 ListCounter component 호출
    const listCount = new ListCounter({
      target: headerElement,
      count: state
    })
  }
  this.render(state)
}
