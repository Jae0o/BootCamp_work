// state 구조
// {
//   productId : n,
//   product : "",
//   optionData : [],
//   selectedOption : []
// }

import ProductOptions from "./ProductOptions.js"
import { requestAPI } from "../API/FetchApi.js";
import Cart from "../Cart.js";


export default function ProductPage({
  target,
  state
}) {
  const productElement = document.createElement('div')
  target.appendChild(productElement)
  this.state = state

  const productOptions = new ProductOptions({
    target: productElement,
    state: [],
    onSelect: (option) => {
      const nextState = { ...this.state }
      const { selectedOptions } = this.state
      const selectedOptionIndex = selectedOptions.findIndex(seleted => seleted.optionId === option.optionId)
      if (selectedOptionIndex > -1) {
        nextState.selectedOptions[selectedOptionIndex].ea++
      } else {
        nextState.selectedOptions.push({
          optionId: option.optionId,
          optionName: option.optionName,
          optionPrice: option.optionPrice,
          ea: 1
        })
      }
      this.setState(nextState)
    }
  })

  const cart = new Cart({
    target: productElement,
    state: {
      productName: "",
      basePrice: 0,
      selectedOptions: [

      ]

    },
    onRemove: (index) => {
      const nextState = { ...this.state }
      nextState.selectedOptions.splice(index, 1)
      this.setState(nextState)
    }
  })


  this.setState = (nextState) => {
    if (nextState.productId !== this.state.productId) {
      optionData(nextState.productId)
      return
    }

    this.state = nextState

    const { product, selectedOptions, optionData } = this.state;
    productOptions.setState(optionData)
    cart.setState({
      productName: product.name,
      basePrice: product.basePrice,
      selectedOptions: selectedOptions
    })
  }

  this.render = () => { }
  this.render()


  const optionData = (productId) => {
    return requestAPI(`/products/${productId}`)
      .then(product => {
        this.setState({
          ...this.state,
          product,
          optionData: [],
          selectedOptions: []
        })
        return requestAPI(`/product-options?product.id=${product.id}`)
      })
      .then(productOptions => {
        return Promise.all([
          Promise.resolve(productOptions),
          Promise.all(productOptions.map(productOption => productOption.id).map(id => {
            return requestAPI(`/product-option-stocks?productOption.id=${id}`)
          }))
        ])
      }).then(data => {
        const [productOption, stocks] = data;
        const optionData = productOption.map((option, i) => {
          const stock = stocks[i][0].stock
          return {
            optionId: option.id,
            optionName: option.optionName,
            optionPrice: option.optionPrice,
            stock: stock
          }
        })

        this.setState({
          ...this.state,
          optionData: optionData
        })
        productOptions.setState(optionData)

      })
  }

  optionData(this.state.productId)

}
