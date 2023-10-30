import { request } from "./Api.js";
import PostList from "./PostList.js";

export default function App({ target }) {
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = `photo's`;
  titleElement.style.textAlign = "center";
  target.appendChild(titleElement);

  this.state = {
    limit: 5,
    nextStart: 0, // 리미트의 갯수만큼 계속 더해질 예정
    photos: [],
    isLoading: false,
    totalCount: 0,
  };

  const postListElement = new PostList({
    target,
    state: {
      photos: this.state.photos,
      isLoading: this.state.isLoading,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    postListElement.setState({
      photos: this.state.photos,
      isLoading: this.state.isLoading,
      totalCount: this.state.totalCount,
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );

    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: [...this.state.photos, ...photos],
      isLoading: false,
    });
  };

  const Initialize = async () => {
    const totalCount = await request(`/cat-photos/count`);

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  Initialize();
}
