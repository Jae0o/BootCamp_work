import PostEditPage from "./PostEditPage.js";
import PostsPage from "./PostsPage.js";
import { initRouter } from "./router.js";


export default function App({ target }) {
  const postsPage = new PostsPage({
    target,
    onPostClick: (id) => {
      history.pushState(null, null, `/posts/${id}`)
      this.route()
    }
  })

  const postEdiorPage = new PostEditPage({
    target,
    state: {
      postId: 'new',
      post: {
        title: '',
        content: ''
      }
    }
  })

  this.route = () => {
    target.innerHTML = ''

    const { pathname } = window.location

    if (pathname === '/') {
      postsPage.setState()

    } else if (pathname.indexOf('/posts/') === 0) {

      const [, , postId] = pathname.split('/')
      postEdiorPage.setState({ postId })
    }
  }

  this.route()
  initRouter(() => this.route())
} 
