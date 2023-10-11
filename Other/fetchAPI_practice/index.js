import ProductOptions from "./src/ProductOptions.js"

const testData = [
  {
    optionName: "test1",
    optionPrice: 1000,
    stock: 40
  },
  {
    optionName: "test2",
    optionPrice: 2000,
    stock: 0
  },
  {
    optionName: "test4",
    optionPrice: 4000,
    stock: 5
  },
  {
    optionName: "test3",
    optionPrice: 3000,
    stock: 27
  }
]

const appElement = document.querySelector('#app');
new ProductOptions({ target: appElement, state: testData })
