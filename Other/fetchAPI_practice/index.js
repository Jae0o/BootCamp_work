import ProductOptions from "./src/ProductOptions.js"

const testData = [
  {
    id: 1,
    optionName: "test1",
    optionPrice: 1000,
    stock: 40
  },
  {
    id: 2,
    optionName: "test2",
    optionPrice: 2000,
    stock: 0
  },
  {
    id: 3,
    optionName: "test4",
    optionPrice: 4000,
    stock: 5
  },
  {
    id: 4,
    optionName: "test3",
    optionPrice: 3000,
    stock: 27
  }
]

const appElement = document.querySelector('#app');
new ProductOptions({
  target: appElement,
  state: testData,
  onSelect: (params) => console.log(params)
})
