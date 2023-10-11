// state 구조
// {
//   productId : n,
//   product : "",
//   optionData : []
// }

import ProductOptions from "./ProductOptions.js"
import { requestAPI } from "../API/FetchApi.js";


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
    onSelect: (res) => console.log(res)
  })




  this.setState = (nextState) => {
    if (nextState.productId !== this.state.productId) {
      optionData(nextState.productId)
      return
    }

    this.state = nextState
    productOptions.setState(this.state.optionData)
  }

  this.render = () => {

  }
  this.render()


  const optionData = (productId) => {
    return requestAPI(`/products/${productId}`)
      .then(product => {
        this.setState({
          ...this.state,
          product,
          optionData: []
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
            optionPrice: option.price,
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
