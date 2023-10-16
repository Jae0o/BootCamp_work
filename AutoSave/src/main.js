import App from "./App.js"
import Editor from "./Editor.js"
import { getItem, setItem } from "./LocalStorage.js"

const targetElement = document.querySelector('#app')
// new App({ target: targetElement })

const TEMP_POST_KEY = "temp-post"

const savePost = getItem(TEMP_POST_KEY, {
  title: "",
  content: ""
})

let timer = null

new Editor({
  target: targetElement,
  state: savePost,
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

