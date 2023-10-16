import App from "./App.js"
import PostEditPage from "./PostEditPage.js"


const targetElement = document.querySelector('#app')
// new App({ target: targetElement })

const postEditPage = new PostEditPage({
  target: targetElement,
  state: {
    postId: 'new'
  }
})

postEditPage.setState({
  postId: 11
})
