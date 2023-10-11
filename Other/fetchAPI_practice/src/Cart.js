/* 
  state 형태
  {
    productName "",
    basePrice n,
    selectedOption : []
  }
*/



export default function Cart({ target, onRemove, state }) {
  const cartElement = document.createElement('div')
  target.appendChild(cartElement)

  this.state = state

  this.setState = (nextState) => {
    console.log(nextState)
    this.state = nextState
    this.render()
  }
  const calculateTotal = () => {
    const { basePrice, selectedOptions } = this.state

    return selectedOptions.reduce((total, option) => {
      return total + ((basePrice + option.optionPrice) * option.ea)
    }, 0)
  }

  const renderOption = (option, i) => {
    const { productName, basePrice } = this.state
    return `
    <li data-index=${i}>${productName} - ${option.optionName} | ${basePrice + option.optionPrice}, ${option.ea}개 
    <button class="remove">x</button></li>
    `
  }


  this.render = () => {
    const { selectedOptions } = this.state
    cartElement.innerHTML = `
      <ul>
        ${Array.isArray(selectedOptions) && selectedOptions.map((option, index) =>
      renderOption(option, index)
    ).join("")}

      </ul>
      <div>
        ${calculateTotal()}
      </div>
    `

    cartElement.querySelectorAll(".remove").forEach(button => {
      button.addEventListener('click', (e) => {
        const liElement = e.target.closest("li");

        if (liElement) {
          const { index } = liElement.dataset
          onRemove(parseInt(index))
        }
      })
    })
  }

  this.render()
}
