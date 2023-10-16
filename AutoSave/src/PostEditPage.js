import { request } from "./API.js";
import Editor from "./Editor.js"
import { getItem, setItem } from "./LocalStorage.js"

export default function PostEditPage({ target, state }) {
  // 어떤 게시글을 편집하는지에 대한 값을 상태로 받음

  const pageElement = document.createElement('div');

  this.state = state

  const TEMP_POST_KEY = `temp-post-${this.state.postId}`

  const savePost = getItem(TEMP_POST_KEY, {
    title: "",
    content: ""
  })

  let timer = null

  const editor = new Editor({
    target: pageElement,
    state: this.state.post,
    onEditing: (params) => {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setItem(TEMP_POST_KEY, {
          ...params,
          tempSaveDate: new Date()
        })
      }, 1000)
    }
  })

  this.setState = async newState => {
    if (this.state.postId !== newState.postId) {
      this.state = newState
      await fetchPost()
      return
    }

    this.state = newState
    editor.setState(this.state.post)
    this.render()
  }

  this.render = () => {
    target.appendChild(pageElement)
  }


  const fetchPost = async () => {
    const { postId } = this.state

    if (postId !== 'new') {
      const post = await request(`/posts/${postId}`)

      this.setState({
        ...this.state,
        post
      })
    }

  }
  this.render()
}
