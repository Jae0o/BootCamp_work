import { getItem, removeItem, saveItem } from "./LocalStorage.js";
const TODO_TEMP_SAVE_KEY = 'TODO_LIST_FORM_TEXT'

export default function TodoForm({ target, onSubmit }) {
  const formElement = document.createElement('form')
  target.appendChild(formElement);

  this.render = () => {
    formElement.innerHTML = `
      <input type='text' placeholder='todo 입력'>
      <button> Submit </button>
    `
  }

  // Form 이 submit 되었을 때의 Event
  formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputElement = formElement.querySelector('input');
    const content = inputElement.value

    // Submit 이 동작하면 전달받은 text를 onSubmit 함수에 전달
    onSubmit(content)
    // 해당 input 창의 값을 초기화!
    inputElement.value = ""
    // 그리고 local에 저장된 기존 user의 입력 데이터 삭제
    removeItem(TODO_TEMP_SAVE_KEY)
  })

  this.render()
  // render 진행후! input 창에 현재 저장된 값과 Event를 걸어줌
  const inputElement = formElement.querySelector('input')
  // render로 호출된후 LocalStorage에 저장된 이전 user의 입력값을 다시 넣어줌
  inputElement.value = getItem(TODO_TEMP_SAVE_KEY, '')
  // user 가 타이핑 / 입력 할때마다 값을 바로바로 LocalStorage에 담음
  inputElement.addEventListener('keyup', (e) => {
    saveItem(TODO_TEMP_SAVE_KEY, e.target.value)
  })
}
