import { request } from "./API.js"
import LinkButton from "./LinkButton.js"
import PostList from "./PostList.js"


export default function PostsPage({ target }) {
  const pageElement = document.createElement('div')


  const postList = new PostList({
    target: pageElement,
    state: []
  })


  new LinkButton({
    target: pageElement,
    state: {
      text: "페이지 생성",
      link: '/posts/new'
    }
  })
  this.render = () => {
    target.appendChild(pageElement)
  }

  this.setState = async () => {
    const posts = await request('/posts')
    postList.setState(posts)
    this.render()
  }




}
