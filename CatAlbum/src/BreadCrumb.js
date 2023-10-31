export default function BreadCrumb({ target, state, onClick }) {
  const breadCrumbElement = document.createElement("nav");
  breadCrumbElement.className = "Breadcrumb";
  target.appendChild(breadCrumbElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    breadCrumbElement.innerHTML = `
      <div class="Breadcrumb_item">Root</div>
      ${this.state
        .map(
          ({ name, id }) => `
        <div class="Breadcrumb_item" data-id="${id}">${name}</div>
      `
        )
        .join("")}
    `;
  };
  this.render();

  breadCrumbElement.addEventListener("click", (e) => {
    const breadCrumbItem = e.target.closest(".Breadcrumb_item");

    const { id } = breadCrumbItem.dataset;

    onClick(id);
  });
}
