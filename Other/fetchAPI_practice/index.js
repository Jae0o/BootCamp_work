import ProductPage from "./src/Product/ProductPage.js";

const appElement = document.querySelector('#app');

new ProductPage({
  target: appElement,
  state: {
    productId: 1
  }
})
