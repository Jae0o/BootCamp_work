import { requestAPI } from "./src/API/api.js";
import ProductOptions from "./src/ProductOptions.js"

const optionData = (productId) => {
  return requestAPI(`/products/${productId}`)
    .then(product => {
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

      productOptionsComponent.setState(optionData)
    })
}



const appElement = document.querySelector('#app');
const productOptionsComponent = new ProductOptions({
  target: appElement,
  state: [],
  onSelect: (params) => {
    optionData(params.optionId)
  }
})
