function ListCounter({ target, count }) {
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // p 태그 생성과 header 태그에 append 해줌
  const pElement = document.createElement("p");
  target.appendChild(pElement);
  pElement.setAttribute("class", "header_listCounter")

  // count 매개변수안에 들어있는 total / completd 갯수를 담음!
  this.totalCount = count.totalCount
  this.completedCount = count.completedCount

  // rendering 될때 아래의 text로 p태그의 텍스트 노드에 할당!
  this.render = function () {
    pElement.textContent = `total list : ${this.totalCount} / completed list : ${this.completedCount}`
  }
  this.render()

}
