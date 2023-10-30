export default function PostList({ target, state, onScrollEnded }) {
  const postListElement = document.createElement("div");

  target.appendChild(postListElement);
  this.state = state;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !this.state.isLoading &&
          this.state.photos.length < this.state.totalCount
        ) {
          onScrollEnded();
        }
      });
    },
    {
      threshold: 0,
    }
  );

  let lastliElement = null;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  let isInitialize = false;
  this.render = () => {
    if (!isInitialize) {
      postListElement.innerHTML = `
      <ul class="photoList_photos">

      </ul>
      `;
    }
    const { photos } = this.state;

    const ulElement = postListElement.querySelector(".photoList_photos");

    photos.forEach((photo) => {
      if (ulElement.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const liElement = document.createElement("li");
        liElement.setAttribute("data-id", photo.id);
        liElement.style.listStyle = "none";
        liElement.style.minHeight = "500px";
        liElement.innerHTML = `
          <img width="100%" src="${photo.imagePath}" />
        `;
        ulElement.appendChild(liElement);
      }
    });
    const nextLiElement = ulElement.querySelector("li:last-child");

    if (nextLiElement !== null) {
      if (lastliElement !== null) {
        observer.unobserve(lastliElement);
      }

      lastliElement = nextLiElement;
      observer.observe(lastliElement);
    }
  };

  this.render();
  // window.addEventListener("scroll", () => {
  //   const { isLoading, totalCount, photos } = this.state;
  //   const isScorllEnded =
  //     window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight;

  //   if (isScorllEnded && !isLoading && photos.length < totalCount) {
  //     onScrollEnded();
  //   }
  // });
}
