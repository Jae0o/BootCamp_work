export default function ProductOptions({ target, state, onSelect }) {
  const selectElement = document.createElement('select');
  target.appendChild(selectElement)

  // 재고를 조회하는 API
  // 옵션을 조회하는 API 가 다르게 존재함
  // 상품명 + 옵션명 + 재고 N개 을 같이 보여줘야함
  // 재고 0인 상품의 경우 옵션을 선택하지 못하게함

  // [
  //  { 
  //    id : n,
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

  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice}))` : ""} | ${stock > 0 ? `재고 : ${stock}` : `재고 없음`}`
  }

  selectElement.addEventListener('change', (e) => {
    const optionID = parseInt(e.target.value)

    const option = this.state.find(option => option.id === optionID)
    onSelect(option)
  })

  this.render = () => {

    if (this.state && Array.isArray(this.state)) {
      selectElement.innerHTML = `
      <option> 선택하기 </option>
      ${this.state.map(option =>
        `<option ${option.stock === 0 ? "disabled" : ""} value="${option.id}">${createOptionFullName(option)}</option>`
      ).join("")}
      `
    }
  }


  this.render()
}
