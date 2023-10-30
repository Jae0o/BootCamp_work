export default function PostList({ target, state }) {
  const postListElement = document.createElement("ul");

  target.appendChild(postListElement);
  this.state = state;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { photoList } = this.state;
    postListElement.innerHTML = `
      ${this.state
        .map((photo) => {
          `
          <li>
            <img width="100%" src="${photo.imageUrl}" />
          </li>
          `;
        })
        .join("")}
    `;
  };

  this.render();
}
