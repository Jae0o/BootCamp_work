export default function TodoForm({ target, onSubmit }) {
  const formElement = document.createElement('form')
  target.appendChild(formElement);


  this.render = () => {
    formElement.innerHTML = `
      <input type='text' placeholder='todo 입력'>
      <button> Submit </button>
    `
  }
  formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputElement = formElement.querySelector('input');
    const content = inputElement.value
    onSubmit(content)
    inputElement.value = ""

  })

  this.render()
}
