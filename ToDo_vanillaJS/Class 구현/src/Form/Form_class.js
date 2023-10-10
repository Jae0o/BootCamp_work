import InputText from "./InputText_class.js"
import SubmitButton from "./submitButton_class.js"

export default class Form {
  constructor({ target, onSubmit }) {
    this.formElement = document.createElement('form')
    this.formElement.setAttribute('class', 'form')
    target.appendChild(this.formElement)

    const inputElement = new InputText({ target: this.formElement })
    new SubmitButton({ target: this.formElement })

    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault()

      const inputElement = document.querySelector('.form_input');
      const newText = inputElement.value;

      if (newText !== 0 && !newText) {
        return alert("undefined")
      };

      onSubmit(newText);
      inputElement.value = "";

    })
  }
}
