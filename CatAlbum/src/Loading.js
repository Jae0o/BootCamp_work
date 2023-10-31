export default function Loading({ target }) {
  const loadingElement = document.createElement("div");
  loadingElement.className = "Loading Modal";
  target.appendChild(loadingElement);

  this.state = false;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render = () => {
    loadingElement.style.display = this.state ? "block" : "none";

    loadingElement.innerHTML = `
      <div class="content">
        <img wdith="100%" src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..."/>
      </div>
    `;
  };

  this.render();
}
