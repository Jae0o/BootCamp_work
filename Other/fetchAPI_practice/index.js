

import ProductPage from "./src/Product/ProductPage.js";


// const testData = [
//   {
//     optionId: 1,
//     optionName: "test1",
//     optionPrice: 1000,
//     stock: 40
//   },
//   {
//     optionId: 2,
//     optionName: "test2",
//     optionPrice: 2000,
//     stock: 0
//   },
//   {
//     optionId: 3,
//     optionName: "test4",
//     optionPrice: 4000,
//     stock: 5
//   },
//   {
//     optionId: 4,
//     optionName: "test3",
//     optionPrice: 3000,
//     stock: 27
//   }
// ]
// const optionData = (productId) => {
//   return requestAPI(`/products/${productId}`)
//     .then(product => {
//       return requestAPI(`/product-options?product.id=${product.id}`)
//     })
//     .then(productOptions => {
//       return Promise.all([
//         Promise.resolve(productOptions),
//         Promise.all(productOptions.map(productOption => productOption.id).map(id => {
//           return requestAPI(`/product-option-stocks?productOption.id=${id}`)
//         }))
//       ])
//     }).then(data => {
//       const [productOption, stocks] = data;
//       const optionData = productOption.map((option, i) => {
//         const stock = stocks[i][0].stock
//         return {
//           optionId: option.id,
//           optionName: option.optionName,
//           optionPrice: option.price,
//           stock: stock
//         }
//       })

//       productOptionsComponent.setState(optionData)
//     })
// }



const appElement = document.querySelector('#app');

new ProductPage({
  target: appElement,
  state: {
    productId: 1
  }
})
