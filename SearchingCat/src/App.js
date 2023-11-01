import Header from "./Header.js";
import SearchResults from "./SearchResult.js";
import SuggestKeyword from "./SuggestKeyword.js";
import { request } from "./api.js";

export default function APP({ target }) {
  this.state = {
    keyword: "",
    keywords: [],
    catImages: [],
  };

  this.setState = (newState) => {
    this.state = newState;

    suggestKeyword.setState({
      keywords: this.state.keywords,
    });

    if (this.state.keyword !== newState.keyword) {
      header.setState({ keyword: this.state.keyword });
    }

    if (this.state.catImages.length > 0) {
      search.setState(this.state.catImages);
    }
  };

  const header = new Header({
    target,
    state: {},
    onKeywordInput: async (keyword) => {
      if (keyword.trim().length > 1) {
        const keywords = await request(`/keywords?q=${keyword}`);

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    },
    onEnter: () => {
      fetchCatsImage();
    },
  });

  const suggestKeyword = new SuggestKeyword({
    target,
    state: {
      keywords: this.state.keywords,
      cursor: -1,
    },
    onKeywordSelect: (keyword) => {
      this.setState({
        ...this.state,
        keyword,
        keywords: [],
      });
      fetchCatsImage();
    },
  });

  const search = new SearchResults({
    target,
    state: this.state.catImages,
  });

  const fetchCatsImage = async () => {
    const { data } = await request(`/search?q=${this.state.keyword}`);
    console.log(data);
    this.setState({
      ...this.state,
      catImages: data,
      keywords: [],
    });
  };
}
