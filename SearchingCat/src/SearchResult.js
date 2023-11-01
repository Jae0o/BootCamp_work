export default function SearchResults({ target, state }) {
  const resultElement = document.createElement("div");
  resultElement.className = "SearchResults";
  target.appendChild(resultElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    resultElement.innerHTML = `
    ${this.state.map(
      (result) => `
    <div>
      <img src="${result.url}" />
    </div>
    `
    )}
    `;
  };
  this.render();
}
