import Keyword from "./Keyword.js";

export default function Header({ target, state, onKeywordInput, onEnter }) {
  const headerElement = document.createElement("header");
  headerElement.className = "Header";

  target.appendChild(headerElement);

  const titleElement = document.createElement("h1");
  titleElement.style.textAlign = "center";
  titleElement.innerHTML = "🐈 고양이 사진 검색기 🔍";
  headerElement.appendChild(titleElement);

  this.state = state;

  this.setState = (newState) => {
    if (this.state.keyword !== newState.keyword) {
      this.state = newState;

      keyword.setState({
        value: this.state.keyword,
      });
    }
  };

  const keyword = new Keyword({
    target: headerElement,
    state: { keyword: this.state.keyword },
    onKeywordInput,
    onEnter,
  });
}
