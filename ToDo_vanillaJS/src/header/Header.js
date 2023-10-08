// header 부분의 component 를 관리할 component container
function Header({ target }) {
  const headerElement = document.createElement("header")
  target.appendChild(headerElement)
  headerElement.setAttribute("class", "header")

  this.setState = () => {
    listCount.setCount()
  }

  new Title({ target: headerElement })
  const listCount = new ListCounter({ target: headerElement })

}
