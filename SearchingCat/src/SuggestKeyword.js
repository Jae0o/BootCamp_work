export default function SuggestKeyword({ target, state, onKeywordSelect }) {
  const suggestElement = document.createElement("div");
  suggestElement.className = "Keywords";

  target.appendChild(suggestElement);

  this.state = state;
  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  this.render = () => {
    const { keywords, cursor } = this.state;
    suggestElement.innerHTML = `
    <ul>
      ${keywords
        .map(
          (keyword, i) => `
        <li class="${cursor === i ? "active" : ""}">${keyword}</li>
      `
        )
        .join("")}
    </ul>
    `;

    suggestElement.style.display = keywords.length > 0 ? "block" : "none";
  };

  this.render();

  suggestElement.addEventListener("click", (e) => {
    const liElement = e.target.closest("li");

    if (liElement) {
      onKeywordSelect(liElement.textContent);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (suggestElement.style.display !== "none") {
      const { key } = e;
      // keydown
      if (key === "ArrowUp") {
        const nextCursor = this.state.cursor - 1;
        this.setState({
          ...this.state,
          cursor: nextCursor < 0 ? this.state.keywords.length - 1 : nextCursor,
        });
      }
      // keyup
      if (key === "ArrowDown") {
        const nextCursor = this.state.cursor + 1;
        this.setState({
          ...this.state,
          cursor: nextCursor > this.state.keywords.length - 1 ? 0 : nextCursor,
        });
      }
      // enter
      if (key === "Enter") {
        onKeywordSelect(this.state.keywords[this.state.cursor]);
      }
    }
  });
}
