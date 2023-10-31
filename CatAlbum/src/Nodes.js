export default function Nodes({ target, state, onClick, onPrevClick }) {
  const divElement = document.createElement("div");
  target.appendChild(divElement);
  divElement.classList.add("nodes");

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    divElement.innerHTML = `
      ${
        isRoot
          ? ""
          : `
        <div class="Node">
          <img src="https://cdn.roto.codes/images/prev.png">
        </div>
      `
      }
      ${nodes
        .map(
          (node) => `
        <div class="Node" data-id="${node.id}">
        ${
          node.type === "DIRECTORY"
            ? `<img src="https://cdn.roto.codes/images/directory.png">`
            : `<img src="https://cdn.roto.codes/images/file.png">`
        }
          ${node.name}
        </div>
        `
        )
        .join("")}
    `;
  };

  this.render();

  divElement.addEventListener("click", (e) => {
    const nodeElement = e.target.closest(".Node");

    const { id } = nodeElement.dataset;

    if (!id) {
      // 뒤로가기 처리
      onPrevClick();
      return;
    }

    const node = this.state.nodes.find((node) => node.id === id);
    console.log(node);
    if (node) {
      onClick(node);
    } else {
      onPrevClick();
    }
  });
}
