// header 부분의 component 를 관리할 component container
function Header({ target, state }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  const headerElement = document.createElement("header")
  target.appendChild(headerElement)
  headerElement.setAttribute("class", "header")

  // 상태의 변화에따른 동작
  this.setState = (newState) => {

    listCount.Refresh(newState)
  }

  new Title({ target: headerElement })


  const listCount = new ListCounter({
    target: headerElement,
    count: state
  })

}
