import { request } from "./API.js"
import PostList from "./PostList.js"

export default function PostsPage({ target, state }) {
  const pageElement = document.createElement('div')


  const postList = new PostList({
    target,
    state: []
  })

  const newPostButton = document.createElement('button')
  newPostButton.textContent = 'New Post'
  pageElement.append(newPostButton)

  const fetchPosts = async () => {
    const posts = await request('/posts')
    postList.setState(posts)
  }

  this.render = async () => {
    await fetchPosts()

    target.appendChild(pageElement)
  }

}
