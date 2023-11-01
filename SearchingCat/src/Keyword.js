export default function Keyword({ target, state, onKeywordInput, onEnter }) {
  const keywordElement = document.createElement("input");
  keywordElement.className = "Keyword";

  target.appendChild(keywordElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    keywordElement.value = this.state.value;
  };

  keywordElement.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      onEnter();
      return;
    }
    onKeywordInput(e.target.value);
  });
}
