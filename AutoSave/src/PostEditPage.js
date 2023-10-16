import { request } from "./API.js"
import Editor from "./Editor.js"
import LinkButton from "./LinkButton.js";
import { getItem, removeItem, setItem } from "./LocalStorage.js"

export default function PostEditPage({ target, state }) {
  // 어떤 게시글을 편집하는지에 대한 값을 상태로 받음

  const pageElement = document.createElement('div');

  this.state = state

  let postLocalSaveKey = `temp-post-${this.state.postId}`

  const savePost = getItem(postLocalSaveKey, {
    title: "",
    content: ""
  })

  let timer = null

  const editor = new Editor({
    target: pageElement,
    state: savePost,
    onEditing: (params) => {
      if (timer !== null) {
        clearTimeout(timer)
      }
      timer = setTimeout(async () => {
        setItem(postLocalSaveKey, {
          ...params,
          tempSaveDate: new Date()
        })

        const isNew = this.state.postId === 'new'
        if (isNew) {
          const createdPost = await request('/posts', {
            method: 'POST',
            body: JSON.stringify(params)
          })

          history.replaceState(null, null, `/posts/${createdPost.id}`)
          removeItem(postLocalSaveKey)

          this.setState({
            postId: createdPost.id
          })
        } else {
          await request(`/posts/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params)
          })
          removeItem(postLocalSaveKey)
        }
      }, 1000)
    }
  })

  this.setState = async newState => {
    if (this.state.postId !== newState.postId) {
      postLocalSaveKey = `temp-post-${newState.postId}`
      this.state = newState

      if (this.state.postId === 'new') {
        const savePost = getItem(postLocalSaveKey, {
          title: "",
          content: ""
        })
        editor.setState(savePost)
      }
      await fetchPost()
      return
    }

    this.state = newState
    editor.setState(this.state.post ?? {
      title: '',
      content: ''
    })
    this.render()
  }

  this.render = () => {
    target.appendChild(pageElement)
  }


  const fetchPost = async () => {
    const { postId } = this.state

    if (postId !== 'new') {
      const post = await request(`/posts/${postId}`)

      const tempPost = getItem(postLocalSaveKey, {
        title: '',
        content: ''
      })

      if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm(' 이전 데이터 불러오쉴?')) {
          this.setState({
            ...this.state,
            post: tempPost
          })
          return
        }
      }
      this.setState({
        ...this.state,
        post
      })
    }
  }

  new LinkButton({
    target: pageElement,
    state: {
      link: '/',
      text: "목록으로 이동"
    }
  })
}
