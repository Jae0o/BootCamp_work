export default function ImgaeViewer({ target, onClose }) {
  const imageELement = document.createElement("div");
  imageELement.className = "ImageViewer Modal";
  target.appendChild(imageELement);

  this.state = {
    selectedIamgeUrl: null,
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    imageELement.style.display = this.state.selectedIamgeUrl ? "block" : "none";

    if (this.state.selectedIamgeUrl) {
      imageELement.innerHTML = `
        <div class="content">
          <img src="${this.state.selectedIamgeUrl}" />
        </div>
      `;
    }
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  });

  imageELement.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
}
