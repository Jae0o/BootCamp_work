export default function ProductOptions({ target, state, onSelect }) {
  const selectElement = document.createElement('select');
  target.appendChild(selectElement)
  console.log(target)
  // 재고를 조회하는 API
  // 옵션을 조회하는 API 가 다르게 존재함
  // 상품명 + 옵션명 + 재고 N개 을 같이 보여줘야함
  // 재고 0인 상품의 경우 옵션을 선택하지 못하게함

  // [
  //  { 
  //    optionName : "",
  //    optionPrice : n,
  //    stock : n  
  //  },
  //  ...
  // ]

  this.state = state

  this.setState = (newState) => {
    this.state = newState;
    this.render()
  }

  this.render = () => {

    if (this.state && Array.isArray(this.state)) {
      selectElement.innerHTML = `
      ${this.state.map(option =>
        `<option value="${option.id}">${option.optionName}</option>`
      ).join("")}
      `
      console.log(state)
    }
  }

  this.render()
}
